import React from 'react'
import { Link } from 'react-router-dom'

function Header () {
  return (
    <div className="navbar">
      <nav className="black">
        <div className="nav-wrapper">
          <div className="brand-logo"><Link to="/">Te Ao Hunga</Link></div>
        </div>
      </nav>
    </div>
  )
}

export default Header
