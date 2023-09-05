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

// Define the accessible routes, and which components respond to which URL
const router = createBrowserRouter([
  {
    path: '/',
    errorElement: <Error />,
    element: <App />,
    
    
    children: [
      {
        path: '/Home',
        element: <Home />,
      },
      {
        path: '/Brands',
        element: <Brands />,
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
        path: '/',
        element: <Login />

      }
    ],
  },
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} />
)
