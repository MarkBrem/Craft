import { NavLink } from "react-router-dom";
import { HeadrerSection, NavList, UserItem, NavItem, Hello, Logo, LogoContainer, UserList} from "./HeaderStyled";
import { FaRegUserCircle } from "react-icons/fa";
import logo from '../foto/logo.png';

export const Header = ({name}) => {
  return (<>
    <HeadrerSection>
      <LogoContainer>
        <NavLink to={'./'}><Logo src={logo} alt="sdad " /></NavLink>
      </LogoContainer>
      
      
      <NavList>
        <NavItem>
            <NavLink to={'/HowItWorks'}>Як це працює</NavLink>
        </NavItem>
        <NavItem>
            <NavLink to={''}>Каталог</NavLink>
        </NavItem>
        <NavItem>
            <NavLink href="">Кімната</NavLink>
        </NavItem>
      </NavList>
      <UserList>
        <UserItem><Hello>Вітаю {name}!</Hello>
          <FaRegUserCircle  style={{width:'25px', height: 'auto', fill:'#fff'}}/>
        </UserItem>

      </UserList>
    </HeadrerSection >
  </>
    
  );
}