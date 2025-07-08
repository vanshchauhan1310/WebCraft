import React from 'react'
import './navbar.css'
import { Link } from 'react-router-dom';


const Navbar = () => {
  return (
  <>
   <nav class="navbar">
    <Link to = "/" className='logo'>NavBar</Link>
    
    <ul class="nav-links" id="navLinks">
      <li><Link to = "/">Home</Link></li>
      <li><a href='./#about-section'>About</a></li>
      <li><Link to = "/contact">Contact us </Link></li>

 
    </ul>
  </nav>
  </>
  )
}

export default Navbar