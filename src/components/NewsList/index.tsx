import './styles.scss';
import NewsItem from './components/NewsItem';

import { INewsDetail } from 'types/INewsDetail';

interface INewsListParams {
    data: INewsDetail[];
}

const NewsList: React.FC<INewsListParams> = ({ data })=> (
    <div className='newsList'>
        {data.map((item) => (
            <NewsItem key={item.id} item={item} />
        ))}
    </div>
)

export default NewsList;