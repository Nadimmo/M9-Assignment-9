import {Outlet} from 'react-router-dom'
// import Home from '../page/Home/Home';
import Navbar from '../page/Navbar/Navbar';
import Footer from '../page/Footer/Footer';
const Root = () => {
    return (
        <div className='mx-4'>
            <Navbar></Navbar>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Root;