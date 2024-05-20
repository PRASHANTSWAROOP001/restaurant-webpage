import React from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from './components/navbar/Navbar'
import Footer from './components/footer/Footer.jsx'

function Layout() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <Outlet className="flex-grow" />
     
   
    </div>
  )
}

export default Layout