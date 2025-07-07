import React from 'react'
import './contact.css'

const ContactPage = () => {
  return (
    <main className="contact-page">
      {/* Contact Form Section */}
      <section className="contact-form-section">
        <div className="contact-container">
          <div className="contact-info">
            <h2 className="contact-section-title">Get In Touch</h2>
            <p className="contact-section-description">
              Fill out the form and I&apos;ll get back to you within 24 hours. 
              For urgent inquiries, feel free to call directly.
            </p>
            
            <div className="contact-details">
              <div className="contact-item">
                <h3 className="contact-item-title">Email</h3>
                <p className="contact-item-text">hello@kaelrune.com</p>
              </div>
              <div className="contact-item">
                <h3 className="contact-item-title">Phone</h3>
                <p className="contact-item-text">+358 40 123 4567</p>
              </div>
              <div className="contact-item">
                <h3 className="contact-item-title">Location</h3>
                <p className="contact-item-text">Helsinki, Finland</p>
              </div>
              <div className="contact-item">
                <h3 className="contact-item-title">Response Time</h3>
                <p className="contact-item-text">Within 24 hours</p>
              </div>
            </div>
          </div>

          <form className="contact-form">
            <div className="form-group">
              <label htmlFor="name" className="form-label">Full Name</label>
              <input 
                type="text" 
                id="name" 
                name="name" 
                className="form-input" 
                required 
              />
            </div>

            <div className="form-group">
              <label htmlFor="email" className="form-label">Email Address</label>
              <input 
                type="email" 
                id="email" 
                name="email" 
                className="form-input" 
                required 
              />
            </div>

            <div className="form-group">
              <label htmlFor="phone" className="form-label">Phone Number</label>
              <input 
                type="tel" 
                id="phone" 
                name="phone" 
                className="form-input" 
              />
            </div>

            <div className="form-group">
              <label htmlFor="event-type" className="form-label">Event Type</label>
              <select id="event-type" name="eventType" className="form-select">
                <option value="">Select an option</option>
                <option value="wedding">Wedding</option>
                <option value="portrait">Portrait Session</option>
                <option value="event">Event Photography</option>
                <option value="commercial">Commercial</option>
                <option value="other">Other</option>
              </select>
            </div>

            <div className="form-group">
              <label htmlFor="date" className="form-label">Preferred Date</label>
              <input 
                type="date" 
                id="date" 
                name="date" 
                className="form-input" 
              />
            </div>

            <div className="form-group">
              <label htmlFor="budget" className="form-label">Budget Range</label>
              <select id="budget" name="budget" className="form-select">
                <option value="">Select budget range</option>
                <option value="under-500">Under €500</option>
                <option value="500-1200">€500 - €1,200</option>
                <option value="1200-2500">€1,200 - €2,500</option>
                <option value="2500-plus">€2,500+</option>
              </select>
            </div>

            <div className="form-group form-group-full">
              <label htmlFor="message" className="form-label">Tell me about your vision</label>
              <textarea 
                id="message" 
                name="message" 
                rows={6} 
                className="form-textarea"
                placeholder="Describe your event, style preferences, specific shots you'd like, or any other details that would help me understand your needs..."
                required
              ></textarea>
            </div>

            <button type="submit" className="form-submit">
              <span>Send Message</span>
            </button>
          </form>
        </div>
      </section>

      {/* CTA Section */}
      <section className="contact-cta">
        <div className="contact-cta-content">
          <h2 className="contact-cta-title">Not ready to book yet?</h2>
          <p className="contact-cta-description">
            Take a look at my portfolio to see if my style matches your vision.
          </p>
          <a href="/work" className="contact-cta-button">
            <span>View Portfolio</span>
          </a>
        </div>
      </section>
    </main>
  )
}

export default ContactPage
