import styled from "styled-components";

export const CatalogList = styled.ul`
  margin-top: 30px;
  margin-bottom: 30px;
  display: flex;
  justify-content: center;
  flex-direction: row;
  flex-wrap: wrap;
  gap: 45px;

  @media screen and (max-width: 767px) {
    gap: 20px;
  }
`;

export const CatalogItem = styled.li`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  width: 230px;
  height: 280px;
  border-radius: 8px;
  background-color: #ffffff;
  padding: 10px;
  border-bottom: 1px solid #eee;
    border-right: 1px solid #eee;
    border-left: 1px solid #eee;

  img {
    max-width: 100%;
    max-height: 160px;
    object-fit: contain;
    margin-bottom: 10px;
  }

  
  @media screen and (max-width: 767px) {
    width: 230px;
    height: 260px;
  }
`;

export const CategoryList = styled.ul`
  display: flex;
  justify-content: center;
  gap: 10px;
`;

export const CategoryButton = styled.button`
  padding: 10px 20px;
  margin: 4px;
  border: none;
  cursor: pointer;
  border-radius: 8px;
  background-color: ${(props) => (props.$active ? "#76b041" : "#eee")};
  color: #000;
  font-weight: ${(props) => (props.$active ? "bold" : "normal")};
  transition: background-color 0.3s ease;

  @media screen and (max-width: 767px) {
    font-size: 12px;
    padding: 4px 8px;
  }
`;

export const CatalogButton = styled.button`
  display: block;
  background-color: #eee;
  border: none;
  border-radius: 20px;
  cursor: pointer;
  padding: 7px 100px;
  margin-top: auto;
  margin-bottom: 20px;

  @media screen and (max-width: 767px) {
  }
`;

export const CategorySectionContainer = styled.div`
  
`