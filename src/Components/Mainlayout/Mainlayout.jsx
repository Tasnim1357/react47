
import PropTypes from 'prop-types';
import { Outlet } from 'react-router-dom';
import Footer from './Footer/Footer';
import Header from '../Header/Header';

const Mainlayout = props => {
    return (
        <div>
           <div className='max-w-6xl mx-auto'>
           <Header></Header>
            <Outlet></Outlet>
           </div>
            <Footer></Footer>
            
        </div>
    );
};

Mainlayout.propTypes = {
    
};

export default Mainlayout;