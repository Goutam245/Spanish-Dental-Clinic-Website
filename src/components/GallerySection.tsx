import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import { X, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import treatmentRoom from '@/assets/treatment-room.jpg';
import equipment from '@/assets/equipment.jpg';
import clinicExterior from '@/assets/clinic-exterior.jpg';
import reception from '@/assets/reception.jpg';
import waitingRoom from '@/assets/waiting-room.jpg';
import dentist1 from '@/assets/dentist-1.jpg';
import heroImage from '@/assets/hero-dental.jpg';

const galleryImages = [
  { src: heroImage, title: 'Consulta Dental' },
  { src: treatmentRoom, title: 'Sala de Tratamiento' },
  { src: equipment, title: 'Equipamiento Moderno' },
  { src: reception, title: 'Recepción' },
  { src: waitingRoom, title: 'Sala de Espera' },
  { src: dentist1, title: 'Nuestro Equipo' },
  { src: clinicExterior, title: 'Exterior de la Clínica' },
];

export const GallerySection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  const [lightboxImage, setLightboxImage] = useState<string | null>(null);

  return (
    <section className="py-20 lg:py-32 bg-white" ref={ref}>
      <div className="container mx-auto px-4 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center max-w-2xl mx-auto mb-12"
        >
          <span className="inline-block text-accent font-semibold text-sm uppercase tracking-wider mb-4">
            Galería
          </span>
          <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-navy mb-6">
            Nuestras Instalaciones
          </h2>
          <p className="text-foreground/70">
            Conoce nuestras modernas instalaciones diseñadas para tu comodidad y bienestar.
          </p>
        </motion.div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {galleryImages.map((image, index) => (
            <motion.div
              key={image.src}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.4, delay: index * 0.05 }}
              className={`relative overflow-hidden rounded-xl cursor-pointer group ${
                index === 0 ? 'md:col-span-2 md:row-span-2' : ''
              }`}
              onClick={() => setLightboxImage(image.src)}
            >
              <img
                src={image.src}
                alt={image.title}
                className={`w-full object-cover transition-transform duration-500 group-hover:scale-110 ${
                  index === 0 ? 'h-full min-h-[300px]' : 'h-48 md:h-56'
                }`}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-navy/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                <span className="text-white font-medium">{image.title}</span>
              </div>
            </motion.div>
          ))}
        </div>

        {/* View All Link */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="text-center mt-12"
        >
          <Link
            to="/galeria"
            className="inline-flex items-center gap-2 text-primary font-semibold hover:text-accent transition-colors"
          >
            Ver galería completa
            <ArrowRight className="w-4 h-4" />
          </Link>
        </motion.div>
      </div>

      {/* Lightbox */}
      {lightboxImage && (
        <div 
          className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4"
          onClick={() => setLightboxImage(null)}
        >
          <button
            className="absolute top-4 right-4 w-12 h-12 rounded-full bg-white/10 flex items-center justify-center text-white hover:bg-white/20 transition-colors"
            onClick={() => setLightboxImage(null)}
          >
            <X className="w-6 h-6" />
          </button>
          <img
            src={lightboxImage}
            alt="Gallery"
            className="max-w-full max-h-[90vh] rounded-lg"
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      )}
    </section>
  );
};
