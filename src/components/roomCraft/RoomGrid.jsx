import { useState, useEffect } from 'react'; 
import { Container } from "../../container/Container";
import { RoomGridStl, GridCell, RoomBackground } from "./RoomGrid.styled";
import floorTexture from '../../foto/c6a47533567533d7eb19209983b773e8.jpg';
import bgImage from "../../foto/bgimage.jpg";
import { BasketContainer, BasketItem, BasketList } from './BasketStyled';
import { useDrop } from 'react-dnd';
import { DraggableFurniture } from './DraggableFurniture';

export const RoomGrid = () => {
  const [cartItems, setCartItems] = useState([]);
  const [placedItems, setPlacedItems] = useState([]);

  useEffect(() => {
    const loadCartFromLocalStorage = () => {
      try {
        const storedCart = localStorage.getItem('cart');
        if (storedCart) {
          setCartItems(JSON.parse(storedCart));
        }
      } catch (error) {
        console.error("Помилка при завантаженні кошика з localStorage:", error);
      }
    };

    loadCartFromLocalStorage();

    const handleStorageChange = (event) => {
      if (event.key === 'cart') {
        loadCartFromLocalStorage();
      }
    };

    window.addEventListener('storage', handleStorageChange);

    return () => {
      window.removeEventListener('storage', handleStorageChange);
    };
  }, []);

  const placeItemInGrid = (item) =>{
    const isPlaced = placedItems.some(arrEl => arrEl.id === item.id)
    if (!isPlaced){
      setPlacedItems(prev =>[...prev, {...item, x:50, y: 50}])
    }
  }

  const moveItem = (id, moveX, moveY) =>{
    setPlacedItems(prev => prev.map(item => item.id === id ? {... item, x: item.x + moveX, y: item.y + moveY} : item))
  }

  const handleDoubleClick = () => {
    onRemove(item.id);
  };

  const [, drop] = useDrop(()=>({
    accept: "furniture",
    drop: (item, monitor) =>{
      const movementOffset = monitor.getDifferenceFromInitialOffset()

      if(movementOffset){
        const moveX = movementOffset.x
        const moveY = movementOffset.y
        moveItem(item.id, moveX, moveY)
      }
    }
  }))

  return (
    <>
      <RoomBackground image={bgImage}>
        <Container>
          <RoomGridStl ref={drop} image={floorTexture}>
            {Array.from({ length: 36 }).map((_, index) => (
              <GridCell key={index} />
            ))}

            {placedItems.map((item)=> {
              return <DraggableFurniture key = {item.id} item = {item} />
            })}  

          </RoomGridStl>

          <BasketContainer>
            <h2>Кошик</h2>
            {cartItems.length === 0 ? (
              <p>Кошик порожній.</p>
            ) : (
              <BasketList>
                {cartItems.map((item, index) => (
                  <BasketItem key={item.id}>{item.name}
                  <button type='button' onClick={()=>{placeItemInGrid(item)}}>Розмістити в кімнаті</button>
                  </BasketItem>
                ))}
              </BasketList>
            )}
          </BasketContainer>

        </Container>
      </RoomBackground>
    </>
  );
};