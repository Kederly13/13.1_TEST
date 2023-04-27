import {useState, useEffect} from 'react';
import axios from "axios";

import './styles.scss';

import fetchNews from 'services/fetchNews';
import routeMain from './routes';
import PageTitle from 'components/PageTitle';
import NewsList from 'components/NewsList';

const CommentsListPage = () => {

    const [commentsList, setCommentsList] = useState([]);
    
    useEffect(() => {
        fetchNews().then(response => {
            setCommentsList(response)
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
             {commentsList.length > 0 && <NewsList data={commentsList}/>}
        </section>
    )
}

export {routeMain}

export default CommentsListPage;