import { Outlet } from 'react-router-dom';
import Footer from '../Shared/Footer/Footer';
import ScrollToTopButton from '../Shared/ScrollTopToButtom';
import NavBar from '../Shared/NavBar/NavBar';

const Main = () => {
    return (
        <div className='dark:bg-gray-800'>
            <NavBar />
            <Outlet/>
            <Footer></Footer>
            <ScrollToTopButton></ScrollToTopButton>
        </div>
    );
};

export default Main;