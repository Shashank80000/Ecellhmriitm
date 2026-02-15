import './Hero.css';
import Marquee from '../Marquee/Marquee';
import DecryptedText from '../DecryptedText/DecryptedText';

const Hero = () => {
  return (
    <section className="hero" id="home">
      <div className="hero__inner">
        <div className="hero__countdown">
          <span className="hero__countdown-title">
            E-SUMMIT <span>2026</span>
          </span>
          <div className="hero__countdown-grid" aria-label="Countdown">
            <div className="hero__countdown-cell">
              <span className="hero__countdown-label">DAYS</span>
              <span className="hero__countdown-value">00</span>
            </div>
            <div className="hero__countdown-cell">
              <span className="hero__countdown-label">HRS</span>
              <span className="hero__countdown-value">00</span>
            </div>
            <div className="hero__countdown-cell">
              <span className="hero__countdown-label">MTH</span>
              <span className="hero__countdown-value">00</span>
            </div>
            <div className="hero__countdown-cell">
              <span className="hero__countdown-label">SEC</span>
              <span className="hero__countdown-value">00</span>
            </div>
          </div>
        </div>

        <h1 className="hero__title">
          <DecryptedText
            text="Entrepreneurship Cell"
            speed={40}
            maxIterations={10}
            animateOn="view"
            sequential
            revealDirection="start"
          />
          <span>
            <DecryptedText
              text="HMRITM"
              speed={40}
              maxIterations={10}
              animateOn="view"
              sequential
              revealDirection="start"
            />
          </span>
        </h1>

        <p className="hero__subtitle">Fostering Innovation &amp; Entrepreneurship</p>
        <p className="hero__tagline">
          We help you <span>Launch</span>
        </p>

        <div className="hero__actions">
          <a className="hero__button hero__button--primary" href="/about">
            Discover Excellence
            <span aria-hidden="true">→</span>
          </a>
          <a className="hero__button hero__button--ghost" href="/events">
            View Events
          </a>
        </div>

        <div className="hero__scroll" aria-hidden="true">⌄</div>
      </div>
      
      <Marquee />
    </section>
  );
};

export default Hero;
