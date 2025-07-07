
'use client'
import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import './styles/nav.css';


const Nav = () => {
  const pathname = usePathname();
  // Helper to check if a link is active
  const isActive = (href: string) => {
    if (href === '/') {
      return pathname === '/';
    }
    return pathname.startsWith(href);
  };

  return (
    <nav className="nav">
      <div className="nav-container">
        <div className="nav-brand">
          <Link href="/" className="navigation-logo-link">
            <span className="brand-text">KAEL RUNE</span>
          </Link>
        </div>
        <div className="nav-menu">
          <Link
            href="/work"
            className={`nav-link${isActive('/work') ? ' active' : ''}`}
          >
            Work
          </Link>
          <Link
            href="/about"
            className={`nav-link${isActive('/about') ? ' active' : ''}`}
          >
            About
          </Link>
          <Link
            href="/contact"
            className={`nav-link${isActive('/contact') ? ' active' : ''}`}
          >
            Contact
          </Link>
        </div>
      </div>
    </nav>
  );
}

export default Nav
