import { CurrentDate } from 'components/CurrentDate/CurrentDate';

import './styles.scss';

const DateView = () => {
    const {day, month} = CurrentDate();
    return (
        <p className='dateView'>
            <span className="day">{day}</span> / {" "}
            <span className="month">{month}</span>
        </p>
    )
}

export { DateView };