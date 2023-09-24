import { Outlet, useLocation } from 'react-router-dom';
import Footer from '../Shared/Footer/Footer';
import ScrollToTopButton from '../Shared/ScrollTopToButtom';
import NavBar from '../Shared/NavBar/NavBar';
import ScrollToTop from '../Shared/scroll to top/ScrollToTop';
import SmallNav from '../Shared/NavBar/SmallNav';

const Main = () => {
    const location = useLocation();
    const removeFoother = location.pathname.includes("/message")
    return (
        <div className='dark:bg-gray-800'>
            <ScrollToTop/>
            <NavBar />
            <Outlet/>
            {removeFoother ? <></> :  <Footer></Footer>}
            <ScrollToTopButton></ScrollToTopButton>
            <SmallNav/>
        </div>
    );
};

export default Main;