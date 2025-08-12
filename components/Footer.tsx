import React from 'react';
import { Link } from 'react-router-dom';
import { NAV_LINKS, SOCIAL_ICONS } from '../constants';

const Footer: React.FC = () => {
  return (
    <footer className="bg-dark-slate text-white">
      <div className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          
          {/* About Section */}
          <div className="col-span-1 md:col-span-2 lg:col-span-1">
            <Link to="/" className="inline-flex items-center mb-4" aria-label="HRassistance, back to homepage">
              <div className="w-20 h-auto overflow-hidden" aria-hidden="true">
                <img
                  className="h-12 w-auto max-w-full"
                  src="https://i.ibb.co/20nCxLj9/HRassistance.png"
                  alt="HRassistance logo"
                />
              </div>
            </Link>
            <p className="text-gray-400 text-sm">
              The recruitment firm delivering quality recruitment solutions. We help organizations find the right people they need at all levels.
            </p>
          </div>
          
          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Quick Links</h3>
            <ul className="space-y-3">
              {NAV_LINKS.map(link => (
                <li key={link.name}>
                  <Link to={link.path} className="text-sm text-gray-400 hover:text-accent-teal transition-colors">{link.name}</Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Contact Us</h3>
            <address className="space-y-3 text-sm text-gray-400 not-italic">
              <p className="flex items-start">
                205 A, Town Square Shopping Center, New Airport Rd, Viman Nagar, Pune, Maharashtra 411014
              </p>
              <p className="flex items-center">
                <a href="mailto:info@hrassistance.co.in" className="hover:text-accent-teal">info@hrassistance.co.in</a>
              </p>
            </address>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="mt-16 border-t border-gray-700 pt-8 flex flex-col sm:flex-row justify-between items-center text-sm text-gray-500">
          <p>COPYRIGHT © {new Date().getFullYear()} ALL RIGHTS RESERVED | HRassistance</p>
          <Link to="#" className="hover:text-accent-teal mt-4 sm:mt-0">Privacy Policy</Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
