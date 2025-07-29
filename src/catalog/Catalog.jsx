import { useState } from "react"; 
import { furniture } from "../array/array";
import { CatalogButton, CatalogItem, CatalogList, CategoryButton, CategoryList,  } from "./CatalogStyled";
import { Container } from "../container/Container";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { FaShoppingCart } from "react-icons/fa";


const allCategories = ["Столи", "Стільці", "Дивани", "Ліжка"];

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

  toast.success(`${item.name} додано до кошика!`);
};


  const filteredFurniture =
    selectedCategories.length === 0
      ? furniture
      : furniture.filter((item) => selectedCategories.includes(item.category));

  return (
    <>
    {/* <CategorySectionContainer> */}
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
              <CatalogButton onClick={() => addToCart(item)}><FaShoppingCart /></CatalogButton>
            </CatalogItem>
          ))}
        </CatalogList>
        <ToastContainer position="bottom-right" autoClose={2000} />
      </Container>
      {/* </CategorySectionContainer> */}
    </>
  );
};
