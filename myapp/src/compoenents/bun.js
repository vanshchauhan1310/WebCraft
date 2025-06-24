import React from 'react'
import './bun.css'

const bun = () => {
  return (
    <div class="container">
            <div class="logo">Your Name</div>
            <ul class="nav-links">
                <li><a href="#home">Home</a></li>
                <li><a href="./about.html">About</a></li>
                <li><a href="./skills.html">Skills</a></li>
                <li><a href="#projects">Projects</a></li>
                <li><a href="#contact">Contact</a></li>
            </ul>
            <div class="hamburger">
                <span></span>
                <span></span>
                <span></span>
            </div>
        </div>
  )
}

export default bun