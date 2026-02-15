import './JoinNow.css';

const JoinNow = () => {
  return (
    <section className="join-now">
      <div className="join-now__inner">
        <div className="join-now__content">
          <div className="join-now__header">
            <p className="join-now__eyebrow">Join E-Cell SRMIST</p>
            <h2 className="join-now__title">
              Ready to start your entrepreneurial journey?
            </h2>
            <p className="join-now__lead">
              Become part of the fastest-growing entrepreneurship community on campus. Get access to
              mentorship, resources, events, and a network of like-minded founders.
            </p>
          </div>

          <div className="join-now__benefits">
            <div className="join-now__benefit">
              <div className="join-now__benefit-icon">🚀</div>
              <h3 className="join-now__benefit-title">Launch Your Startup</h3>
              <p className="join-now__benefit-text">
                Get guidance from experienced mentors and access to resources that will help turn your idea into reality.
              </p>
            </div>

            <div className="join-now__benefit">
              <div className="join-now__benefit-icon">🤝</div>
              <h3 className="join-now__benefit-title">Network with Founders</h3>
              <p className="join-now__benefit-text">
                Connect with fellow entrepreneurs, alumni founders, and industry experts who can help you grow.
              </p>
            </div>

            <div className="join-now__benefit">
              <div className="join-now__benefit-icon">💡</div>
              <h3 className="join-now__benefit-title">Learn & Build</h3>
              <p className="join-now__benefit-text">
                Attend workshops, hackathons, and pitch nights designed to sharpen your entrepreneurial skills.
              </p>
            </div>
          </div>

          <div className="join-now__cta">
            <a href="https://forms.google.com/ecell-srmist" target="_blank" rel="noopener noreferrer" className="join-now__button join-now__button--primary">
              Join E-Cell Now
            </a>
            <a href="/about" className="join-now__button join-now__button--secondary">
              Learn More
            </a>
          </div>

          <div className="join-now__stats">
            <div className="join-now__stat">
              <span className="join-now__stat-value">500+</span>
              <span className="join-now__stat-label">Active Members</span>
            </div>
            <div className="join-now__stat">
              <span className="join-now__stat-value">40+</span>
              <span className="join-now__stat-label">Events Annually</span>
            </div>
            <div className="join-now__stat">
              <span className="join-now__stat-value">25+</span>
              <span className="join-now__stat-label">Startups Launched</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default JoinNow;
