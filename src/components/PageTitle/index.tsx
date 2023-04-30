import './styles.scss'

interface IPageTitleParams {
    title: JSX.Element;
}

const PageTitle: React.FC<IPageTitleParams> = ({title}) => <h3 className='pageTitle'>{title}</h3>

export default PageTitle;