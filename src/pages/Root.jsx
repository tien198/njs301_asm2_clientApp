import Navbar from '../components/layouts/NavbarWithItems';
import Footer from '../components/layouts/Footer';
import { Outlet } from 'react-router-dom';
import ErrorModal from '../components/Modal/ErrorModal';

function Root() {
    return (
        <>
            <Navbar />
            <Outlet />
            <Footer />
            <ErrorModal />
        </>
    );
}

export default Root;