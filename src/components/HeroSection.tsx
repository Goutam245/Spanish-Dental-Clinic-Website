import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { CheckCircle, Award, CreditCard } from 'lucide-react';
import { Button } from '@/components/ui/button';
import heroImage from '@/assets/hero-dental.jpg';

const trustBadges = [
  { icon: CheckCircle, text: 'Equipamiento de última generación' },
  { icon: Award, text: 'Odontólogos certificados' },
  { icon: CreditCard, text: 'Financiación disponible' },
];

export const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroImage}
          alt="Clínica dental moderna con equipamiento profesional"
          className="w-full h-full object-cover"
          loading="eager"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-primary/90 via-primary/80 to-navy/85" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 lg:px-8 pt-20">
        <div className="max-w-4xl mx-auto text-center">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="font-heading text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-white mb-6 leading-tight"
          >
            Su Sonrisa,{' '}
            <span className="text-accent">Nuestra Prioridad</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg md:text-xl lg:text-2xl text-white/90 mb-10 max-w-2xl mx-auto"
          >
            Clínica dental de excelencia con más de 15 años cuidando sonrisas en Madrid
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex flex-col sm:flex-row gap-4 justify-center mb-16"
          >
            <Button variant="cta" size="xl" asChild>
              <Link to="/contacto">Solicitar Cita</Link>
            </Button>
            <Button variant="ghost-light" size="xl" asChild>
              <Link to="/servicios">Conocer Servicios</Link>
            </Button>
          </motion.div>

          {/* Trust Badges */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="flex flex-col md:flex-row items-center justify-center gap-6 md:gap-10"
          >
            {trustBadges.map((badge, index) => (
              <div
                key={index}
                className="flex items-center gap-3 text-white/90"
              >
                <badge.icon className="w-5 h-5 text-accent" />
                <span className="text-sm font-medium">{badge.text}</span>
              </div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 0.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 1.5 }}
          className="w-6 h-10 rounded-full border-2 border-white/50 flex items-start justify-center p-2"
        >
          <div className="w-1.5 h-2.5 rounded-full bg-white/80" />
        </motion.div>
      </motion.div>
    </section>
  );
};
