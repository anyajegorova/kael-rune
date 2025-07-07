import React from 'react'
import Link from 'next/link'
import './styles/nav.css'

const Nav = () => {
  return (
    <nav className="nav">
      <div className="nav-container">
        <div className="nav-brand">
          <Link href="/" className="brand-link">
            <span className="brand-text">KAEL RUNE</span>
          </Link>
        </div>
        
        <div className="nav-menu">
          <Link href="/work" className="nav-link">Work</Link>
          <Link href="/about" className="nav-link">About</Link>
          <Link href="/contact" className="nav-link">Contact</Link>
        </div>
      </div>
    </nav>
  )
}

export default Nav
