import './index.scss'
import NavTabs from '../NavTabs'
import { Outlet } from 'react-router-dom'

const Layout = () => {
  return (
    <div className="APP layout ">      
      <NavTabs />
      <div className="page content">
        <Outlet />
      </div>
    </div>
  )
}
export default Layout