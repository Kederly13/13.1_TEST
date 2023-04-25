import {useState, useEffect} from 'react';

import './styles.scss';
import routeMain from './routes';

import PageTitle from 'components/PageTitle';

import NewsList from 'components/NewsList';

import getNews from 'services/getNews';
import axios from 'axios';

const MainPage = () => {

    const [newsList, setNewsList] = useState([]);

    const requestUrl = 'https://jsonplaceholder.typicode.com/comments';

    // useEffect(() => {
    //     getNews().then(response => {
    //         setNewsList(response.data.articles)
    //     })
    // }, [])

    
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
    console.log(newsList);

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