import {useState, useEffect} from 'react';
import routeMain from './routes';

import PageTitle from 'components/PageTitle';
import NewsList from 'components/NewsList';

import fetchNews from 'services/fetchNews';

import { INewsDetail } from 'types/INewsDetail';
import { NewsAPI } from 'api/NewsAPI';

import './styles.scss';

const NewsListPage = () => {

    const [newsList, setNewsList] = useState<INewsDetail[]>([]);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        NewsAPI.getAll().then(response => {
            if(Array.isArray(response)) {
                setNewsList(response);
            }
            if(typeof response === 'string') {
                setError(response)
            }
        })
    }, [])


    return (
        <section className='NewsListPage'>
            <PageTitle
                title={
                    <h2>
                        be <br />on<span> time</span>
                    </h2>
                }
             />
             {newsList.length > 0 && <NewsList data={newsList}/>}
        </section>
    )
}

export {routeMain}

export default NewsListPage;