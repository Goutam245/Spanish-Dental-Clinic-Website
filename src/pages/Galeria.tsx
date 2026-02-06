import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { X } from 'lucide-react';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { WhatsAppButton } from '@/components/WhatsAppButton';
import treatmentRoom from '@/assets/treatment-room.jpg';
import equipment from '@/assets/equipment.jpg';
import clinicExterior from '@/assets/clinic-exterior.jpg';
import reception from '@/assets/reception.jpg';
import waitingRoom from '@/assets/waiting-room.jpg';
import dentist1 from '@/assets/dentist-1.jpg';
import dentist2 from '@/assets/dentist-2.jpg';
import dentist3 from '@/assets/dentist-3.jpg';
import dentist4 from '@/assets/dentist-4.jpg';
import heroImage from '@/assets/hero-dental.jpg';

type FilterType = 'todos' | 'instalaciones' | 'equipo' | 'tratamientos';

const galleryImages = [
  { src: heroImage, category: 'instalaciones', title: 'Consulta Dental Principal' },
  { src: dentist1, category: 'equipo', title: 'Dr. Carlos Martínez - Director Médico' },
  { src: treatmentRoom, category: 'tratamientos', title: 'Sala de Tratamiento Moderna' },
  { src: reception, category: 'instalaciones', title: 'Recepción de la Clínica' },
  { src: dentist2, category: 'equipo', title: 'Dra. Laura García - Ortodoncista' },
  { src: equipment, category: 'tratamientos', title: 'Equipamiento de Última Generación' },
  { src: waitingRoom, category: 'instalaciones', title: 'Sala de Espera' },
  { src: dentist3, category: 'equipo', title: 'Dra. Ana Rodríguez - Periodoncista' },
  { src: clinicExterior, category: 'instalaciones', title: 'Exterior de la Clínica' },
  { src: dentist4, category: 'equipo', title: 'Dr. Miguel Fernández - Endodoncista' },
];

const filters = [
  { value: 'todos' as FilterType, label: 'Todos' },
  { value: 'instalaciones' as FilterType, label: 'Instalaciones' },
  { value: 'equipo' as FilterType, label: 'Equipo' },
  { value: 'tratamientos' as FilterType, label: 'Tratamientos' },
];

const Galeria = () => {
  const [activeFilter, setActiveFilter] = useState<FilterType>('todos');
  const [lightboxImage, setLightboxImage] = useState<{ src: string; title: string } | null>(null);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const filteredImages = activeFilter === 'todos' 
    ? galleryImages 
    : galleryImages.filter(img => img.category === activeFilter);

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 bg-primary overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 right-0 w-96 h-96 bg-accent rounded-full blur-3xl" />
          <div className="absolute bottom-0 left-0 w-72 h-72 bg-white rounded-full blur-3xl" />
        </div>
        <div className="container mx-auto px-4 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl"
          >
            <span className="inline-block text-accent font-semibold text-sm uppercase tracking-wider mb-4">
              Galería
            </span>
            <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
              Nuestras Instalaciones
            </h1>
            <p className="text-xl text-white/80">
              Conozca nuestras modernas instalaciones, nuestro equipamiento de última 
              generación y el equipo de profesionales que le atenderá.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Filters */}
      <section className="py-8 bg-white border-b border-border sticky top-20 z-30">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="flex justify-center gap-4 flex-wrap">
            {filters.map((filter) => (
              <button
                key={filter.value}
                onClick={() => setActiveFilter(filter.value)}
                className={`px-6 py-2 rounded-full text-sm font-medium transition-all ${
                  activeFilter === filter.value
                    ? 'bg-accent text-white shadow-glow'
                    : 'bg-muted text-foreground/70 hover:bg-muted/80'
                }`}
              >
                {filter.label}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="py-12">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {filteredImages.map((image, index) => (
              <motion.div
                key={image.src + index}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                className={`relative overflow-hidden rounded-xl cursor-pointer group ${
                  index === 0 ? 'md:col-span-2 md:row-span-2' : ''
                }`}
                onClick={() => setLightboxImage({ src: image.src, title: image.title })}
              >
                <img
                  src={image.src}
                  alt={image.title}
                  className={`w-full object-cover transition-transform duration-500 group-hover:scale-110 ${
                    index === 0 ? 'h-full min-h-[300px] md:min-h-[400px]' : 'h-48 md:h-56'
                  }`}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-navy/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                  <span className="text-white font-medium text-sm">{image.title}</span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Virtual Tour CTA */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center max-w-2xl mx-auto"
          >
            <span className="inline-block text-accent font-semibold text-sm uppercase tracking-wider mb-4">
              Visítenos
            </span>
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-navy mb-6">
              ¿Quiere Conocernos en Persona?
            </h2>
            <p className="text-foreground/70 mb-8">
              Solicite una visita a nuestras instalaciones sin compromiso. Estaremos 
              encantados de mostrarle nuestras salas de tratamiento y responder a 
              todas sus preguntas.
            </p>
            <a
              href="/contacto"
              className="inline-flex items-center justify-center gap-2 bg-accent text-white px-8 py-4 rounded-xl font-semibold hover:bg-accent/90 transition-colors"
            >
              Solicitar Visita
            </a>
          </motion.div>
        </div>
      </section>

      <Footer />
      <WhatsAppButton />

      {/* Lightbox */}
      {lightboxImage && (
        <div 
          className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center p-4"
          onClick={() => setLightboxImage(null)}
        >
          <button
            className="absolute top-4 right-4 w-12 h-12 rounded-full bg-white/10 flex items-center justify-center text-white hover:bg-white/20 transition-colors"
            onClick={() => setLightboxImage(null)}
          >
            <X className="w-6 h-6" />
          </button>
          <div className="max-w-5xl w-full" onClick={(e) => e.stopPropagation()}>
            <img
              src={lightboxImage.src}
              alt={lightboxImage.title}
              className="w-full max-h-[80vh] object-contain rounded-lg"
            />
            <p className="text-white text-center mt-4 font-medium">{lightboxImage.title}</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default Galeria;
