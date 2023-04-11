import './styles.scss'
import { NavLink } from 'react-router-dom';

import MainPage, {routeMain as routeMainPage} from 'pages/MainPage';
import NewsListPage, {routeMain as routeNewsListPage} from 'pages/NewsListPage';
import NewsDetail, {routeMain as routeNewsDetail} from 'pages/NewsDetail';
import Contacts, {routeMain as routeContacts} from 'pages/Contacts';

const Header = () => {
    return (
      <header className="mainHeader">
          <div className='title'> NEWS</div>
          <nav>
            <NavLink to={} className={'linkActive'}>
              Главноя
              </NavLink>
            <NavLink to={} className={'linkActive'}>
              Новости
            </NavLink>
            <NavLink to={} className={'linkActive'}>
              Контакты
            </NavLink>
          </nav>
      </header>
    )
  }
  
  export default Header;