import React from 'react'
import Image from 'next/image'
import './about.css'

const AboutPage = () => {
  return (
    <main className="about-page">
      <div className="about-container">
        {/* Hero Section with Portrait */}
        <section className="about-hero">
          <div className="hero-text">
            <h2 className="story-title">The Artist Behind the Lens</h2>
            <div className="story-paragraphs">
              <p>
                Born from a fascination with the interplay between light and emotion, 
                my journey into photography began as a quest to freeze fleeting moments 
                that speak louder than words. Each frame I capture is a deliberate 
                conversation between subject and soul.
              </p>
              <p>
                My work explores the delicate balance between the seen and unseen, 
                the spoken and silent. Through careful composition and an eye for 
                authentic storytelling, I create images that resonate beyond their 
                immediate visual impact.
              </p>
              <p>
                Whether documenting intimate portraits or expansive landscapes, 
                my approach remains constant: to reveal the extraordinary within 
                the ordinary, and to honor the stories that unfold before my lens.
              </p>
            </div>
            
            <div className="signature">
              <Image
                src="/kael-rune-logo.png"
                alt="Kael Rune Signature"
                width={120}
                height={60}
                className="signature-logo"
              />
            </div>
          </div>
          <div className="portrait-container">
            <Image
              src="/kael-rune-portrait.png"
              alt="Kael Rune Portrait"
              width={400}
              height={600}
              className="portrait-image"
              priority
            />
          </div>
        </section>
      </div>
    </main>
  )
}

export default AboutPage
