import {useState, useEffect} from 'react';
import axios from "axios";

import './styles.scss';

import routeMain from './routes';
import PageTitle from 'components/PageTitle';
import NewsList from 'components/NewsList';
import fetchNews from 'services/fetchNews';

const NewsListPage = () => {

    const [newsList, setNewsList] = useState([]);

    useEffect(() => {
        fetchNews().then(response => {
            setNewsList(response)
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