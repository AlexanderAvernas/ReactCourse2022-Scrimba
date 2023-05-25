import React from 'react'
import Logo from '../images/air.png'

function Navbar() {
  return (
    <div className='nav-container'>
    <img className='LogoNavbar' src={Logo} alt="Logo" />
    </div>
  )
}

export default Navbar
