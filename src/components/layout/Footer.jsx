
import { Link } from 'react-router-dom';
import { Facebook, Twitter, Instagram, Linkedin, Mail, Phone, MapPin, Sprout } from 'lucide-react';
import {layoutConfig} from '../../config/layoutConfig';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-section">
          <Link to="/" className="footer-logo">
            <Sprout />
            <span>{layoutConfig.siteName}</span>
          </Link>
          <p className="footer-text">{layoutConfig.tagline}</p>
          <div className="social-links">
            {layoutConfig.socialLinks.map((social, index) => {
              const Icon = {Facebook, Twitter, Instagram, Linkedin}[social.icon];
              return (
                <a key={index} href={social.href} aria-label={social.icon}>
                  <Icon size={20} />
                </a>
              );
            })}
           
          </div>
        </div>

        <div className="footer-section">
          <h3>Quick Links</h3>
          <ul>
            {layoutConfig.navigation.map(link => (
              <li key={link.to}>
                <Link to={link.to}>{link.label}</Link>
              </li>
            ))}
          </ul>
        </div>

        <div className="footer-section">
          <h3>Products</h3>
          <ul>
            {layoutConfig.productCategories.map(category => (
              <li key={category.to}>
                <Link to={category.to}>{category.label}</Link>
              </li>
            ))}
          </ul>
        </div>

        <div className="footer-section">
          <h3>Contact Us</h3>
          <div className="contact-item">
            <Mail size={20} />
            <span>{layoutConfig.contact.email}</span>
          </div>
          <div className="contact-item">
            <Phone size={20} />
            <span>{layoutConfig.contact.phone}</span>
          </div>
          <div className="contact-item">
            <MapPin size={20} />
            <span>{layoutConfig.contact.address}</span>
          </div>
        </div>
      </div>

      <div className="copyright">
        <p>&copy; {new Date().getFullYear()} {layoutConfig.siteName}</p>
      </div>
    </footer>
  );
}
