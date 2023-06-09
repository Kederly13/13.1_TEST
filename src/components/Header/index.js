import './styles.scss'
import { NavLink } from 'react-router-dom';

import {routeMain as routeMainPage} from 'pages/MainPage';
import {routeMain as routeNewsListPage} from 'pages/NewsListPage';
import {routeMain as routeNewsDetail} from 'pages/CommetsDetail';
import {routeMain as routeContacts} from 'pages/Contacts';

const Header = () => {
const getActiveLink = ({ isActive }) => isActive ? 'LinkActive' : '';

    return (
      <header className="mainHeader">
          <div className='title'>NEWS</div>
          <nav>
            <NavLink to={routeMainPage()} className={getActiveLink}>
              Главная
            </NavLink>
            <NavLink to={routeNewsListPage()} className={getActiveLink}>
              Новости
            </NavLink>
            <NavLink to={routeContacts()} className={getActiveLink}>
              Контакты
            </NavLink>
          </nav>
      </header>
    )
  }
  
  export default Header;