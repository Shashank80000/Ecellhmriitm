import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__inner">
        <div className="footer__section footer__section--brand">
          <h3 className="footer__brand">E-Cell HMRITM</h3>
          <p className="footer__description">
            A student-run entrepreneurial organization officially recognized by the C-Tech department and the SCO. 
            Fostering innovation and leadership at SRM Institute of Science & Technology.
          </p>
        </div>

        <div className="footer__section footer__section--connect">
          <h4 className="footer__heading">CONNECT</h4>
          <div className="footer__social">
            <a href="mailto:ecell@srmist.edu.in" className="footer__social-link" aria-label="Email">
              <span className="footer__icon">✉</span>
              <span>Email</span>
            </a>
            <a href="https://linkedin.com/company/ecell-srmist" target="_blank" rel="noopener noreferrer" className="footer__social-link" aria-label="LinkedIn">
              <span className="footer__icon">in</span>
              <span>LinkedIn</span>
            </a>
            <a href="https://instagram.com/ecell_srmist" target="_blank" rel="noopener noreferrer" className="footer__social-link" aria-label="Instagram">
              <span className="footer__icon">📷</span>
              <span>Instagram</span>
            </a>
            <a href="https://wa.me/919876543210" target="_blank" rel="noopener noreferrer" className="footer__social-link" aria-label="WhatsApp">
              <span className="footer__icon">💬</span>
              <span>WhatsApp</span>
            </a>
          </div>
        </div>

        <div className="footer__section footer__section--location">
          <h4 className="footer__heading">LOCATION</h4>
          <div className="footer__location">
            <p className="footer__address">
              <span className="footer__location-icon">📍</span>
              Tech Park, SRM Institute of Science & Technology<br />
              SRM Nagar, Kattankulathur<br />
              Tamil Nadu (603202), India
            </p>
          </div>
        </div>
      </div>

      <div className="footer__bottom">
        <p className="footer__copyright">
          © 2026 E-Cell SRMIST. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
