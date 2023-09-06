import ReactDOM from 'react-dom/client'
// Bringing in the required imports from 'react-router-dom' to set up application routing behavior
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
// import "./App.scss"
import App from './App.jsx'
import Error from './components/Error.jsx'
import Home from './components/Home/Home.jsx'
import Brands from './components/Brands/Brands.jsx'
import Men from './components/Men/Men.jsx'
import Women from './components/Women/Women.jsx'
import Login from './components/Login.jsx'
import Signup from './components/Signup.jsx'
import Detail from './components/Detail.jsx'
import Cart from './components/Cart/index.jsx'

// Define the accessible routes, and which components respond to which URL
const router = createBrowserRouter([
  {
    path: '/',
    errorElement: <Error />,
    element: <App />,
    
    
    children: [
      {
        element: <Brands />,
        index: true
      },
      {
        path: '/About',
        element: <Home />,
      },
      {
        path: '/Men',
        element: <Men />,
      },
      {
        path: '/Women',
        element: <Women />,
      },
      {
        path: '/Login',
        element: <Login />,
      },
      {
        path: '/signup',
        element: <Signup />,
      },
      {
        path: '/brands/:id',
        element: <Detail />
      },
      {
        path: '/cart',
        element: <Cart />
      }
    ],
  },
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} />
)
