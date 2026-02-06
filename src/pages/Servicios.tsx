import { useEffect } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Check } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { WhatsAppButton } from '@/components/WhatsAppButton';
import { Button } from '@/components/ui/button';
import orthodonticsImage from '@/assets/orthodontics.jpg';
import implantsImage from '@/assets/implants.jpg';
import aestheticsImage from '@/assets/aesthetics.jpg';
import treatmentRoomImage from '@/assets/treatment-room.jpg';
import equipmentImage from '@/assets/equipment.jpg';
import waitingRoomImage from '@/assets/waiting-room.jpg';

export const servicesData = [
  {
    slug: 'ortodoncia',
    title: 'Ortodoncia',
    shortDescription: 'Brackets tradicionales, estéticos e invisibles para corregir la alineación dental.',
    fullDescription: 'La ortodoncia es la especialidad dental que se encarga de corregir la posición de los dientes y la mandíbula. En DentalCare ofrecemos todas las opciones disponibles para que encuentre el tratamiento que mejor se adapte a su estilo de vida.',
    image: orthodonticsImage,
    features: [
      'Brackets metálicos tradicionales',
      'Brackets estéticos de cerámica',
      'Ortodoncia invisible (Invisalign)',
      'Ortodoncia lingual',
      'Tratamiento para niños y adultos',
      'Seguimiento personalizado',
    ],
    duration: '12-24 meses',
    price: 'Desde 1.500€',
  },
  {
    slug: 'implantes-dentales',
    title: 'Implantes Dentales',
    shortDescription: 'Soluciones permanentes para reemplazar dientes perdidos con implantes de titanio.',
    fullDescription: 'Los implantes dentales son la solución más avanzada y duradera para reemplazar dientes perdidos. Utilizamos implantes de titanio de la más alta calidad que se integran perfectamente con el hueso, proporcionando una base sólida para coronas, puentes o prótesis.',
    image: implantsImage,
    features: [
      'Implantes de titanio premium',
      'Cirugía guiada por ordenador',
      'Carga inmediata cuando es posible',
      'Regeneración ósea si es necesaria',
      'Garantía de por vida',
      'Seguimiento post-operatorio completo',
    ],
    duration: '3-6 meses',
    price: 'Desde 1.200€',
  },
  {
    slug: 'estetica-dental',
    title: 'Estética Dental',
    shortDescription: 'Blanqueamiento profesional, carillas y diseño de sonrisa para transformar tu imagen.',
    fullDescription: 'La estética dental engloba todos los tratamientos destinados a mejorar la apariencia de su sonrisa. Desde blanqueamientos hasta carillas de porcelana, diseñamos sonrisas naturales y armoniosas que realzan su belleza.',
    image: aestheticsImage,
    features: [
      'Blanqueamiento dental profesional',
      'Carillas de porcelana',
      'Carillas de composite',
      'Diseño digital de sonrisa',
      'Contorneado dental',
      'Cierre de diastemas',
    ],
    duration: '1-4 semanas',
    price: 'Desde 300€',
  },
  {
    slug: 'endodoncia',
    title: 'Endodoncia',
    shortDescription: 'Tratamiento de conducto con tecnología avanzada para salvar dientes dañados.',
    fullDescription: 'La endodoncia, comúnmente conocida como "tratamiento de conducto", permite salvar dientes que de otra manera deberían ser extraídos. Utilizamos tecnología de vanguardia para realizar tratamientos precisos, rápidos y prácticamente indoloros.',
    image: treatmentRoomImage,
    features: [
      'Microscopio operatorio',
      'Localizador de ápice electrónico',
      'Instrumentación rotatoria',
      'Obturación termoplástica',
      'Anestesia sin dolor',
      'Resultado en una sola sesión',
    ],
    duration: '1-2 sesiones',
    price: 'Desde 150€',
  },
  {
    slug: 'periodoncia',
    title: 'Periodoncia',
    shortDescription: 'Tratamiento especializado de encías para prevenir enfermedades periodontales.',
    fullDescription: 'La periodoncia se ocupa del diagnóstico y tratamiento de las enfermedades que afectan a las encías y al hueso que soporta los dientes. Tratamos desde gingivitis leve hasta periodontitis avanzada con técnicas mínimamente invasivas.',
    image: equipmentImage,
    features: [
      'Diagnóstico periodontal completo',
      'Limpieza profunda (curetaje)',
      'Cirugía periodontal',
      'Regeneración tisular guiada',
      'Injertos de encía',
      'Mantenimiento periodontal',
    ],
    duration: 'Variable según caso',
    price: 'Desde 80€',
  },
  {
    slug: 'odontopediatria',
    title: 'Odontopediatría',
    shortDescription: 'Cuidado dental especializado para los más pequeños en un ambiente amigable.',
    fullDescription: 'La odontopediatría es la rama de la odontología dedicada a la salud bucal de bebés, niños y adolescentes. Nuestro equipo está especialmente formado para hacer que la visita al dentista sea una experiencia positiva para los más pequeños.',
    image: waitingRoomImage,
    features: [
      'Primera visita desde el primer año',
      'Selladores de fisuras',
      'Tratamientos preventivos',
      'Ortodoncia interceptiva',
      'Sedación consciente si es necesaria',
      'Ambiente adaptado para niños',
    ],
    duration: '30-45 minutos por visita',
    price: 'Desde 40€',
  },
];

const Servicios = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

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
              Nuestros Servicios
            </span>
            <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
              Tratamientos de Excelencia
            </h1>
            <p className="text-xl text-white/80">
              Ofrecemos una amplia gama de servicios odontológicos utilizando las técnicas 
              más avanzadas y materiales de primera calidad.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {servicesData.map((service, index) => (
              <motion.div
                key={service.slug}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group bg-white rounded-2xl overflow-hidden shadow-dental hover:shadow-dental-lg transition-all duration-300"
              >
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-navy/60 to-transparent" />
                  <div className="absolute bottom-4 left-4">
                    <span className="bg-accent text-white text-sm font-medium px-3 py-1 rounded-full">
                      {service.price}
                    </span>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="font-heading text-xl font-bold text-navy mb-3">
                    {service.title}
                  </h3>
                  <p className="text-foreground/70 mb-4">
                    {service.shortDescription}
                  </p>
                  <ul className="space-y-2 mb-6">
                    {service.features.slice(0, 3).map((feature, i) => (
                      <li key={i} className="flex items-center gap-2 text-sm text-foreground/70">
                        <Check className="w-4 h-4 text-accent flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <Link
                    to={`/servicios/${service.slug}`}
                    className="inline-flex items-center gap-2 text-primary font-semibold hover:text-accent transition-colors"
                  >
                    Más información
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary">
        <div className="container mx-auto px-4 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-2xl mx-auto"
          >
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-white mb-6">
              ¿No Sabe Qué Tratamiento Necesita?
            </h2>
            <p className="text-xl text-white/80 mb-8">
              Solicite una consulta de valoración gratuita y nuestros especialistas 
              le recomendarán el mejor tratamiento para su caso.
            </p>
            <Button variant="cta" size="xl" asChild>
              <Link to="/contacto">Consulta Gratuita</Link>
            </Button>
          </motion.div>
        </div>
      </section>

      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default Servicios;
