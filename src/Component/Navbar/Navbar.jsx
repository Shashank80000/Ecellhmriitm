import './Navbar.css';
import { NavLink } from 'react-router-dom';
import { useEffect, useState } from 'react';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`navbar ${scrolled ? 'navbar--scrolled' : ''}`}>
      <div className="navbar__inner">
        <a className="navbar__brand" href="/">
          <span className="navbar__brand-mark" aria-hidden="true">●👌</span>
          <span className="navbar__brand-text">
            <span className="navbar__brand-line">E-CELL</span>
            <span className="navbar__brand-line">Hmritm</span>
          </span>
        </a>

        <nav className="navbar__links" aria-label="Primary">
          <NavLink
            className={({ isActive }) =>
              isActive ? 'navbar__link navbar__link--active' : 'navbar__link'
            }
            end
            to="/"
          >
            Home
          </NavLink>
          <NavLink
            className={({ isActive }) =>
              isActive ? 'navbar__link navbar__link--active' : 'navbar__link'
            }
            to="/about"
          >
            About
          </NavLink>
          <NavLink
            className={({ isActive }) =>
              isActive ? 'navbar__link navbar__link--active' : 'navbar__link'
            }
            to="/team"
          >
            Team
          </NavLink>
          <NavLink
            className={({ isActive }) =>
              isActive ? 'navbar__link navbar__link--active' : 'navbar__link'
            }
            to="/events"
          >
            Events
          </NavLink>
          <NavLink
            className={({ isActive }) =>
              isActive ? 'navbar__link navbar__link--active' : 'navbar__link'
            }
            to="/contact"
          >
            Contact
          </NavLink>
          <NavLink
            className={({ isActive }) =>
              isActive ? 'navbar__link navbar__link--active' : 'navbar__link'
            }
            to="/join"
          >
            Join Now
          </NavLink>
          <NavLink
            className={({ isActive }) =>
              isActive ? 'navbar__link navbar__link--active' : 'navbar__link'
            }
            to="/developers"
          >
            Developers
          </NavLink>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
