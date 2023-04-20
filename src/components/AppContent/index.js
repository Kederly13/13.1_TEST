import { Route, Routes } from 'react-router-dom';


import MainPage, {routeMain as routeMainPage} from 'pages/MainPage';
import NewsListPage, {routeMain as routeNewsListPage} from 'pages/NewsListPage';
import NewsDetail, {routeMain as routeNewsDetail} from 'pages/NewsDetail';
import Contacts, {routeMain as routeContacts} from 'pages/Contacts';

import Header from 'components/Header';
import Footer from 'components/Footer';

import './styles.scss'

const AppContent = () => {
    return (
      <div className="mainWrapper">
          <Header />
          <main> 
            <Routes>
              <Route exact path={routeMainPage()} element={<MainPage />}/>
              <Route exact path={routeNewsListPage()} element={<NewsListPage />}/>
              <Route exact path={routeNewsDetail()} element={<NewsDetail />}/>
              <Route exact path={routeContacts()} element={<Contacts />}/>
            </Routes>
          </main>
          <Footer />
      </div>
    );
  }
  
  export default AppContent;
  