import { Route, Routes, BrowserRouter } from 'react-router-dom';
import { MainPage, routeMain as routeMainPage } from 'pages/MainPage';
import { NewsListPage, routeMain as routeNewsListPage } from 'pages/NewsListPage';
import { NewsDetail, routeMain as routeNewsDetail } from 'pages/NewsDetail';
import { Contacts, routeMain as routeContacts } from 'pages/Contacts';
import { Layout } from 'components/Layout';

import './styles.scss';

const App = () => (
    <BrowserRouter>
        <div className="mainWrapper">
            <Layout>
                <Routes>
                    <Route path={routeMainPage()} element={<MainPage />} />
                    <Route path={routeNewsListPage()} element={<NewsListPage />} />
                    <Route path={routeNewsDetail()} element={<NewsDetail />} />
                    <Route path={routeContacts()} element={<Contacts />} />
                </Routes>
            </Layout>
        </div>
    </BrowserRouter>
);


export { App };