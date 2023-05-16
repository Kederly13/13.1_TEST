import { useEffect } from 'react';
import { routeMain } from './routes';
import { useAppDispatch, useAppSelector } from 'hooks/reduxHooks';

import { PageTitle } from 'components/PageTitle';
import { NewsList } from 'components/NewsList';
import { loadPosts } from 'store/news/actions';
import { selectList } from 'store/news/selectors';

import './styles.scss';


const NewsListPage = () => {

    const dispatch = useAppDispatch();
    const newsList = useAppSelector(selectList);

    useEffect(() => {
        dispatch(loadPosts());
    }, [dispatch])

    return (
        <section className='NewsListPage'>
            <PageTitle>
                be <br />on<span> time</span>
             </PageTitle>
             {newsList.length > 0 && <NewsList data={newsList}/>}
        </section>
    )
}

export { routeMain }
export  { NewsListPage };