import {useEffect} from 'react';
import routeMain from './routes';
import { useAppDispatch, useAppSelector } from 'hooks/reduxHooks';

import { PageTitle } from 'components/PageTitle';
import { NewsList } from 'components/NewsList';
import { loadPosts } from 'store/news/actions';
import { selectList } from 'store/news/selectors';

import './styles.scss';

const MainPage = () => {

    const dispatch = useAppDispatch();
    const newsList = useAppSelector(selectList);


    useEffect(() => {
        dispatch(loadPosts());
    }, [dispatch])

    return (
        <section className='mainPage'>
            <PageTitle>
                Always <br/>fresh <span>NEWS</span>
             </PageTitle>
             {newsList.length > 0 && newsList.length >= 6 && <NewsList data={newsList.slice(0,6)}/>}
        </section>
    )
}

export {routeMain}

export { MainPage };