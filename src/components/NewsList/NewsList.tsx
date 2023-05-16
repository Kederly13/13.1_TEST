import { NewsItem } from './components/NewsItem';
import { INewsDetail } from 'types/INewsDetail';

import './styles.scss';

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

export { NewsList };