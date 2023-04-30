import {useState, useEffect} from 'react';

import routeMain from './routes';

import PageTitle from 'components/PageTitle';

import NewsList from 'components/NewsList';

import fetchNews from 'services/fetchNews';

import { INewsDetail } from 'types/INewsDetail'
import { NewsAPI } from 'api/NewsAPI';

import './styles.scss';

const MainPage = () => {

    const [newsList, setNewsList] = useState<INewsDetail[]>([]);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        NewsAPI.getAll().then(response =>  {
            if(Array.isArray(response)) {
                setNewsList(response);
            } if (typeof response === 'string') {
                setError(error);
            }
        })
    }, [])

    return (
        <section className='mainPage'>
            <PageTitle
                title={
                    <h2>
                        Always <br />fresh<span> NEWS</span>
                    </h2>
                }
             />
             {newsList.length > 0 && newsList.length >= 6 && <NewsList data={newsList.slice(0,6)}/>}
        </section>
    )
}

export {routeMain}

export default MainPage;