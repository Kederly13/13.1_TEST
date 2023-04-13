import './styles.scss'
import { NavLink } from 'react-router-dom';

import {routeMain as routeMainPage} from 'pages/MainPage';
import {routeMain as routeNewsListPage} from 'pages/NewsListPage';
import {routeMain as routeNewsDetail} from 'pages/NewsDetail';
import {routeMain as routeContacts} from 'pages/Contacts';

const Header = () => {
    return (
      <header className="mainHeader">
          <div className='title'>NEWS</div>
          <nav>
            <NavLink to={routeMainPage()} activeClassName={'linkActive'}>
              Главная
            </NavLink>
            <NavLink to={routeNewsListPage()} activeClassName={'linkActive'}>
              Новости
            </NavLink>
            <NavLink to={routeContacts()} activeClassName={'linkActive'}>
              Контакты
            </NavLink>
          </nav>
      </header>
    )
  }
  
  export default Header;