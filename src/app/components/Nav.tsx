import React from 'react'
import './styles/nav.css'

const Nav = () => {
  return (
    <nav className="nav">
      <div className="nav-container">
        <div className="nav-brand">
          <span className="brand-text">KAEL RUNE</span>
        </div>
        
        <div className="nav-menu">
          <a href="#work" className="nav-link">Work</a>
          <a href="#about" className="nav-link">About</a>
          <a href="#contact" className="nav-link">Contact</a>
        </div>
      </div>
    </nav>
  )
}

export default Nav
