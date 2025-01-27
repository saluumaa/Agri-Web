
import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Sprout } from 'lucide-react';
import { AnimatePresence } from 'framer-motion';
import {layoutConfig} from '../../config/layoutConfig';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();



  return (
    <nav className="nav">
      <div className="nav-container">
        <Link to="/" className="logo">
          <Sprout />
          <span>{layoutConfig.siteName}</span>
        </Link>

        <div className="nav-links">
          {layoutConfig.navigation.map(link => (
            <Link
              key={link.to}
              to={link.to}
              className={`nav-link ${location.pathname === link.to ? 'active' : ''}`}
            >
              {link.label}
            </Link>
          ))}
        </div>

        <button className="menu-button" onClick={() => setIsOpen(true)}>
          <Menu size={24} />
        </button>

        <AnimatePresence>
          {isOpen && (
            <div
              className="mobile-menu"
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'tween', duration: 0.3 }}
            >
              <div className="mobile-header">
                <Link to="/" className="logo" onClick={() => setIsOpen(false)}>
                  <Sprout />
                  <span>{layoutConfig.siteName}</span>
                </Link>
                <button className="menu-button" onClick={() => setIsOpen(false)}>
                  <X size={24} />
                </button>
              </div>

              <div className="mobile-links">
                {layoutConfig.navigation.map(link => (
                  <Link
                    key={link.to}
                    to={link.to}
                    className={`nav-link ${location.pathname === link.to ? 'active' : ''}`}
                    onClick={() => setIsOpen(false)}
                  >
                    {link.label}
                  </Link>
                ))}
              </div>
            </div>
          )}
        </AnimatePresence>
      </div>
    </nav>
  );
}
