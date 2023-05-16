import { ReactNode } from 'react';

import './styles.scss'

interface IPageTitleParams {
    children: ReactNode;
};

const PageTitle: React.FC<IPageTitleParams> = ({ children }) => <h3 className='pageTitle'>{children}</h3>

export { PageTitle };