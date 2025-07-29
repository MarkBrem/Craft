import { useState, useEffect } from "react";
import { Container } from "../../container/Container";
import { RoomGridStl, GridCell, RoomBackground } from "./RoomGrid.styled";
import floorTexture from "../../foto/c6a47533567533d7eb19209983b773e8.jpg";
import bgImage from "../../foto/bgimage.jpg";
import {
  BasketButton,
  BasketContainer,
  BasketItem,
  BasketList,
  BasketText,
  BasketTitle,
  ButtonList,
  Delete,
  MainItemContainer,
  ImageBascetContainer,
  TextBascetConatiner,
} from "./BasketStyled";
import { useDrop } from "react-dnd";
import { DraggableFurniture } from "./DraggableFurniture";
import { IoMdAdd } from "react-icons/io";
import { MdDeleteOutline } from "react-icons/md";

export const RoomGrid = () => {
  const [cartItems, setCartItems] = useState([]);
  const [placedItems, setPlacedItems] = useState([]);
  const [selectedItemId, setSelectedItemId] = useState(null);

  const removeFromCart = (id) => {
    const updatedCart = cartItems.filter((item) => item.id !== id);
    setCartItems(updatedCart);
    localStorage.setItem("cart", JSON.stringify(updatedCart));
  };
  useEffect(() => {
    const loadCartFromLocalStorage = () => {
      try {
        const storedCart = localStorage.getItem("cart");
        if (storedCart) {
          setCartItems(JSON.parse(storedCart));
        }
      } catch (error) {
        console.error("Помилка при завантаженні кошика з localStorage:", error);
      }
    };

    loadCartFromLocalStorage();

    const handleStorageChange = (event) => {
      if (event.key === "cart") {
        loadCartFromLocalStorage();
      }
    };

    window.addEventListener("storage", handleStorageChange);

    return () => {
      window.removeEventListener("storage", handleStorageChange);
    };
  }, []);

  const placeItemInGrid = (item) => {
    const isPlaced = placedItems.some((arrEl) => arrEl.id === item.id);
    if (!isPlaced) {
      setPlacedItems((prev) => [...prev, { ...item, x: 50, y: 50, rotation: 0 }]);
    }
  };

  const moveItem = (id, moveX, moveY) => {
    setPlacedItems((prev) =>
      prev.map((item) =>
        item.id === id
          ? { ...item, x: item.x + moveX, y: item.y + moveY }
          : item
      )
    );
  };

  const rotateItem = (id) =>{
    setPlacedItems((prev)=>
      prev.map((item)=> item.id === id ? {...item, rotation: (item.rotation + 45) % 360}: item)
    )
  }

  const deleteItem = (id) => {
    setPlacedItems((prev) => prev.filter((item) => item.id != id));

    if(selectedItemId === id){
      setSelectedItemId(null)
    }

  };

  const [, drop] = useDrop(() => ({
    accept: "furniture",
    drop: (item, monitor) => {
      const movementOffset = monitor.getDifferenceFromInitialOffset();
      if (movementOffset) {
        const moveX = movementOffset.x;
        const moveY = movementOffset.y;
        moveItem(item.id, moveX, moveY);
      }
    },
  }));

  useEffect(() => {
  const savedPlacedItems = localStorage.getItem("placedItems");
  if (savedPlacedItems) {
    setPlacedItems(JSON.parse(savedPlacedItems));
  }
}, []);

useEffect(() => {
  localStorage.setItem("placedItems", JSON.stringify(placedItems));
}, [placedItems]);

  return (
    <RoomBackground image={bgImage}>
      <Container>
        <RoomGridStl ref={drop} image={floorTexture} onClick={()=>{setSelectedItemId(null)}}>
          {Array.from({ length: 36 }).map((_, index) => (
            <GridCell key={index} />
          ))}

          {placedItems.map((item) => (
            <DraggableFurniture
              key={item.id}
              item={item}
              onDeleteBtn={deleteItem}
              isSelected = {selectedItemId === item.id}
              onSelect={()=>setSelectedItemId(item.id)}
              onRotate={rotateItem} 
            />
          ))}
        </RoomGridStl>

        <BasketContainer>
          <BasketTitle>Кошик</BasketTitle>
          {cartItems.length === 0 ? (
            <p>Кошик порожній.</p>
          ) : (
            <BasketList>
              {cartItems.map((item) => (
                <BasketItem key={item.id}>
                  <MainItemContainer>
                  <ImageBascetContainer>
                    <img src={item.foto3d} alt={item.foto3d} width="50px"/>
                  </ImageBascetContainer>
                  <TextBascetConatiner>
                  <BasketText>{item.name}</BasketText>
                  <ButtonList>
                    <BasketButton
                      type="button"
                      onClick={() => placeItemInGrid(item)}
                    >
                      <IoMdAdd size={20} />
                    </BasketButton>
                    <Delete
                      type="button"
                      onClick={() => removeFromCart(item.id)}
                    >
                      <MdDeleteOutline size={20} />
                    </Delete>
                  </ButtonList>
                  </TextBascetConatiner>
                  </MainItemContainer>
                </BasketItem>
              ))}
            </BasketList>
          )}
        </BasketContainer>
      </Container>
    </RoomBackground>
  );
};
