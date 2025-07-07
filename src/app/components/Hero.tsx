import React from 'react'
import Image from 'next/image'
import './styles/hero.css'

const Hero = () => {
  return (
    <section className="hero">
      <div className="hero-content">
        <div className="hero-text">
          <h1 className="hero-title">
            Capturing Moments,<br />
            <span className="hero-title-accent">Creating Stories</span>
          </h1>
          <p className="hero-description">
            Through the lens of artistry and emotion, I transform fleeting moments 
            into timeless visual narratives that speak to the soul.
          </p>
          <div className="hero-cta">
            <a href="/work" className="cta-button">View Portfolio</a>
            <a href="/contact" className="cta-link">Get in Touch</a>
          </div>
        </div>
        
        <div className="hero-gallery">
          <div className="hero-gallery-grid">
            <div className="hero-gallery-item hero-gallery-large">
              <Image
                src="/portrait.webp"
                alt="Portrait Photography"
                width={400}
                height={600}
                className="hero-gallery-image"
                priority
              />
            </div>
            <div className="hero-gallery-item hero-gallery-medium">
              <Image
                src="/mountains.webp"
                alt="Mountain Landscape"
                width={300}
                height={200}
                className="hero-gallery-image"
              />
            </div>
            <div className="hero-gallery-item hero-gallery-small">
              <Image
                src="/swan.webp"
                alt="Couple Photography"
                width={200}
                height={400}
                className="hero-gallery-image"
              />
            </div>
            <div className="hero-gallery-item hero-gallery-wide">
              <Image
                src="/stairs.webp"
                alt="Stairs Photography"
                width={400}
                height={300}
                className="hero-gallery-image"
              />
            </div>
            <div className="hero-gallery-item hero-gallery-extra">
              <Image
                src="/swimming.webp"
                alt="Swimming Lady"
                width={200}
                height={300}
                className="hero-gallery-image"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
