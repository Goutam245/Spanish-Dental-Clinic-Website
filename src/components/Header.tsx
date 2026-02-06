import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Phone, Menu, X } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
import { Button } from '@/components/ui/button';

const navLinks = [
  { href: '/', label: 'Inicio' },
  { href: '/nosotros', label: 'Nosotros' },
  { href: '/servicios', label: 'Servicios' },
  { href: '/equipo', label: 'Equipo' },
  { href: '/testimonios', label: 'Testimonios' },
  { href: '/galeria', label: 'Galería' },
  { href: '/contacto', label: 'Contacto' },
];

export const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location]);

  const isHomePage = location.pathname === '/';
  const shouldBeTransparent = isHomePage && !isScrolled;

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        shouldBeTransparent ? 'bg-transparent' : 'bg-white/95 backdrop-blur-md shadow-dental'
      }`}
    >
      <div className="container mx-auto px-4 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-3">
            <div className="relative w-10 h-10">
              <svg viewBox="0 0 40 40" className="w-full h-full">
                <circle cx="20" cy="20" r="18" className="fill-primary" />
                <path
                  d="M20 8c-3 0-5.5 2-6.5 5-1 3 0 6 1.5 8.5 1.5 2.5 3.5 6 5 8.5 1.5-2.5 3.5-6 5-8.5 1.5-2.5 2.5-5.5 1.5-8.5-1-3-3.5-5-6.5-5z"
                  className="fill-white"
                />
              </svg>
            </div>
            <div className="hidden sm:block">
              <span className={`font-heading font-bold text-xl ${shouldBeTransparent ? 'text-white' : 'text-navy'}`}>
                Dental<span className="text-accent">Care</span>
              </span>
              <p className={`text-xs ${shouldBeTransparent ? 'text-white/80' : 'text-muted-foreground'}`}>
                Clínica Dental de Excelencia
              </p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                to={link.href}
                className={`text-sm font-medium transition-colors hover:text-accent ${
                  location.pathname === link.href
                    ? 'text-accent'
                    : shouldBeTransparent ? 'text-white' : 'text-foreground'
                }`}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* CTA & Phone */}
          <div className="hidden lg:flex items-center gap-4">
            <a
              href="tel:+34912345678"
              className={`flex items-center gap-2 text-sm font-medium ${
                shouldBeTransparent ? 'text-white' : 'text-primary'
              }`}
            >
              <Phone className="w-4 h-4" />
              <span>912 345 678</span>
            </a>
            <Button variant="cta" size="lg" asChild>
              <Link to="/contacto">Reservar Cita</Link>
            </Button>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            className="lg:hidden p-2"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? (
              <X className={`w-6 h-6 ${shouldBeTransparent ? 'text-white' : 'text-navy'}`} />
            ) : (
              <Menu className={`w-6 h-6 ${shouldBeTransparent ? 'text-white' : 'text-navy'}`} />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-white border-t shadow-lg"
          >
            <nav className="container mx-auto px-4 py-4 flex flex-col gap-3">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  to={link.href}
                  className={`font-medium py-2 transition-colors ${
                    location.pathname === link.href ? 'text-accent' : 'text-foreground hover:text-accent'
                  }`}
                >
                  {link.label}
                </Link>
              ))}
              <div className="pt-4 border-t mt-2 flex flex-col gap-3">
                <a
                  href="tel:+34912345678"
                  className="flex items-center gap-2 text-primary font-medium"
                >
                  <Phone className="w-4 h-4" />
                  <span>912 345 678</span>
                </a>
                <Button variant="cta" size="lg" className="w-full" asChild>
                  <Link to="/contacto">Reservar Cita</Link>
                </Button>
              </div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};
