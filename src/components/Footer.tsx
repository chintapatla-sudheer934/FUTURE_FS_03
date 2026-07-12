import { Link } from 'react-router-dom';
import { Coffee, MapPin, Phone, Mail, Clock, Instagram, Facebook, Twitter, ArrowUp } from 'lucide-react';

const quickLinks = [
  { to: '/', label: 'Home' },
  { to: '/about', label: 'About' },
  { to: '/menu', label: 'Menu' },
  { to: '/gallery', label: 'Gallery' },
  { to: '/testimonials', label: 'Testimonials' },
  { to: '/contact', label: 'Contact' },
];

const socials = [
  { icon: Instagram, href: '#', label: 'Instagram' },
  { icon: Facebook, href: '#', label: 'Facebook' },
  { icon: Twitter, href: '#', label: 'Twitter' },
];

export default function Footer() {
  return (
    <footer className="bg-coffee-900 dark:bg-coffee-950 text-cream-100 pt-16 pb-8">
      <div className="container-max section-pad">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2.5 mb-4">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-accent-500 to-accent-600 flex items-center justify-center">
                <Coffee className="w-5 h-5 text-white" />
              </div>
              <div>
                <span className="block font-display text-lg font-bold text-cream-50">Brew Haven</span>
                <span className="block text-[10px] font-semibold text-accent-400 tracking-[0.2em] uppercase">Café</span>
              </div>
            </div>
            <p className="text-sm text-cream-300/70 leading-relaxed">
              Your cozy neighborhood coffee haven. Freshly roasted beans, artisan pastries, and warm hospitality in every cup.
            </p>
            <div className="flex items-center gap-3 mt-5">
              {socials.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  aria-label={s.label}
                  className="w-9 h-9 rounded-full bg-coffee-800 hover:bg-accent-500 flex items-center justify-center transition-colors"
                >
                  <s.icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick links */}
          <div>
            <h4 className="font-display font-bold text-cream-50 mb-4">Quick Links</h4>
            <ul className="space-y-2.5">
              {quickLinks.map((link) => (
                <li key={link.to}>
                  <Link to={link.to} className="text-sm text-cream-300/70 hover:text-accent-400 transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-display font-bold text-cream-50 mb-4">Contact</h4>
            <ul className="space-y-3 text-sm text-cream-300/70">
              <li className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-accent-400 shrink-0 mt-0.5" />
                <span>142 Maple Street, Portland, OR 97201</span>
              </li>
              <li className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-accent-400 shrink-0" />
                <a href="tel:+15035550142" className="hover:text-accent-400 transition-colors">(503) 555-0142</a>
              </li>
              <li className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-accent-400 shrink-0" />
                <a href="mailto:hello@brewhavencafe.com" className="hover:text-accent-400 transition-colors">hello@brewhavencafe.com</a>
              </li>
            </ul>
          </div>

          {/* Hours */}
          <div>
            <h4 className="font-display font-bold text-cream-50 mb-4">Opening Hours</h4>
            <ul className="space-y-2.5 text-sm text-cream-300/70">
              <li className="flex items-center gap-2.5">
                <Clock className="w-4 h-4 text-accent-400 shrink-0" />
                <span>Mon – Fri: 7:00 AM – 8:00 PM</span>
              </li>
              <li className="flex items-center gap-2.5 pl-6">
                <span>Sat – Sun: 8:00 AM – 6:00 PM</span>
              </li>
            </ul>
            <Link to="/contact" className="btn-primary text-sm mt-5 py-2.5 px-5">
              Book a Table
            </Link>
          </div>
        </div>

        <div className="border-t border-coffee-800 pt-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-cream-300/50">© 2026 Brew Haven Café. All rights reserved.</p>
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="flex items-center gap-2 text-xs font-semibold text-cream-300/70 hover:text-accent-400 transition-colors"
          >
            Back to Top <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </footer>
  );
}
