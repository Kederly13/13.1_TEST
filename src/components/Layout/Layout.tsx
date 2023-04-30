import {FC, ReactNode} from 'react';

import Header from './components/Header';
import Footer from './components/Footer';

interface ILayoutParams  {
    children: ReactNode; 
}

const Layout: React.FC<ILayoutParams> = ({ children }) => (
    <>
        <Header />
            <main>
                {children}
            </main>
        <Footer />
    </>
)

export { Layout };