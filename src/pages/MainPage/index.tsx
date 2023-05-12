import {useEffect} from 'react';
import routeMain from './routes';
import { useDispatch, useSelector } from 'react-redux';
import { Dispatch } from 'redux';


import PageTitle from 'components/PageTitle';
import { NewsList } from 'components/NewsList';
import { loadPosts } from 'store/news/actions';
import { selectList } from 'store/news/selectors';



import './styles.scss';

const MainPage = () => {

    const dispatch = useDispatch();
    const newsList = useSelector(selectList);

    useEffect(() => {
        dispatch(loadPosts());
     
    }, [dispatch])

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

export { MainPage };