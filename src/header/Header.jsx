import { NavLink } from "react-router-dom";
import { HeadrerSection, NavList, UserItem, NavItem, Hello, Logo, LogoContainer, UserList, FlexWrapper, StyledNavLink} from "./HeaderStyled";
import { FaRegUserCircle } from "react-icons/fa";
import { Container } from "../container/Container";
import logo from '../foto/logo.png';

export const Header = ({ name }) => {
  return (
    <HeadrerSection>
      <Container>
        <FlexWrapper>
          <LogoContainer>
            <NavLink to={'./'}>
              <Logo src={logo} alt="logo" />
            </NavLink>
          </LogoContainer>

          <NavList>
            <NavItem>
              <StyledNavLink to={'/catalog'}>Каталог</StyledNavLink>
            </NavItem>
            <NavItem>
              <StyledNavLink to={'createRoom'}>Створити кімнату</StyledNavLink>
            </NavItem>
          </NavList>

          <UserList>
            <UserItem>
              <Hello>Вітаю {name}!</Hello>
              <FaRegUserCircle style={{ width: '25px', height: 'auto', fill: '#fff' }} />
            </UserItem>
          </UserList>
        </FlexWrapper>
      </Container>
    </HeadrerSection>
  );
};