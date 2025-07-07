import React from 'react'
import { Instagram, Twitter, Facebook, Youtube, Mail } from 'lucide-react'
import './styles/footer.css'

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-content">
          {/* Brand Section */}
          <div className="footer-brand">
            <h3 className="footer-brand-title">Kael Rune</h3>
            <p className="footer-brand-description">
              Capturing moments, creating memories.
            </p>
          </div>

          {/* Contact Info */}
          <div className="footer-contact">
            <div className="contact-item">
              <Mail size={16} />
              <span>hello@kaelrune.com</span>
            </div>
          </div>

          {/* Social Media */}
          <div className="footer-social-section">
            <div className="footer-social">
              <a href="#" className="social-icon" aria-label="Instagram">
                <Instagram size={20} />
              </a>
              <a href="#" className="social-icon" aria-label="Twitter">
                <Twitter size={20} />
              </a>
              <a href="#" className="social-icon" aria-label="Facebook">
                <Facebook size={20} />
              </a>
              <a href="#" className="social-icon" aria-label="YouTube">
                <Youtube size={20} />
              </a>
            </div>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="footer-bottom">
          <div className="footer-bottom-content">
            <p className="footer-copyright">
              © 2025 Kael Rune Photography. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
