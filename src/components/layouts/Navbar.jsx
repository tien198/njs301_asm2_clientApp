import { Link } from 'react-router-dom';
import { getJwt, getUserInfor } from '../../utilities/localStorageUtils/authenToken';

function Navbar() {
    const btnClasses = 'text-base text-main-color bg-gray-50 px-4 hover:bg-gray-600 hover:text-white';

    const isAuth = getJwt()
    const userInfor = getUserInfor()
    return (
        <div className='bg-main-color text-white py-4 px-5 md:px-7'>
            <div className='container mx-auto'>

                <div className='flex justify-between text-xl md:text-2xl'>
                    <Link to='/'>Booking Website</Link>
                    <div className='flex gap-5'>
                        {!isAuth && <Link to='/authen/signup' className={btnClasses}>Sign Up</Link>}
                        {!isAuth && <Link to='/authen/login' className={btnClasses}>Login</Link>}

                        {isAuth && <Link to='/'>{userInfor.userName}</Link>}
                        {isAuth && <Link to='/' className={btnClasses}>Transaction</Link>}
                        {isAuth && <Link to='/' className={btnClasses}>Logout</Link>}


                    </div>
                </div>
            </div>
        </div>
    );
}


export default Navbar;