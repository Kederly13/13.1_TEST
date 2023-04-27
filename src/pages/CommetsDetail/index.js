import React, {useEffect, useState} from 'react';
import './styles.scss';
import routeMain from './routes';
import axios from "axios";
import DateView from 'components/DateView';
import SergeyImg from 'assets/img/sergey.png';
import { useParams } from 'react-router-dom';
import fetchNews from 'services/fetchNews';


const CommentsDetail = () => {
    const { id } = useParams();
    const [comments, setComments] = useState(null);

    useEffect(() => {
        fetchNews().then(response => {
            setComments(response.data.find(item => item.id == id));
        })
    },[id]);

    return (
        <section className='commentDetailPage'>
            {comments ? (
                <div>
                    <div className='commentDetailWrapper'>
                        <div className='leftPart'>
                            <h2 className='name'>{comments.name}</h2>
                            <p className='body'>{comments.body}</p>
                            <DateView />
                        </div>
                        <div className='rightPart'>
                            <p className='summary'>{comments.body}</p>
                            <div className='image'><img alt={SergeyImg} src={SergeyImg}/></div>
                        </div>
                    </div>
                </div>
            ) : <></>}
        </section>
    )
}

export {routeMain};

export default CommentsDetail;