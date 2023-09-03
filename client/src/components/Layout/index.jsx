import './index.scss'
import NavTabs from '../NavTabs'
import { Outlet } from 'react-router-dom'
// import Sidebar from '../Sidebar'

const Layout = () => {
  return (
    <div className="APP layout ">      
      <NavTabs />
      {/* <Sidebar /> */}
      <div className="page content">
        <Outlet />
      </div>
    </div>
  )
}
export default Layout