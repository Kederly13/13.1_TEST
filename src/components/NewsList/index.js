import './styles.scss';
import CommentsItem from './components/CommentsItem';


const NewsList = ({ data })=> (
    <div className='CommentsList'>
        {data.map(({ id, email, name }) => (
            <CommentsItem key={id} name={name} email={email} id={id} />
        ))}
    </div>
)

export default NewsList;