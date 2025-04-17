import { Link, useFetcher } from 'react-router-dom';
import { useSelector } from 'react-redux';

import { getJwt } from '../../utilities/localStorageUtils/authenToken';
import { AuthenURI_Absolute, ClientApp_AbsoluteURI } from '../../utilities/enums/clientAppUri'

function Navbar() {
    const btnClasses = 'text-base text-main-color bg-gray-50 px-4 hover:bg-gray-600 hover:text-white';

    const isAuth = getJwt()
    const userInfor = useSelector(({ authen }) => authen.userInfor)

    const fetcher = useFetcher()
    return (
        <div className='bg-main-color text-white py-4 px-5 md:px-7'>
            <div className='container mx-auto'>

                <div className='flex justify-between text-xl md:text-2xl'>
                    <Link to='/'>Booking Website</Link>
                    <div className='flex items-center gap-5'>
                        {!isAuth && <Link to={AuthenURI_Absolute.signup} className={btnClasses}>Sign Up</Link>}
                        {!isAuth && <Link to={AuthenURI_Absolute.login} className={btnClasses}>Login</Link>}

                        {isAuth && <Link to={'/getError'} className='text-sm'>{userInfor.userName || userInfor.email}</Link>}
                        {isAuth && <Link to={ClientApp_AbsoluteURI.transaction} className={btnClasses}>Transaction</Link>}
                        {isAuth && <fetcher.Form action={AuthenURI_Absolute.logout} className='flex items-center'>
                            <button className={btnClasses}>Logout</button>
                        </fetcher.Form>}
                    </div>
                </div>
            </div>
        </div>
    );
}


export default Navbar;