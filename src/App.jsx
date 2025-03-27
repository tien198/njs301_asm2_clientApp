import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from "./pages/home";
import Detail from "./pages/detail/Detail";
import Search from "./pages/search/Search";
import Root from "./pages/Root";

const router = createBrowserRouter([
  {
    path: "/", element: <Root />,
    children: [
      {
        path: "/", element: <Home />,
        loader: () => import('./pages/home/index').then(i => i.loader())
      },
      {
        path: "/search", element: <Search />
      },
      {
        path: "/detail/:id", element: <Detail />
      }
    ]
  }
])

function App() {
  return <RouterProvider router={router} />
}

export default App;
