import AuthenRoot from '../pages/authentication/index'
import Login from '../pages/authentication/Login'
import SignUp from '../pages/authentication/Signup'

import { AuthenURI } from '../utilities/enums/clientAppUri'

const authenRouter = {
    path: AuthenURI.base,
    element: <AuthenRoot />,
    children: [
        {
            path: AuthenURI.login, element: <Login />,
            action: args => import('../pages/authentication/Login').then(i => i.action(args))
        },
        {
            path: AuthenURI.signup, element: <SignUp />,
            action: args => import('../pages/authentication/Signup').then(i => i.action(args))
        },
        {
            path: AuthenURI.logout,
            loader: () => import('../pages/authentication/Logout').then(i => i.action()),
        }
    ]
}

export default authenRouter