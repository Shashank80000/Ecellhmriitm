import { useState } from 'react';
import './JoinNowPage.css';

const JoinNowPage = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    year: '',
    department: '',
    interests: [],
    experience: '',
    reason: '',
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    
    if (type === 'checkbox') {
      setFormData(prev => ({
        ...prev,
        interests: checked 
          ? [...prev.interests, value]
          : prev.interests.filter(i => i !== value)
      }));
    } else {
      setFormData(prev => ({
        ...prev,
        [name]: value
      }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    alert('Application submitted successfully! We will contact you soon.');
    setFormData({
      fullName: '',
      email: '',
      phone: '',
      year: '',
      department: '',
      interests: [],
      experience: '',
      reason: '',
    });
  };

  return (
    <main className="join-page">
      <section className="join-hero">
        <div className="join-hero__inner">
          <p className="join-hero__eyebrow">Membership Application</p>
          <h1 className="join-hero__title">Join E-Cell SRMIST</h1>
          <p className="join-hero__lead">
            Start your entrepreneurial journey with the most active startup community on campus.
            Fill out the form below and become part of something bigger.
          </p>
        </div>
      </section>

      <section className="join-benefits">
        <div className="join-benefits__inner">
          <h2 className="join-benefits__title">Why Join E-Cell?</h2>
          <div className="join-benefits__grid">
            <div className="join-benefit-card">
              <div className="join-benefit-card__icon">🚀</div>
              <h3 className="join-benefit-card__title">Launch Your Venture</h3>
              <p className="join-benefit-card__text">
                Turn your ideas into reality with mentorship, funding opportunities, and incubation support.
              </p>
            </div>

            <div className="join-benefit-card">
              <div className="join-benefit-card__icon">🎓</div>
              <h3 className="join-benefit-card__title">Learn from Experts</h3>
              <p className="join-benefit-card__text">
                Attend workshops, masterclasses, and talks by successful entrepreneurs and industry leaders.
              </p>
            </div>

            <div className="join-benefit-card">
              <div className="join-benefit-card__icon">🤝</div>
              <h3 className="join-benefit-card__title">Network & Collaborate</h3>
              <p className="join-benefit-card__text">
                Connect with 500+ members, alumni founders, and investors who can help you grow.
              </p>
            </div>

            <div className="join-benefit-card">
              <div className="join-benefit-card__icon">🏆</div>
              <h3 className="join-benefit-card__title">Compete & Win</h3>
              <p className="join-benefit-card__text">
                Participate in pitch competitions, hackathons, and startup challenges with prizes.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="join-form-section">
        <div className="join-form-section__inner">
          <div className="join-form-section__header">
            <h2 className="join-form-section__title">Application Form</h2>
            <p className="join-form-section__text">
              Complete this form to apply for E-Cell membership. We review applications weekly.
            </p>
          </div>

          <form className="join-form" onSubmit={handleSubmit}>
            <div className="join-form__grid">
              <div className="join-form__group">
                <label className="join-form__label" htmlFor="fullName">
                  Full Name *
                </label>
                <input
                  type="text"
                  id="fullName"
                  name="fullName"
                  className="join-form__input"
                  value={formData.fullName}
                  onChange={handleChange}
                  required
                  placeholder="Enter your full name"
                />
              </div>

              <div className="join-form__group">
                <label className="join-form__label" htmlFor="email">
                  Email Address *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="join-form__input"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  placeholder="your.email@srmist.edu.in"
                />
              </div>

              <div className="join-form__group">
                <label className="join-form__label" htmlFor="phone">
                  Phone Number *
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  className="join-form__input"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                  placeholder="+91 98765 43210"
                />
              </div>

              <div className="join-form__group">
                <label className="join-form__label" htmlFor="year">
                  Year of Study *
                </label>
                <select
                  id="year"
                  name="year"
                  className="join-form__select"
                  value={formData.year}
                  onChange={handleChange}
                  required
                >
                  <option value="">Select year</option>
                  <option value="1">1st Year</option>
                  <option value="2">2nd Year</option>
                  <option value="3">3rd Year</option>
                  <option value="4">4th Year</option>
                </select>
              </div>

              <div className="join-form__group join-form__group--full">
                <label className="join-form__label" htmlFor="department">
                  Department *
                </label>
                <input
                  type="text"
                  id="department"
                  name="department"
                  className="join-form__input"
                  value={formData.department}
                  onChange={handleChange}
                  required
                  placeholder="e.g., Computer Science, Mechanical, etc."
                />
              </div>

              <div className="join-form__group join-form__group--full">
                <label className="join-form__label">
                  Areas of Interest *
                </label>
                <div className="join-form__checkboxes">
                  {['Startups', 'Technology', 'Marketing', 'Finance', 'Design', 'Operations'].map(interest => (
                    <label key={interest} className="join-form__checkbox-label">
                      <input
                        type="checkbox"
                        name="interests"
                        value={interest}
                        checked={formData.interests.includes(interest)}
                        onChange={handleChange}
                        className="join-form__checkbox"
                      />
                      <span>{interest}</span>
                    </label>
                  ))}
                </div>
              </div>

              <div className="join-form__group join-form__group--full">
                <label className="join-form__label" htmlFor="experience">
                  Previous Experience (Optional)
                </label>
                <textarea
                  id="experience"
                  name="experience"
                  className="join-form__textarea"
                  value={formData.experience}
                  onChange={handleChange}
                  placeholder="Tell us about any entrepreneurial experience, projects, or relevant activities..."
                  rows="4"
                />
              </div>

              <div className="join-form__group join-form__group--full">
                <label className="join-form__label" htmlFor="reason">
                  Why do you want to join E-Cell? *
                </label>
                <textarea
                  id="reason"
                  name="reason"
                  className="join-form__textarea"
                  value={formData.reason}
                  onChange={handleChange}
                  required
                  placeholder="Share your motivation and what you hope to achieve..."
                  rows="5"
                />
              </div>
            </div>

            <button type="submit" className="join-form__submit">
              Submit Application
            </button>
          </form>
        </div>
      </section>

      <section className="join-faq">
        <div className="join-faq__inner">
          <h2 className="join-faq__title">Frequently Asked Questions</h2>
          <div className="join-faq__grid">
            <div className="join-faq-item">
              <h3 className="join-faq-item__question">Who can join E-Cell?</h3>
              <p className="join-faq-item__answer">
                Any SRMIST student from any year or department can join. We welcome all those passionate about entrepreneurship.
              </p>
            </div>

            <div className="join-faq-item">
              <h3 className="join-faq-item__question">Is there a membership fee?</h3>
              <p className="join-faq-item__answer">
                E-Cell membership is completely free. We believe in making entrepreneurship accessible to everyone.
              </p>
            </div>

            <div className="join-faq-item">
              <h3 className="join-faq-item__question">How long does approval take?</h3>
              <p className="join-faq-item__answer">
                We review applications weekly. You'll receive a confirmation email within 5-7 business days.
              </p>
            </div>

            <div className="join-faq-item">
              <h3 className="join-faq-item__question">What's expected of members?</h3>
              <p className="join-faq-item__answer">
                Active participation in events, workshops, and community activities. Help us build a thriving startup ecosystem.
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default JoinNowPage;
