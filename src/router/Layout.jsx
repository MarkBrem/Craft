import { Container } from "../container/Container";
import { Header } from "../header/Header";
import { Outlet } from "react-router-dom";
import { useState } from 'react';
import { RegistrationForm } from "../components/Form";
import { Footer } from "../footer/Footer";

export const Layout = () => {
const [userName, setUserName] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleNameSubmit = (name) => {
    setUserName(name);
    setIsSubmitted(true);
  };
  return (<>
  <div style={{ height: '100vh', width: '100vw', margin: 0 }}>
      {!isSubmitted ? (
        <RegistrationForm onNameSubmit={handleNameSubmit} />
      ) : (<>
      <Header name= {userName}/>
      <main>
        <Container> <Outlet /></Container>
      </main>
      {/* <Footer/> */}
      </>
      )}
    </div>
      
     
  </>
    
  );
}