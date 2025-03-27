import Navbar from '../components/layouts/Navbar';
import Footer from '../components/layouts/Footer';
import { Outlet } from 'react-router-dom';

function Root() {
    return (
        <>
            <Navbar />
            <Outlet />
            <Footer />
        </>
    );
}

export default Root;