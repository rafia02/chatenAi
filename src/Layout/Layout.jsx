import React from 'react'
import Navber from '../Components/Shared/Navber'
import { Outlet } from 'react-router-dom'
import Footer from '../Components/Shared/Footer'

const Layout = () => {
  return (
    <div>
        <Navber></Navber>
        <Outlet></Outlet>
        <Footer></Footer>
    </div>
  )
}

export default Layout