import { useState } from "react"; 
import { furniture } from "../array/array";
import { CatalogItem, CatalogList, CategoryButton, CategoryList } from "./CatalogStyled";
import { Container } from "../container/Container";

const allCategories = ["Столи", "Стільці", "Дивани"];

export const Catalog = () => {
  const [selectedCategories, setSelectedCategories] = useState([]);

  const getCartFromLocalStorage = () => {
    try {
      const storedCart = localStorage.getItem('cart');
      return storedCart ? JSON.parse(storedCart) : [];
    } catch (error) {
      console.error("Помилка при зчитуванні кошика з localStorage:", error);
      return [];
    }
  };

  const saveCartToLocalStorage = (cartItems) => {
    try {
      localStorage.setItem('cart', JSON.stringify(cartItems));
    } catch (error) {
      console.error("Помилка при збереженні кошика в localStorage:", error);
    }
  };

  const toggleCategory = (category) => {
    setSelectedCategories((prev) =>
      prev.includes(category)
        ? prev.filter((c) => c !== category)
        : [...prev, category]
    );
  };

  const addToCart = (item) => {
    const currentCart = getCartFromLocalStorage();
    const updatedCart = [...currentCart, item];
    saveCartToLocalStorage(updatedCart);
    console.log("Додано до кошика (localStorage):", item.name);
  };

  const filteredFurniture =
    selectedCategories.length === 0
      ? furniture
      : furniture.filter((item) => selectedCategories.includes(item.category));

  return (
    <>
      <Container>
        <CategoryList>
          {allCategories.map((category) => (
            <li key={category}>
              <CategoryButton
                $active={selectedCategories.includes(category)}
                onClick={() => toggleCategory(category)}
              >
                {category}
              </CategoryButton>
            </li>
          ))}
        </CategoryList>

        <CatalogList>
          {filteredFurniture.map((item) => (
            <CatalogItem key={item.id}>
              <p>{item.name}</p>
              <button onClick={() => addToCart(item)}>Додати до кошика</button>
            </CatalogItem>
          ))}
        </CatalogList>
      </Container>
    </>
  );
};
