import logo from "../foto/logo.png";
import {
  FooterLogo,
  FooterSection,
  ContactList,
  Contacts,
  LogoItem,
  WishList,
  FlexWrapper
} from "./FoterStyled";
import { Container } from "../container/Container";

export const Footer = () => {
  return (
    <FooterSection>
      <Container>
        <FlexWrapper>
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
            <Contacts>Сподіваємося, наш сайт був корисним для вас</Contacts>
          </WishList>
        </FlexWrapper>
      </Container>
    </FooterSection>
  );
};
