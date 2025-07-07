import React from 'react'
import Gallery from '../components/Gallery'
import './work.css'

const WorkPage = () => {
  return (
    <main className="work-page">
      <section className="gallery-section">
        <div className="gallery-header">
          <h2 className="gallery-title">Portfolio</h2>
          <p className="gallery-subtitle">
            Exploring the world through different perspectives and emotions
          </p>
        </div>
        <Gallery />
      </section>
      
      <section className="work-cta">
        <div className="work-cta-content">
          <h2 className="work-cta-title">Interested in working together?</h2>
          <p className="work-cta-description">
            Let&apos;s create something beautiful together. Get in touch to discuss your next project.
          </p>
          <a href="/contact" className="work-cta-button">
            <span>Get In Touch</span>
          </a>
        </div>
      </section>
    </main>
  )
}

export default WorkPage
