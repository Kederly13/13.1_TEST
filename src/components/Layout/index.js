import { Header } from './components/Header/index.js';
import { Footer } from './components/Footer/index.js';

const Layout = ({ children }) => (
    <>
        <Header />
        <main>
            {children}
        </main>
        <Footer />
    </>
)

export { Layout };