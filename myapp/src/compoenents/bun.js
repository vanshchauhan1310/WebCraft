import React from 'react'
import './bun.css'

const bun = () => {
  return (
    <div class="container">
          <h1 class="text-3xl font-bold underline">Hello world!</h1>
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