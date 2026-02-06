import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Instagram, Linkedin } from 'lucide-react';
import { Link } from 'react-router-dom';
import dentist1 from '@/assets/dentist-1.jpg';
import dentist2 from '@/assets/dentist-2.jpg';
import dentist3 from '@/assets/dentist-3.jpg';
import dentist4 from '@/assets/dentist-4.jpg';

const team = [
  {
    name: 'Dr. Carlos Martínez',
    specialty: 'Director Médico',
    credentials: 'Especialista en Implantología',
    image: dentist1,
  },
  {
    name: 'Dra. Laura García',
    specialty: 'Ortodoncista',
    credentials: 'Máster en Ortodoncia Invisible',
    image: dentist2,
  },
  {
    name: 'Dra. Ana Rodríguez',
    specialty: 'Periodoncista',
    credentials: 'Especialista en Periodoncia',
    image: dentist3,
  },
  {
    name: 'Dr. Miguel Fernández',
    specialty: 'Endodoncista',
    credentials: 'PhD en Odontología Restauradora',
    image: dentist4,
  },
];

export const TeamSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section className="py-20 lg:py-32 bg-white" ref={ref}>
      <div className="container mx-auto px-4 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center max-w-2xl mx-auto mb-16"
        >
          <span className="inline-block text-accent font-semibold text-sm uppercase tracking-wider mb-4">
            Profesionales
          </span>
          <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-navy mb-6">
            Nuestro Equipo de Expertos
          </h2>
          <p className="text-foreground/70">
            Contamos con un equipo multidisciplinar de profesionales altamente cualificados, 
            comprometidos con su bienestar y satisfacción.
          </p>
        </motion.div>

        {/* Team Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {team.map((member, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group relative"
            >
              <div className="relative overflow-hidden rounded-2xl mb-4">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full aspect-[3/4] object-cover transition-transform duration-500 group-hover:scale-105"
                />
                {/* Overlay with social icons */}
                <div className="absolute inset-0 bg-gradient-to-t from-navy/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center pb-6">
                  <div className="flex gap-3">
                    <a
                      href="#"
                      className="w-10 h-10 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center text-white hover:bg-accent transition-colors"
                      aria-label={`Instagram de ${member.name}`}
                    >
                      <Instagram className="w-5 h-5" />
                    </a>
                    <a
                      href="#"
                      className="w-10 h-10 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center text-white hover:bg-accent transition-colors"
                      aria-label={`LinkedIn de ${member.name}`}
                    >
                      <Linkedin className="w-5 h-5" />
                    </a>
                  </div>
                </div>
              </div>
              <div className="text-center">
                <h3 className="font-heading font-bold text-lg text-navy mb-1">
                  {member.name}
                </h3>
                <p className="text-accent font-medium text-sm mb-1">
                  {member.specialty}
                </p>
                <p className="text-foreground/60 text-sm">{member.credentials}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* View All Link */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="text-center mt-12"
        >
          <Link
            to="/equipo"
            className="inline-flex items-center justify-center gap-2 bg-primary text-white px-8 py-3 rounded-xl font-semibold hover:bg-primary/90 transition-colors"
          >
            Conocer al Equipo
          </Link>
        </motion.div>
      </div>
    </section>
  );
};
