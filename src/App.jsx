import {
  createBrowserRouter,
  redirect,
  RouterProvider,
} from "react-router-dom";
import Home from "./pages/home";
import Detail from "./pages/detail";
import Search from "./pages/search";
import Root from "./pages/Root";

import AuthenRoot from './pages/authentication'
import Login from './pages/authentication/Login'
import SignUp from './pages/authentication/Signup'
import BackendUri from "./utilities/enums/backendUri";
import { addJwt } from "./utilities/localStorageUtils/authenToken";

import clientAppUri, { ClientApp_AbsoluteURI } from './utilities/enums/clientAppUri'
const { ClientAppURI, AuthenURI } = clientAppUri



const router = createBrowserRouter([
  {
    path: "/", element: <Root />,
    children: [
      {
        index: true, element: <Home />,
        loader: () => import('./pages/home').then(i => i.loader())
      },
      {
        path: ClientAppURI.search, element: <Search />,
        action: args => import('./pages/search').then(i => i.search(args))
      },
      {
        path: ClientAppURI.detail + "/:hotelId", element: <Detail />,
        loader: args => import('./pages/detail').then(i => i.loader(args)),
      },
      // {
        // path: ClientAppURI.reserveHotel, element: <></>,
        // action: 
      // }
    ]
  },
  {
    path: AuthenURI.base, element: <AuthenRoot />,
    children: [
      {
        path: AuthenURI.login, element: <Login />,
        action: args => import('./pages/authentication/Login').then(i => i.action(args))
      },
      {
        path: AuthenURI.signup, element: <SignUp />,
        action: args => import('./pages/authentication/Signup').then(i => i.action(args))
      },
      {
        path: AuthenURI.logout,
        loader: () => import('./pages/authentication/Logout').then(i => i.action()),
      }
    ]
  }
])

function App() {
  return <RouterProvider router={router} />
}

export default App;
