import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import orthodonticsImage from '@/assets/orthodontics.jpg';
import implantsImage from '@/assets/implants.jpg';
import aestheticsImage from '@/assets/aesthetics.jpg';
import treatmentRoomImage from '@/assets/treatment-room.jpg';
import equipmentImage from '@/assets/equipment.jpg';
import waitingRoomImage from '@/assets/waiting-room.jpg';

const services = [
  {
    slug: 'ortodoncia',
    title: 'Ortodoncia',
    description: 'Brackets tradicionales, estéticos e invisibles para corregir la alineación dental y lograr una sonrisa perfecta.',
    image: orthodonticsImage,
  },
  {
    slug: 'implantes-dentales',
    title: 'Implantes Dentales',
    description: 'Soluciones permanentes para reemplazar dientes perdidos con implantes de titanio de alta calidad.',
    image: implantsImage,
  },
  {
    slug: 'estetica-dental',
    title: 'Estética Dental',
    description: 'Blanqueamiento profesional, carillas y diseño de sonrisa para transformar tu imagen.',
    image: aestheticsImage,
  },
  {
    slug: 'endodoncia',
    title: 'Endodoncia',
    description: 'Tratamiento de conducto con tecnología avanzada para salvar dientes dañados y eliminar el dolor.',
    image: treatmentRoomImage,
  },
  {
    slug: 'periodoncia',
    title: 'Periodoncia',
    description: 'Tratamiento especializado de encías para prevenir y tratar enfermedades periodontales.',
    image: equipmentImage,
  },
  {
    slug: 'odontopediatria',
    title: 'Odontopediatría',
    description: 'Cuidado dental especializado para los más pequeños en un ambiente amigable y divertido.',
    image: waitingRoomImage,
  },
];

export const ServicesSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section className="py-20 lg:py-32 bg-background" ref={ref}>
      <div className="container mx-auto px-4 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center max-w-2xl mx-auto mb-16"
        >
          <span className="inline-block text-accent font-semibold text-sm uppercase tracking-wider mb-4">
            Nuestros Servicios
          </span>
          <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-navy mb-6">
            Tratamientos de Excelencia
          </h2>
          <p className="text-foreground/70">
            Ofrecemos una amplia gama de servicios odontológicos utilizando las técnicas 
            más avanzadas y materiales de primera calidad.
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="service-card group bg-white rounded-2xl overflow-hidden border border-border hover:border-accent/50 cursor-pointer"
            >
              <div className="relative h-48 overflow-hidden">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-navy/50 to-transparent" />
              </div>
              <div className="p-6">
                <h3 className="font-heading text-xl font-bold text-navy mb-3 group-hover:text-primary transition-colors">
                  {service.title}
                </h3>
                <p className="text-foreground/70 mb-4">{service.description}</p>
                <Link
                  to={`/servicios/${service.slug}`}
                  className="inline-flex items-center gap-2 text-accent font-medium text-sm group-hover:gap-3 transition-all"
                >
                  Más información
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </motion.div>
          ))}
        </div>

        {/* View All Link */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="text-center mt-12"
        >
          <Link
            to="/servicios"
            className="inline-flex items-center gap-2 text-primary font-semibold hover:text-accent transition-colors"
          >
            Ver todos los servicios
            <ArrowRight className="w-4 h-4" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
};
