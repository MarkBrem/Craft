import { Header } from "./header/Header";
import { GlobalStyle } from "./GlobalStyle";
import "./index.css";
import { Container } from "./container/Container";
 

export const App = () => {
  return <>
  <Container children={<Header/>}/>
  <GlobalStyle/>
  </>
};
