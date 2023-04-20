import './styles.scss';
import NewsItem from './components/NewsItem';

const NewsList = (props) => (
    <div className='newsList'>
        {props.list.map((news) => (
            <NewsItem key={news._id} item={news} />
        ))}
    </div>
)

export default NewsList;