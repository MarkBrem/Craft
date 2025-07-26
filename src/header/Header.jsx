import { NavLink } from "react-router-dom";
import { HeadrerSection, NavList, UserItem, NavItem, Hello} from "./HeaderStyled";
import { FaRegUserCircle } from "react-icons/fa";
import { RegistrationForm } from "../components/Form";

export const Header = () => {
  return (<>
  <RegistrationForm/>
    <HeadrerSection>
      <img src="" alt="" />
      <NavList>
        <NavItem>
            <NavLink to={'/HowItWorks'}>Як це працює</NavLink>
        </NavItem>
        <NavItem>
            <NavLink to={'./'}>Каталог</NavLink>
        </NavItem>
        <NavItem>
            <NavLink href="">Кімната</NavLink>
        </NavItem>
        <NavItem>
            <NavLink href="">Контактні дані</NavLink>
        </NavItem>
      </NavList>
      <ul>
        <UserItem><Hello>Вітаю!</Hello>
          <FaRegUserCircle  style={{width:'25px', height: 'auto', fill:'#fff'}}/>
        </UserItem>

      </ul>
    </HeadrerSection >
  </>
    
  );
}