import React from 'react'
import { Link } from 'react-router-dom'

function SideNav () {
  return (
    <div>
      <ul id="slide-out" className="sidenav sidenav-fixed">
        
        <li><Link to="/members">Members</Link></li>
        <li><Link to="/events">Events</Link></li>
        <li><Link to="/benefits">Benefits</Link></li>
        <li><Link to="/attachments">Attachments</Link></li>
        <li><Link to="/whakapapa">Whakapapa</Link></li>
      
        {/* <ul id="nav-mobile" className="right hide-on-med-and-down"></ul> */}

      </ul>
     </div>
  )
}  

export default SideNav