import {Route, Switch, Redirect} from 'react-router-dom';


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
            <Switch>
              <Route exact path={routeMainPage()} component={MainPage}/>
              <Route exact path={routeNewsListPage()} component={NewsListPage}/>
              <Route exact path={routeNewsDetail()} component={NewsDetail}/>
              <Route exact path={routeContacts()} component={Contacts}/>
              <Redirect
                to={{
                  pathname: routeMainPage()
                }}
               />
            </Switch>
          </main>
          <Footer />
      </div>
    );
  }
  
  export default AppContent;
  