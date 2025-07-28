import { useState, useEffect } from 'react'; 
import { Container } from "../../container/Container";
import { RoomGridStl, GridCell, RoomBackground } from "./RoomGrid.styled";
import floorTexture from '../../foto/c6a47533567533d7eb19209983b773e8.jpg';
import bgImage from "../../foto/bgimage.jpg";
import { BasketContainer, BasketItem, BasketList } from './BasketStyled';

export const RoomGrid = () => {
  const [cartItems, setCartItems] = useState([]);

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

  return (
    <>
      <RoomBackground image={bgImage}>
        <Container>
          <RoomGridStl image={floorTexture}>
            {Array.from({ length: 36 }).map((_, index) => (
              <GridCell key={index} />
            ))}
          </RoomGridStl>

          <BasketContainer>
            <h2>Кошик</h2>
            {cartItems.length === 0 ? (
              <p>Кошик порожній.</p>
            ) : (
              <BasketList>
                {cartItems.map((item, index) => (
                  <BasketItem key={index}>{item.name}</BasketItem>
                ))}
              </BasketList>
            )}
          </BasketContainer>

        </Container>
      </RoomBackground>
    </>
  );
};