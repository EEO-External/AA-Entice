import React from 'react'
import {BiSearch} from 'react-icons/bi'
import {BsPerson} from 'react-icons/bs'
import {HiOutlineMenuAlt4} from 'react-icons/hi'
import './index.css'
import './NavbarStyles.css'

function Navbar() {
  return (
    <div classname='navbar'>
        <div className="logo">
            <h2>American Airlines</h2>
        </div>
        <ul className="nav-menu">
            <li>Plan Travel</li>
            <li>Travel Information</li>
            <li>AAdvantage</li>
        </ul>
        <div className="nav-icons">
            <BiSearch className='icon' />
            <BsPerson className="icon" />
        </div>
        <div className="hamburger">
          <HiOutlineMenuAlt4 className='icon' />
        </div>
      
    </div>
  )
}

export default Navbar