import './styles.scss';
import routeMain from './routes';

import SergeyImg from 'assets/img/sergey.png';

const Contacts = () => (
    <div className='contactsPage'>
        <div className='info'>
            <div className='phone'>
                <a href="tel:+12248579068">+12248579068</a>
            </div>
            <div className='name'>
                Sergey 
            </div>
            <div className='mail'>
                <a href="mailto:+sergeyD@orozcotrucking.com">sergeyD@orozcotrucking.com</a> 
            </div>
            <div className='position'>
                Developer
            </div>
        </div>
        <div className='image'><img alt={SergeyImg} src={SergeyImg}/></div>
    </div>
)

export {routeMain}

export default Contacts;