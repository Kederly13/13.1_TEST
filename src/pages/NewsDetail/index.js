import React, {useEffect, useState} from 'react';
import './styles.scss';
import routeMain from './routes';
import fetchNews from 'services/fetchNews';
import DateView from 'components/DateView';
import SergeyImg from 'assets/img/sergey.png';
import { useParams } from 'react-router-dom';


const NewsDetail = () => {
    const { id } = useParams();
    const [news, setNews] = useState(null);

    useEffect(() => {
        fetchNews().then(response => {
            setNews(response.find(item => item.id === parseInt(id)));
        })
    },[id]);

    return (
        <section className='newsDetailPage'>
            {news ? (
                <div>
                    <div className='newsDetailWrapper'>
                        <div className='leftPart'>
                            <h2 className='name'>{news.name}</h2>
                            <p className='body'>{news.body}</p>
                            <DateView />
                        </div>
                        <div className='rightPart'>
                            <p className='summary'>{news.body}</p>
                            <div className='image'><img alt={SergeyImg} src={SergeyImg}/></div>
                        </div>
                    </div>
                </div>
            ) : <></>}
        </section>
    )
}

export {routeMain};

export default NewsDetail;