import Navbar from '../../components/layouts/Navbar'
import { Outlet } from 'react-router-dom'

function index() {
    return (
        <>
            <Navbar />
            <Outlet />
        </>
    );
}

export default index;