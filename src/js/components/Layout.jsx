import React from 'react'
import Header from './Header.jsx'
import SideNav from './SideNav.jsx'
import Main from './Main.jsx'

function Layout() {
  return (
    <div className="layout">
      <div className="header">
        <Header />
      </div>
      <div className="row">
        <div className="col s2">
          <SideNav />
        </div>
        <div className="col s10">
          <Main />
        </div>
      </div>
    </div>
  )
}

export default Layout
