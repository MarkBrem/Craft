import styled from "styled-components";

export const CatalogList= styled.ul`
margin-top: 30px;
margin-bottom: 30px;
display: flex;
justify-content: center;
flex-direction: row;
flex-wrap: wrap;
gap: 45px;
`

export const CatalogItem = styled.li`
display: flex;
justify-content: center;
flex-direction: column;
align-items: center;
width: 230px;
height: 280px;
border-radius: 8px;
background-color: #76b041;
`

export const CategoryList = styled.ul`
display: flex;  
justify-content: center;
gap: 10px;
`
    

export const CategoryButton = styled.button`
  padding: 8px 16px;
  margin: 4px;
  border: none;
  cursor: pointer;
  border-radius: 8px;
  background-color: ${(props) => (props.$active ? "#76b041" : "#ccc")};
  color: #000;
  font-weight: ${(props) => (props.$active ? "bold" : "normal")};
  transition: background-color 0.3s ease;
  
`;

export const CatalogButton = styled.button`
display: block;
background-color: #fff;
border: none;
border-radius: 20px;
cursor: pointer;
padding:5px 2px 5px 2px;
margin-top: 20px;
width: 150px;
`