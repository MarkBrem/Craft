
import { HeadrerSection, NavList, UserItem} from "./HeaderStyled";
import { FaRegUserCircle } from "react-icons/fa";

export const Header = () => {
  return (
    <HeadrerSection>
      <img src="" alt="" />
      <NavList>
        <li>
            <p><a href="">Як це працює</a></p>
        </li>
        <li>
            <p><a href="">Каталог</a></p>
        </li>
        <li>
            <p><a href="">Кімната</a></p>
        </li>
        <li>
            <p><a href="">Контактні дані</a></p>
        </li>
      </NavList>
      <ul>
        <UserItem><p>Вітаю!</p>
          <FaRegUserCircle  style={{width:'25px', height: 'auto', fill:'#fff'}}/>
        </UserItem>

      </ul>
    </HeadrerSection >
  );
}