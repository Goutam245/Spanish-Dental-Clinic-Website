import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Star, Quote, MapPin, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import patient1 from '@/assets/patient-1.jpg';
import patient2 from '@/assets/patient-2.jpg';
import patient3 from '@/assets/patient-3.jpg';

const testimonials = [
  {
    name: 'María García',
    location: 'Madrid',
    text: 'Después de años con miedo al dentista, encontré en DentalCare un equipo que me hizo sentir completamente cómoda. El trato es excepcional y los resultados hablan por sí solos. ¡Mi sonrisa nunca había lucido mejor!',
    rating: 5,
    image: patient1,
  },
  {
    name: 'Javier López',
    location: 'Pozuelo',
    text: 'Me realizaron un tratamiento de implantes y quedé impresionado con la profesionalidad y el cuidado. Las instalaciones son de primera y el seguimiento post-tratamiento fue impecable.',
    rating: 5,
    image: patient2,
  },
  {
    name: 'Carmen Ruiz',
    location: 'Alcobendas',
    text: 'Llevé a mis hijos por primera vez y la experiencia fue maravillosa. La doctora tiene una paciencia infinita con los pequeños. Ya no tienen miedo de ir al dentista, ¡todo lo contrario!',
    rating: 5,
    image: patient3,
  },
];

export const TestimonialsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section className="py-20 lg:py-32 bg-background relative overflow-hidden" ref={ref}>
      {/* Decorative Pattern */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-0 left-0 w-72 h-72 bg-accent/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center max-w-2xl mx-auto mb-16"
        >
          <span className="inline-block text-accent font-semibold text-sm uppercase tracking-wider mb-4">
            Testimonios
          </span>
          <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-navy mb-6">
            Lo Que Dicen Nuestros Pacientes
          </h2>
          <p className="text-foreground/70">
            La satisfacción de nuestros pacientes es nuestra mayor recompensa. 
            Conoce sus experiencias y opiniones.
          </p>
        </motion.div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              className="bg-white rounded-2xl p-8 shadow-dental relative"
            >
              {/* Quote Icon */}
              <Quote className="absolute top-6 right-6 w-8 h-8 text-accent/20" />

              {/* Rating */}
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star
                    key={i}
                    className="w-5 h-5 fill-accent text-accent"
                  />
                ))}
              </div>

              {/* Text */}
              <p className="text-foreground/80 mb-6 leading-relaxed">
                "{testimonial.text}"
              </p>

              {/* Author */}
              <div className="flex items-center gap-4 pt-4 border-t border-border">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-12 h-12 rounded-full object-cover"
                />
                <div>
                  <p className="font-semibold text-navy">{testimonial.name}</p>
                  <p className="text-sm text-foreground/60 flex items-center gap-1">
                    <MapPin className="w-3 h-3" />
                    {testimonial.location}
                  </p>
                </div>
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
            to="/testimonios"
            className="inline-flex items-center gap-2 text-primary font-semibold hover:text-accent transition-colors"
          >
            Ver más testimonios
            <ArrowRight className="w-4 h-4" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
};
