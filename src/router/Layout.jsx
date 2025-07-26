import { Container } from "../container/Container";
import { Header } from "../header/Header";
import { Outlet } from "react-router-dom";

export const Layout = () => {
  return (<>
      <Header/>
      <main>
        <Container> <Outlet /></Container>
      </main>
     
  </>
    
  );
}