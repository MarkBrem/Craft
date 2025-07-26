import logo from "../foto/logo.png";
import {
  FooterLogo,
  FooterSection,
  ContactList,
  Contacts,
  LogoItem,
  WishList,
} from "./FoterStyled";

export const Footer = () => {
  return (
    <>
      <FooterSection>
        <LogoItem>
          <FooterLogo src={logo} alt="" />
        </LogoItem>
        <ContactList>
          <li>
            <Contacts>Email: roomcraft@gmail.com</Contacts>
          </li>
          <li>
            <Contacts>Номер телефону: +380993207815</Contacts>
          </li>
        </ContactList>
        <WishList>
          <Contacts>Надіємось наш сайт був корисний вам</Contacts>
        </WishList>
        
      </FooterSection>
    </>
  );
};
