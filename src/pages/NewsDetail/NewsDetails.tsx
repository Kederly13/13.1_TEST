import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { routeMain } from './routes';
import { useAppSelector } from 'hooks/reduxHooks';
import { selectList } from 'store/news/selectors';

import { DateView } from 'components/DateView';
import SergeyImg from 'assets/img/sergey.jpg';

import { ID } from 'types/ID';
import { INewsDetail } from 'types/INewsDetail';

import './styles.scss';

const NewsDetail = () => {

    const { id } = useParams<ID>();
    const [news, setNews] = useState<INewsDetail | undefined>(undefined);
    const newsList = useAppSelector(selectList);


    useEffect(() => {
        const currentNews = newsList?.find(
            (item: INewsDetail) => item.id === Number(id)
        )
        setNews(currentNews)
    }, [id, newsList])


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