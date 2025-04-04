import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from "./pages/home";
import Detail from "./pages/detail/Detail";
import Search from "./pages/search";
import Root from "./pages/Root";

import AuthenRoot from './pages/authentication'
import Login from './pages/authentication/Login'
import SignUp from './pages/authentication/Signup'

const router = createBrowserRouter([
  {
    path: "/", element: <Root />,
    children: [
      {
        index: true, element: <Home />,
        loader: () => import('./pages/home').then(i => i.loader())
      },
      {
        path: "search", element: <Search />,
        action: args => import('./pages/search').then(i => i.search(args))
      },
      {
        path: "detail/:id", element: <Detail />
      }
    ]
  },
  {
    path: '/authen', element: <AuthenRoot />,
    children: [
      {
        path: 'login', element: <Login />,
        // action:args => import('./pages/authentication/Login').then(i=>i.action(args))
      },
      {
        path: 'signup', element: <SignUp />,
        action: args => import('./pages/authentication/Signup').then(i => i.action(args))
      }
    ]
  }
])

function App() {
  return <RouterProvider router={router} />
}

export default App;
