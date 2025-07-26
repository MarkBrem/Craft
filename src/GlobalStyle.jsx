import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
*{
  margin: 0;
  padding: 0;
}

ul {
  list-style: none; 
  }

  a{
    text-decoration: none;
    color: #fff;
  }

  a,p{
font-family: 'Manrope', sans-serif;
  }

  h1{
    font-family: 'Poppins', sans-serif;
  }
`;
