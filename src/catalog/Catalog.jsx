import { useState } from "react";
import { furniture } from "../array/array";
import { CatalogItem, CatalogList, CategoryButton, CategoryList } from "./CatalogStyled";
import { Container } from "../container/Container";

const allCategories = ["Столи", "Стільці", "Дивани"];



export const Catalog = () => {
  const [selectedCategories, setSelectedCategories] = useState([]);

  const toggleCategory = (category) => {
    setSelectedCategories((prev) =>
      prev.includes(category)
        ? prev.filter((c) => c !== category)
        : [...prev, category]
    );
  };

  const filteredFurniture =
    selectedCategories.length === 0
      ? furniture
      : furniture.filter((item) => selectedCategories.includes(item.category));

  return (
    <Container>
      <CategoryList>
        {allCategories.map((category) => (
            <li>
              <CategoryButton
            key={category}
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
          </CatalogItem>
        ))}
      </CatalogList>
    </Container>
  );
};

