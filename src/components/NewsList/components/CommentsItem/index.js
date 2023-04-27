import './styles.scss';
import { NavLink } from 'react-router-dom';
import {routeMain as routeNewsDetail} from 'pages/CommetsDetail';

import DateView from 'components/DateView';

const CommentsItem = ({ name, email, id }) => (
    <NavLink className='CommentsItem' to={routeNewsDetail(id)}>
        <div className='title'>
            {name}  
        </div>
        <div className='bottomWrapper'>
            <p className='source'>{email}</p>
            <DateView />
        </div>
    </NavLink>
)

export default CommentsItem;