import { Instagram, Facebook, Phone, MapPin, Mail, Clock } from 'lucide-react';
import { Link } from 'react-router-dom';

const quickLinks = [
  { href: '/', label: 'Inicio' },
  { href: '/nosotros', label: 'Nosotros' },
  { href: '/servicios', label: 'Servicios' },
  { href: '/equipo', label: 'Equipo' },
  { href: '/testimonios', label: 'Testimonios' },
  { href: '/contacto', label: 'Contacto' },
];

const services = [
  { href: '/servicios/ortodoncia', label: 'Ortodoncia' },
  { href: '/servicios/implantes-dentales', label: 'Implantes Dentales' },
  { href: '/servicios/estetica-dental', label: 'Estética Dental' },
  { href: '/servicios/endodoncia', label: 'Endodoncia' },
  { href: '/servicios/periodoncia', label: 'Periodoncia' },
  { href: '/servicios/odontopediatria', label: 'Odontopediatría' },
];

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-navy text-white">
      <div className="container mx-auto px-4 lg:px-8 py-16">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-8">
          {/* Brand */}
          <div>
            <Link to="/" className="flex items-center gap-3 mb-6">
              <div className="relative w-10 h-10">
                <svg viewBox="0 0 40 40" className="w-full h-full">
                  <circle cx="20" cy="20" r="18" className="fill-accent" />
                  <path
                    d="M20 8c-3 0-5.5 2-6.5 5-1 3 0 6 1.5 8.5 1.5 2.5 3.5 6 5 8.5 1.5-2.5 3.5-6 5-8.5 1.5-2.5 2.5-5.5 1.5-8.5-1-3-3.5-5-6.5-5z"
                    className="fill-navy"
                  />
                </svg>
              </div>
              <div>
                <span className="font-heading font-bold text-xl">
                  Dental<span className="text-accent">Care</span>
                </span>
              </div>
            </Link>
            <p className="text-white/70 text-sm mb-6">
              Su sonrisa, nuestra prioridad. Más de 15 años cuidando de la salud 
              bucodental de nuestros pacientes con excelencia y dedicación.
            </p>
            <div className="flex gap-4">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-accent transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-accent transition-colors"
                aria-label="Facebook"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a
                href="https://wa.me/34912345678"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-accent transition-colors"
                aria-label="WhatsApp"
              >
                <Phone className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-heading font-bold text-lg mb-6">Enlaces Rápidos</h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    to={link.href}
                    className="text-white/70 hover:text-accent transition-colors text-sm"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-heading font-bold text-lg mb-6">Servicios</h4>
            <ul className="space-y-3">
              {services.map((service) => (
                <li key={service.href}>
                  <Link
                    to={service.href}
                    className="text-white/70 hover:text-accent transition-colors text-sm"
                  >
                    {service.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-heading font-bold text-lg mb-6">Contacto</h4>
            <div className="space-y-4 text-sm">
              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                <p className="text-white/70">
                  Calle Gran Vía, 28<br />
                  28013 Madrid, España
                </p>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-accent flex-shrink-0" />
                <a
                  href="tel:+34912345678"
                  className="text-white/70 hover:text-accent transition-colors"
                >
                  +34 912 345 678
                </a>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-accent flex-shrink-0" />
                <a
                  href="mailto:info@dentalcare.es"
                  className="text-white/70 hover:text-accent transition-colors"
                >
                  info@dentalcare.es
                </a>
              </div>
              <div className="flex items-start gap-3">
                <Clock className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                <div className="text-white/70">
                  <p>Lun - Vie: 9:00 - 20:00</p>
                  <p>Sábados: 10:00 - 14:00</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/10">
        <div className="container mx-auto px-4 lg:px-8 py-6">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-white/60">
            <p>© {currentYear} DentalCare. Todos los derechos reservados.</p>
            <div className="flex items-center gap-6">
              <Link to="/privacidad" className="hover:text-accent transition-colors">
                Política de Privacidad
              </Link>
              <Link to="/aviso-legal" className="hover:text-accent transition-colors">
                Aviso Legal
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
