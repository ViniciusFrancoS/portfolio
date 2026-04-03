import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import { navigation } from '../../data/content';
import { LogoSymbol } from '../ui/icons/LogoSymbol';
import './Navbar.css';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);

      const sections = navigation.navItems.map(item => item.id);
      for (const section of [...sections].reverse()) {
        const el = document.getElementById(section);
        if (el && window.scrollY >= el.offsetTop - 120) {
          setActiveSection(section);
          break;
        }
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (href: string) => {
    setMobileOpen(false);
    const el = document.getElementById(href.replace('#', ''));
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <>
      <motion.nav
        className={`navbar ${scrolled ? 'navbar--scrolled' : ''}`}
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6 }}
      >
        <div className="navbar__inner">
          <motion.a
            href="#hero"
            className="navbar__logo"
            onClick={() => handleNavClick('#hero')}
            whileHover={{ scale: 1.02 }}
          >
            <div className="navbar__logo-mark">
              <LogoSymbol size={18} />
            </div>
          </motion.a>

          <ul className="navbar__links">
            {navigation.navItems.map((item) => (
              <li key={item.href}>
                <a
                  href={item.href}
                  className={`navbar__link ${activeSection === item.id ? 'navbar__link--active' : ''}`}
                  onClick={(e) => { e.preventDefault(); handleNavClick(item.href); }}
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>

          <div className="navbar__right">
            <div className="navbar__socials">
              {navigation.socials.map(({ icon: Icon, href, label }) => (
                <motion.a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="navbar__social-btn"
                  aria-label={label}
                  whileHover={{ scale: 1.1, y: -1 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Icon size={16} />
                </motion.a>
              ))}
            </div>
            <motion.a
              href="#contato"
              className="btn btn-primary navbar__cta"
              onClick={(e) => { e.preventDefault(); handleNavClick('#contato'); }}
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
            >
              Fale comigo
            </motion.a>
          </div>

          <button
            className="navbar__mobile-toggle"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Menu"
          >
            {mobileOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </motion.nav>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            className="mobile-menu"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.25 }}
          >
            <ul className="mobile-menu__links">
              {navigation.navItems.map((item, i) => (
                <motion.li
                  key={item.href}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.06 }}
                >
                  <a
                    href={item.href}
                    className={`mobile-menu__link ${activeSection === item.id ? 'active' : ''}`}
                    onClick={(e) => { e.preventDefault(); handleNavClick(item.href); }}
                  >
                    {item.label}
                  </a>
                </motion.li>
              ))}
            </ul>
            <div className="mobile-menu__footer">
              <div className="navbar__socials">
                {navigation.socials.map(({ icon: Icon, href, label }) => (
                  <a key={label} href={href} target="_blank" rel="noopener noreferrer" className="navbar__social-btn" aria-label={label}>
                    <Icon size={16} />
                  </a>
                ))}
              </div>
              <a href="#contato" className="btn btn-primary" onClick={(e) => { e.preventDefault(); handleNavClick('#contato'); }}>
                Fale comigo
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
