import {useState, useEffect} from 'react';

import './styles.scss';
import routeMain from './routes';

import PageTitle from 'components/PageTitle';

import NewsList from 'components/NewsList';

import fetchNews from 'services/fetchNews';

const MainPage = () => {

    const [newsList, setNewsList] = useState([]);

    useEffect(() => {
        fetchNews().then(response =>  {
            setNewsList(response)    
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