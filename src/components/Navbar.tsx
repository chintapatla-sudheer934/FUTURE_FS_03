import { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Coffee, Menu, X } from 'lucide-react';
import ThemeToggle from './ui/ThemeToggle';

const navLinks = [
  { to: '/', label: 'Home' },
  { to: '/about', label: 'About' },
  { to: '/menu', label: 'Menu' },
  { to: '/gallery', label: 'Gallery' },
  { to: '/testimonials', label: 'Testimonials' },
  { to: '/contact', label: 'Contact' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handler, { passive: true });
    handler();
    return () => window.removeEventListener('scroll', handler);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
  }, [location.pathname]);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-cream-50/90 dark:bg-coffee-950/90 backdrop-blur-xl shadow-md py-2'
          : 'bg-transparent py-4'
      }`}
    >
      <nav className="container-max section-pad flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2.5 group">
          <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-accent-500 to-accent-600 flex items-center justify-center shadow-lg shadow-accent-500/30 group-hover:scale-105 transition-transform">
            <Coffee className="w-5 h-5 text-white" />
          </div>
          <div className="leading-none">
            <span className="block font-display text-lg font-bold text-coffee-900 dark:text-cream-50">Brew Haven</span>
            <span className="block text-[10px] font-semibold text-accent-500 tracking-[0.2em] uppercase">Café</span>
          </div>
        </Link>

        <div className="hidden lg:flex items-center gap-1">
          {navLinks.map((link) => {
            const active = location.pathname === link.to;
            return (
              <Link
                key={link.to}
                to={link.to}
                className={`px-4 py-2 rounded-full text-sm font-semibold transition-all duration-200 ${
                  active
                    ? 'bg-accent-500/10 text-accent-600 dark:text-accent-400'
                    : 'text-coffee-700 dark:text-cream-200 hover:bg-coffee-100 dark:hover:bg-coffee-800'
                }`}
              >
                {link.label}
              </Link>
            );
          })}
        </div>

        <div className="flex items-center gap-2">
          <ThemeToggle />
          <Link to="/contact" className="hidden sm:inline-flex btn-primary text-sm py-2 px-5">
            Book a Table
          </Link>
          <button
            onClick={() => setMobileOpen((o) => !o)}
            className="lg:hidden p-2.5 rounded-full text-coffee-700 dark:text-cream-200 hover:bg-coffee-100 dark:hover:bg-coffee-800 transition-colors"
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </nav>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="lg:hidden absolute top-full left-0 right-0 bg-cream-50 dark:bg-coffee-950 border-t border-coffee-100 dark:border-coffee-800 shadow-lg animate-fade-in">
          <div className="section-pad py-4 flex flex-col gap-1">
            {navLinks.map((link) => {
              const active = location.pathname === link.to;
              return (
                <Link
                  key={link.to}
                  to={link.to}
                  className={`px-4 py-3 rounded-xl text-sm font-semibold transition-colors ${
                    active
                      ? 'bg-accent-500/10 text-accent-600 dark:text-accent-400'
                      : 'text-coffee-700 dark:text-cream-200 hover:bg-coffee-100 dark:hover:bg-coffee-800'
                  }`}
                >
                  {link.label}
                </Link>
              );
            })}
            <Link to="/contact" className="btn-primary text-sm mt-2">Book a Table</Link>
          </div>
        </div>
      )}
    </header>
  );
}
