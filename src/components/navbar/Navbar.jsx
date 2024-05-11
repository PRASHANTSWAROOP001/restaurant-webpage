import React from 'react'
import { NavLink } from 'react-router-dom'
import { Link } from 'react-router-dom'
import { MdOutlineMenu } from "react-icons/md";
import { RiCloseFill } from "react-icons/ri";
import { useState } from 'react';

function Navbar() {
   
  const [open,setOpen] = useState(false)//  default closed

  const toggleSwitch= ()=>{
    setOpen((prev)=>!prev)
  }

  return (
    <header className="w-full h-14 border-2  flex items-center sticky z-10 bg-white top-0 left-0">

      <div className=' w-full  flex justify-between items-center px-4 md:py-8  '>
      <div className=" w-1/5 md:py-4">
        <Link to="/">
          <h1 className=' '>King Sukh</h1>
        </Link>
      </div>

      <div className="w-3/5">
        <nav className=" hidden md:block " >
          <ul className=' flex justify-between items-center'>
            <li>
              <NavLink to="/">Home</NavLink>
            </li>
            <li>
              <NavLink to="/services">Services</NavLink>
            </li>
            <li>
              <NavLink to="/rooms">Rooms</NavLink>
            </li>
            <li>
              <NavLink to="/about">About</NavLink>
            </li>
            <li>
              <NavLink to="/gallary">Gallary</NavLink>
            </li>
            <li>
              <NavLink>Contact</NavLink>
            </li>
          </ul>
        </nav>
      </div>

      <div className=' hidden md:block'>
         <button className=' px-4 py-2 bg-orange-400 rounded-lg'>Book Now</button>
      </div>

      <button className=' md:hidden' onClick={toggleSwitch}>
      {open ?<RiCloseFill className=' w-6 h-6'/>:<MdOutlineMenu className=' w-6 h-6'/>}
      </button>

      {open &&
          <div className='absolute w-full items-center justify-center top-14 right-0 bg-transparent md:hidden'>
            <nav>
              <ul className='flex flex-col justify-center items-center gap-2'>
                <li>
                  <NavLink to="/" onClick={() => setOpen(false)}>Home</NavLink>
                </li>
                <li>
                  <NavLink to="/services" onClick={() => setOpen(false)}>Services</NavLink>
                </li>
                <li>
                  <NavLink to="/rooms">Rooms</NavLink>
                </li>
                <li>
                  <NavLink to="/about">About</NavLink>
                </li>
                <li>
                  <NavLink to="/gallary">Gallery</NavLink>
                </li>
                <li>
                  <NavLink to="/contact">Contact</NavLink>
                </li>
              </ul>
            </nav>
          </div>
        }

      </div>
    </header>
  );
}

export default Navbar