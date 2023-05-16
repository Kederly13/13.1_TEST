import { NavLink } from 'react-router-dom';
import {routeMain as routeNewsDetail} from 'pages/NewsDetail';

import { DateView } from 'components/DateView';
import { INewsDetail } from 'types/INewsDetail';

import './styles.scss';

interface INewsItemParams {
    item: INewsDetail;
}

const NewsItem: React.FC<INewsItemParams> = ({ item }) => (
    <NavLink className='newsItem' to={routeNewsDetail(item.id.toString())}>
        <div className='title'>
            {item.name}     
        </div>
        <div className='bottomWrapper'>
            <p className='source'>{item.email}</p>
            <DateView />
        </div>
    </NavLink>
)

export { NewsItem };