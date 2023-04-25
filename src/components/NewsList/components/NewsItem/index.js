import './styles.scss';
import { NavLink } from 'react-router-dom';
import {routeMain as routeNewsDetail} from 'pages/NewsDetail';

import DateView from 'components/DateView';

const NewsItem = ({ name, email, id }) => (
    <NavLink className='newsItem' to={routeNewsDetail(id)}>
        <div className='title'>
            {name}
            
        </div>
        <div className='bottomWrapper'>
            <p className='source'>{email}</p>
            <DateView />
        </div>
    </NavLink>
)

export default NewsItem;