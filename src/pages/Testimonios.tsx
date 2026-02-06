import { useEffect } from 'react';
import { motion } from 'framer-motion';
import { Star, Quote, MapPin } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { WhatsAppButton } from '@/components/WhatsAppButton';
import { Button } from '@/components/ui/button';
import patient1 from '@/assets/patient-1.jpg';
import patient2 from '@/assets/patient-2.jpg';
import patient3 from '@/assets/patient-3.jpg';

const testimonials = [
  {
    name: 'María García Fernández',
    location: 'Madrid Centro',
    treatment: 'Ortodoncia Invisible',
    text: 'Después de años pensando en corregir mis dientes, por fin me decidí gracias a DentalCare. El trato de la Dra. Laura fue excepcional desde el primer día. Ahora tengo la sonrisa que siempre quise y ni siquiera se notaba que llevaba ortodoncia.',
    rating: 5,
    image: patient1,
  },
  {
    name: 'Javier López Ruiz',
    location: 'Pozuelo de Alarcón',
    treatment: 'Implantes Dentales',
    text: 'Perdí dos muelas y pensé que tendría que vivir con eso. El Dr. Carlos me explicó todo el proceso de implantes con paciencia y profesionalidad. El resultado es increíble, no se distinguen de mis dientes naturales. Altamente recomendado.',
    rating: 5,
    image: patient2,
  },
  {
    name: 'Carmen Ruiz Martín',
    location: 'Alcobendas',
    treatment: 'Odontopediatría',
    text: 'Llevé a mis hijos con mucho miedo porque uno de ellos tenía pánico al dentista. El equipo fue tan amable y paciente que ahora mis hijos quieren volver. La zona infantil es genial y las doctoras son maravillosas con los niños.',
    rating: 5,
    image: patient3,
  },
  {
    name: 'Antonio Sánchez Gil',
    location: 'Chamberí, Madrid',
    treatment: 'Blanqueamiento Dental',
    text: 'Tenía los dientes muy manchados por el café y el tabaco. En solo dos sesiones conseguí un blanqueamiento increíble. El equipo es muy profesional y las instalaciones son de primera. Volveré para cualquier tratamiento que necesite.',
    rating: 5,
    image: patient1,
  },
  {
    name: 'Elena Martínez Vega',
    location: 'Majadahonda',
    treatment: 'Periodoncia',
    text: 'Tenía problemas serios de encías y había visitado varios dentistas sin solución. La Dra. Ana diagnosticó correctamente mi problema y tras el tratamiento, mis encías están completamente sanas. Excelente profesional.',
    rating: 5,
    image: patient3,
  },
  {
    name: 'Roberto Díaz Navarro',
    location: 'Las Rozas',
    treatment: 'Endodoncia',
    text: 'Llegué con un dolor terrible pensando que perdería la muela. El Dr. Miguel realizó una endodoncia perfecta en una sola sesión. Ni dolor durante ni después. Salvó mi diente cuando otros dentistas me dijeron que era imposible.',
    rating: 5,
    image: patient2,
  },
];

const stats = [
  { value: '4.9', label: 'Puntuación Media' },
  { value: '2,500+', label: 'Reseñas Positivas' },
  { value: '98%', label: 'Recomendarían' },
];

const Testimonios = () => {
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
              Testimonios
            </span>
            <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
              Lo Que Dicen Nuestros Pacientes
            </h1>
            <p className="text-xl text-white/80">
              La satisfacción de nuestros pacientes es nuestra mayor recompensa. 
              Descubra por qué confían en nosotros para su salud bucodental.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-12 bg-white border-b border-border">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid grid-cols-3 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="text-center"
              >
                <p className="text-4xl md:text-5xl font-bold text-primary mb-2">
                  {stat.value}
                </p>
                <p className="text-foreground/70">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Grid */}
      <section className="py-20">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white rounded-2xl p-8 shadow-dental relative"
              >
                <Quote className="absolute top-6 right-6 w-10 h-10 text-accent/20" />
                
                {/* Rating */}
                <div className="flex gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star
                      key={i}
                      className="w-5 h-5 fill-accent text-accent"
                    />
                  ))}
                </div>

                {/* Treatment Tag */}
                <span className="inline-block bg-background text-primary text-xs font-medium px-3 py-1 rounded-full mb-4">
                  {testimonial.treatment}
                </span>

                {/* Quote */}
                <p className="text-foreground/80 mb-6 leading-relaxed">
                  "{testimonial.text}"
                </p>

                {/* Author */}
                <div className="flex items-center gap-4 pt-4 border-t border-border">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-14 h-14 rounded-full object-cover"
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
        </div>
      </section>

      {/* Video Testimonial Placeholder */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center max-w-2xl mx-auto mb-12"
          >
            <span className="inline-block text-accent font-semibold text-sm uppercase tracking-wider mb-4">
              Casos Reales
            </span>
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-navy mb-6">
              Resultados Que Hablan Por Sí Solos
            </h2>
            <p className="text-foreground/70">
              Cada día ayudamos a nuestros pacientes a recuperar su sonrisa y su confianza. 
              Estos son algunos de los casos de éxito que nos llenan de orgullo.
            </p>
          </motion.div>
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
              ¿Quiere Ser Nuestro Próximo Caso de Éxito?
            </h2>
            <p className="text-xl text-white/80 mb-8">
              Únase a los miles de pacientes satisfechos que han transformado su sonrisa con nosotros.
            </p>
            <Button variant="cta" size="xl" asChild>
              <Link to="/contacto">Solicitar Cita Gratuita</Link>
            </Button>
          </motion.div>
        </div>
      </section>

      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default Testimonios;
