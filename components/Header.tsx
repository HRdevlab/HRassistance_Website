import React, { useState, useEffect } from 'react';
import { Link, NavLink as RouterNavLink } from 'react-router-dom';
import { NAV_LINKS } from '../constants';
import type { NavLink } from '../types';

const NavLinkItem: React.FC<{ link: NavLink; closeMenu: () => void }> = ({ link, closeMenu }) => {
  const [isHovered, setIsHovered] = useState(false);

  if (link.subLinks && link.subLinks.length > 0) {
    return (
      <div
        className="relative"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <RouterNavLink
          to={link.path}
          className={({ isActive }) =>
            `flex items-center px-3 py-2 rounded-md text-sm font-medium transition-colors duration-300 ${
              isActive ? 'text-accent-teal' : 'text-gray-700 hover:text-deep-blue'
            }`
          }
        >
          {link.name}
          <svg
            className={`w-4 h-4 ml-1 transition-transform duration-200 ${
              isHovered ? 'transform rotate-180' : ''
            }`}
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
          </svg>
        </RouterNavLink>
        {isHovered && (
          <div className="absolute top-full left-0 mt-1 w-48 bg-white rounded-md shadow-lg py-1 z-50">
            {link.subLinks.map((subLink) => (
              <RouterNavLink
                key={subLink.name}
                to={subLink.path}
                onClick={() => {
                  setIsHovered(false);
                  closeMenu();
                }}
                className="block px-4 py-2 text-sm text-gray-700 hover:bg-soft-gray hover:text-deep-blue"
              >
                {subLink.name}
              </RouterNavLink>
            ))}
          </div>
        )}
      </div>
    );
  }

  return (
    <RouterNavLink
      to={link.path}
      onClick={closeMenu}
      className={({ isActive }) =>
        `block md:inline-block px-3 py-2 rounded-md text-sm font-medium transition-colors duration-300 ${
          isActive ? 'text-accent-teal' : 'text-gray-700 hover:text-deep-blue'
        }`
      }
    >
      {link.name}
    </RouterNavLink>
  );
};

const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white/90 shadow-md backdrop-blur-lg' : 'bg-white'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <div className="flex-shrink-0">
            <Link to="/" className="flex items-center gap-2" aria-label="HRassistance, back to homepage">
              <div className="w-28 h-16 overflow-hidden" aria-hidden="true">
                <img
                  className="h-16 w-auto max-w-none"
                  src="https://i.ibb.co/20nCxLj9/HRassistance.png"
                  alt="HR Assistance Logo"
                />
              </div>
            </Link>
          </div>
          <div className="hidden md:block">
            <nav className="ml-10 flex items-baseline space-x-4">
              {NAV_LINKS.map((link) => (
                <NavLinkItem key={link.name} link={link} closeMenu={() => setIsOpen(false)} />
              ))}
            </nav>
          </div>
          <div className="hidden md:block">
            <Link
              to="/contact"
              className="ml-4 px-4 py-2 text-sm font-medium text-white bg-accent-teal rounded-lg hover:bg-accent-teal/90 transition-colors shadow-sm hover:shadow-md"
            >
              Get in Touch
            </Link>
          </div>
          <div className="-mr-2 flex md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              type="button"
              className="bg-gray-100 inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-deep-blue hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-100 focus:ring-deep-blue"
              aria-controls="mobile-menu"
              aria-expanded={isOpen}
            >
              <span className="sr-only">Open main menu</span>
              {isOpen ? (
                <svg
                  className="block h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg
                  className="block h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden" id="mobile-menu">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {NAV_LINKS.map((link) => (
              <NavLinkItem key={link.name} link={link} closeMenu={() => setIsOpen(false)} />
            ))}
            <Link
              to="/contact"
              onClick={() => setIsOpen(false)}
              className="block w-full text-left px-3 py-2 mt-2 text-sm font-medium text-white bg-accent-teal rounded-lg hover:bg-accent-teal/90 transition-colors"
            >
              Get in Touch
            </Link>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
