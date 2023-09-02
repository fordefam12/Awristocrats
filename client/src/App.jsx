import './App.scss'
import { Route, Routes } from 'react-router-dom'
import Layout from './components/Layout'
import Home from './components/Home/Home'
import Brands from './components/Brands/Brands';
import Men from './components/Men/Men';

// import MagicGrid from './components/Projects/Projects'





function App() {
  // const showErrorPage = window.location.pathname === '/error';

  return (
    <div>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="Brands" element={<Brands />} />
          <Route index element={<Home />} />
          <Route path="Men" element={<Men />} />
        </Route>
      </Routes>
       
    </div>
  );
}

export default App;


