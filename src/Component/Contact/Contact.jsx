import { useState } from 'react';
import './Contact.css';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Form submitted:', formData);
    alert('Thank you! We will get back to you within 48 hours.');
    setFormData({ name: '', email: '', subject: '', message: '' });
  };

  return (
    <section className="contact">
      <div className="contact__inner">
        <div className="contact__header">
          <p className="contact__eyebrow">Contact Us</p>
          <h1 className="contact__title">Let's build together</h1>
          <p className="contact__lead">
            Reach out for partnerships, mentorship, or event collaborations. We'll get back within 48 hours.
          </p>
        </div>

        <div className="contact__content">
          <div className="contact__form-wrapper">
            <form className="contact__form" onSubmit={handleSubmit}>
              <div className="contact__form-group">
                <label className="contact__label" htmlFor="name">
                  Name *
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  className="contact__input"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  placeholder="Your full name"
                />
              </div>

              <div className="contact__form-group">
                <label className="contact__label" htmlFor="email">
                  Email *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="contact__input"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  placeholder="your.email@example.com"
                />
              </div>

              <div className="contact__form-group">
                <label className="contact__label" htmlFor="subject">
                  Subject *
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  className="contact__input"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  placeholder="What's this about?"
                />
              </div>

              <div className="contact__form-group">
                <label className="contact__label" htmlFor="message">
                  Message *
                </label>
                <textarea
                  id="message"
                  name="message"
                  className="contact__textarea"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  placeholder="Tell us more about your inquiry..."
                  rows="6"
                />
              </div>

              <button type="submit" className="contact__submit">
                Send Message
              </button>
            </form>
          </div>

          <div className="contact__info">
            <div className="contact__info-card">
              <div className="contact__info-icon">✉</div>
              <h3 className="contact__info-title">Email</h3>
              <a href="mailto:ecell@srmist.edu.in" className="contact__info-link">
                ecell@srmist.edu.in
              </a>
            </div>

            <div className="contact__info-card">
              <div className="contact__info-icon">📞</div>
              <h3 className="contact__info-title">Phone</h3>
              <a href="tel:+919876543210" className="contact__info-link">
                +91 98765...
              </a>
            </div>

            <div className="contact__info-card">
              <div className="contact__info-icon">📍</div>
              <h3 className="contact__info-title">Location</h3>
              <p className="contact__info-text">
                Tech Park, HMR Institute<br />
                South delhi 110036
              </p>
            </div>

            <div className="contact__social">
              <h3 className="contact__social-title">Follow Us</h3>
              <div className="contact__social-links">
                <a href="https://linkedin.com/company/ecell-srmist" target="_blank" rel="noopener noreferrer" className="contact__social-link">
                  LinkedIn
                </a>
                <a href="https://instagram.com/ecell_srmist" target="_blank" rel="noopener noreferrer" className="contact__social-link">
                  Instagram
                </a>
                <a href="https://twitter.com/ecell_srmist" target="_blank" rel="noopener noreferrer" className="contact__social-link">
                  Twitter
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
