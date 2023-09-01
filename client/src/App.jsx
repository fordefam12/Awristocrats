import './App.scss'
import { Route, Routes } from 'react-router-dom'
import Layout from './components/Layout'
import Home from './components/Home/Home'

// import MagicGrid from './components/Projects/Projects'





function App() {
  // const showErrorPage = window.location.pathname === '/error';

  return (
    <div>
      <Routes>
        <Route path="/" element={<Layout />}>
          {/* <Route path="About" element={<About />} /> */}
          <Route index element={<Home />} />
       
        </Route>
      </Routes>
       
    </div>
  );
}

export default App;


