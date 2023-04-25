import './styles.scss';

import CurrentDate from 'components/CurrentDate/CurrentDate';

const DateView = () => {
    const {day, month} = CurrentDate();
    return (
        <p className='dateView'>
            <span className="day">{day}</span> / {" "}
            <span className="month">{month}</span>
        </p>
    )
}

export default DateView;