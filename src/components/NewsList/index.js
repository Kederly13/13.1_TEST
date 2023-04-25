import './styles.scss';
import NewsItem from './components/NewsItem';


const NewsList = ({ data })=> (
    <div className='newsList'>
        {data.map(({ id, email, name }) => (
            <NewsItem key={id} name={name} email={email} id={id} />
        ))}
    </div>
)

export default NewsList;