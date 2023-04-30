import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { routeMain } from './routes';

import DateView from 'components/DateView';
import fetchNews from 'services/fetchNews';
import SergeyImg from 'assets/img/sergey.jpg';

import { ID } from 'types/ID';
import { INewsDetail } from 'types/INewsDetail';

import './styles.scss';

const NewsDetail = () => {
    const { id } = useParams<ID>();
    const [news, setNews] = useState<INewsDetail | null>(null);

    useEffect(() => {
        fetchNews().then(response => {
            if(Array.isArray(response)) {
            setNews(response.find((item : INewsDetail)  => item.id === Number(id)));
            }
        })
    },[]);

    // useEffect(() => {
    //     if (id) {
    //         NewsAPI.getSingle({id}).then(response => {
    //             setNews(response);
    //         })
    //     }
    // }, [])

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

export {NewsDetail};