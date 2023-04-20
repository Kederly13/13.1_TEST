import {useState, useEffect} from 'react';
import axios from "axios";

import './styles.scss';

import getNews from 'services/getNews';
import routeMain from './routes';
import PageTitle from 'components/PageTitle';
import NewsListMocks from 'fixtures/newsListMocks';
import NewsList from 'components/NewsList';

const NewsListPage = () => {

    const [newsList, setNewsList] = useState([]);
    const requestUrl = 'https://newscatcher.p.rapidapi.com/v1/search_enterprise';

    useEffect(() => {
        getNews().then(response => {
            setNewsList(response.data.articles)
        })
    }, [])

    // useEffect(() => {
    //     const fetchData = async () => {
    //         try {
    //             const response = await axios.get(requestUrl);
    //             setNewsList(response);
    //         } catch (error) {
    //             console.error(error)
    //         }
    //     }
    //     fetchData()
    // }, []);

    return (
        <section className='NewsListPage'>
            <PageTitle
                title={
                    <h2>
                        be <br />on<span> time</span>
                    </h2>
                }
             />
             {NewsListMocks.length > 0 && <NewsList list={newsList}/>}
        </section>
    )
}

export {routeMain}

export default NewsListPage;