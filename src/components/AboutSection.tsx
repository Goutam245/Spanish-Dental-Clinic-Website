import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import waitingRoomImage from '@/assets/waiting-room.jpg';

const stats = [
  { value: '15+', label: 'Años' },
  { value: '10K+', label: 'Pacientes' },
  { value: '98%', label: 'Satisfacción' },
];

export const AboutSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section className="py-20 lg:py-32 bg-white" ref={ref}>
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <div className="relative rounded-3xl overflow-hidden shadow-dental-lg">
              <img
                src={waitingRoomImage}
                alt="Sala de espera moderna de DentalCare"
                className="w-full h-[400px] lg:h-[500px] object-cover"
              />
            </div>
            {/* Floating Stats */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="absolute -bottom-6 -right-6 lg:right-8 flex gap-3"
            >
              {stats.map((stat, index) => (
                <div
                  key={index}
                  className="w-20 h-20 lg:w-24 lg:h-24 rounded-full bg-accent flex flex-col items-center justify-center text-white shadow-glow"
                >
                  <span className="font-heading font-bold text-lg lg:text-xl">
                    {stat.value}
                  </span>
                  <span className="text-xs lg:text-sm opacity-90">{stat.label}</span>
                </div>
              ))}
            </motion.div>
          </motion.div>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <span className="inline-block text-accent font-semibold text-sm uppercase tracking-wider mb-4">
              Sobre Nosotros
            </span>
            <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-navy mb-6">
              Clínica Dental de Confianza
            </h2>
            <div className="space-y-4 text-foreground/80 mb-8">
              <p>
                En DentalCare, entendemos que cada sonrisa es única. Durante más de 15 años, 
                hemos dedicado nuestra práctica a proporcionar atención dental personalizada 
                de la más alta calidad, combinando tecnología de vanguardia con un trato humano 
                y cercano.
              </p>
              <p>
                Nuestro equipo de profesionales altamente cualificados trabaja con un único 
                objetivo: cuidar de su salud bucodental en un ambiente cómodo y acogedor. 
                Desde tratamientos preventivos hasta procedimientos estéticos avanzados, 
                estamos aquí para ayudarle a lograr la sonrisa que merece.
              </p>
              <p>
                Contamos con instalaciones modernas y equipamiento de última generación, 
                porque creemos que la excelencia en odontología requiere las mejores herramientas 
                y las manos más expertas.
              </p>
            </div>
            <Link
              to="/equipo"
              className="inline-flex items-center gap-2 text-primary font-semibold hover:text-accent transition-colors group"
            >
              Conoce Nuestro Equipo
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
