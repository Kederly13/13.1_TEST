import {useState, useEffect} from 'react';
import axios from "axios";

import './styles.scss';

import getNews from 'services/getNews';
import routeMain from './routes';
import PageTitle from 'components/PageTitle';
import NewsList from 'components/NewsList';

const NewsListPage = () => {

    const [newsList, setNewsList] = useState([]);
    const requestUrl = 'https://jsonplaceholder.typicode.com/comments';


    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get(requestUrl);
                setNewsList(response.data);
            } catch (error) {
                console.error(error)
            }
        }
        fetchData()
    }, []);


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