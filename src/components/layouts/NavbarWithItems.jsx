import data from '../../../data/navBar.json';

import Navbar from './Navbar'
import NavbarItems from './NavbarItem'

function NavbarWithItems() {
    return (
        <>
            <Navbar />
            <NavbarItems data={data} />
        </>
    );
}

export default NavbarWithItems;<NavbarItems data={data} />