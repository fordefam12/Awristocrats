import './index.scss'
import NavTabs from '../NavTabs'
import { Outlet } from 'react-router-dom'

const Layout = () => {
  return (
    <div className="APP layout ">
      
      <NavTabs />
      
      <div className="page content">
      
        <span className="tags top-tags">&lt;body&gt;</span>
        
        <span className="tags bottom-tags">
          &lt;/body&gt;
          <br />
          <span className="bottom-tag-html">&lt;/html&gt;</span>
         
        </span>
        <Outlet />
      </div>
    </div>
  )
}
export default Layout