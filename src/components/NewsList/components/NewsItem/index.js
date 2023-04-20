import './styles.scss';

const NewsItem = (props) => (
    <div className='newsItem'>
        <div className='title'>
            {props.item.title}
        </div>
        <div className='bottomWrapper'>
            <p className='source'>{props.item.clean_url}</p>
            <p>{props.item.published_date}</p>
        </div>
    </div>
)

export default NewsItem;