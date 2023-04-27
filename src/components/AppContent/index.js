import { Route, Routes } from 'react-router-dom';


import MainPage, {routeMain as routeMainPage} from 'pages/MainPage';
import NewsListPage, {routeMain as routeNewsListPage} from 'pages/NewsListPage';
import NewsDetail, {routeMain as routeNewsDetail} from 'pages/CommetsDetail';
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
              <Route  path={routeMainPage()} element={<MainPage />}/>
              <Route  path={routeNewsListPage()} element={<NewsListPage />}/>
              <Route  path={routeNewsDetail()} element={<NewsDetail />}/>
              <Route  path={routeContacts()} element={<Contacts />}/>
            </Routes>
          </main>
          <Footer />
      </div>
    );
  }
  
  export default AppContent;
  