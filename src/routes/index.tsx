import { createBrowserRouter, RouterProvider } from 'react-router'
import DefaultLayout from './layouts/Default'
import Home from './pages/Home'
import About from './pages/About'
import Movies from './pages/Movies'
import MovieDetails from './pages/MovieDetails'
import EmptyLayout from './layouts/Empty'
import Todos from './pages/Todos'

const router = createBrowserRouter([
  {
    element: <DefaultLayout />,
    children: [
      {
        path: '/',
        element: <Home />
      },
      {
        path: '/about',
        element: <About />
      },
      {
        path: '/movies',
        element: <Movies />
      },
      {
        path: '/movies/:movieId',
        element: <MovieDetails />
      }
    ]
  },
  {
    element: <EmptyLayout />,
    children: [
      {
        path: '/todos',
        element: <Todos />
      }
    ]
  }
])

export default function Routes() {
  return <RouterProvider router={router} />
}
