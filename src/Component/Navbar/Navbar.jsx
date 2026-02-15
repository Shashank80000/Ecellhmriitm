import './Navbar.css';
import { NavLink } from 'react-router-dom';
import { useEffect, useState } from 'react';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const closeMenu = () => {
    setMenuOpen(false);
  };

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

        <button
          className={`navbar__toggle ${menuOpen ? 'navbar__toggle--open' : ''}`}
          type="button"
          aria-label="Toggle navigation"
          aria-expanded={menuOpen}
          aria-controls="primary-navigation"
          onClick={() => setMenuOpen((open) => !open)}
        >
          <span className="navbar__toggle-bar" />
          <span className="navbar__toggle-bar" />
          <span className="navbar__toggle-bar" />
        </button>

        <nav
          id="primary-navigation"
          className={`navbar__links ${menuOpen ? 'navbar__links--open' : ''}`}
          aria-label="Primary"
        >
          <NavLink
            className={({ isActive }) =>
              isActive ? 'navbar__link navbar__link--active' : 'navbar__link'
            }
            end
            to="/"
            onClick={closeMenu}
          >
            Home
          </NavLink>
          <NavLink
            className={({ isActive }) =>
              isActive ? 'navbar__link navbar__link--active' : 'navbar__link'
            }
            to="/about"
            onClick={closeMenu}
          >
            About
          </NavLink>
          <NavLink
            className={({ isActive }) =>
              isActive ? 'navbar__link navbar__link--active' : 'navbar__link'
            }
            to="/team"
            onClick={closeMenu}
          >
            Team
          </NavLink>
          <NavLink
            className={({ isActive }) =>
              isActive ? 'navbar__link navbar__link--active' : 'navbar__link'
            }
            to="/events"
            onClick={closeMenu}
          >
            Events
          </NavLink>
          <NavLink
            className={({ isActive }) =>
              isActive ? 'navbar__link navbar__link--active' : 'navbar__link'
            }
            to="/contact"
            onClick={closeMenu}
          >
            Contact
          </NavLink>
          <NavLink
            className={({ isActive }) =>
              isActive ? 'navbar__link navbar__link--active' : 'navbar__link'
            }
            to="/join"
            onClick={closeMenu}
          >
            Join Now
          </NavLink>
          <NavLink
            className={({ isActive }) =>
              isActive ? 'navbar__link navbar__link--active' : 'navbar__link'
            }
            to="/developers"
            onClick={closeMenu}
          >
            Developers
          </NavLink>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
