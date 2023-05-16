import { NavLink } from 'react-router-dom';

import {routeMain as routeMainPage} from 'pages/MainPage';
import {routeMain as routeNewsListPage} from 'pages/NewsListPage';
import {routeMain as routeContacts} from 'pages/Contacts';

import './styles.scss'

const Header = () => {
const getActiveLink = ({ isActive }: { isActive: boolean }) => isActive ? 'LinkActive' : '';

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
  
  export { Header };