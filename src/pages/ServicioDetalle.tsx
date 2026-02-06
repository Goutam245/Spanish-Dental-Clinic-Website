import { useEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeft, Check, Clock, CreditCard, ArrowRight } from 'lucide-react';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { WhatsAppButton } from '@/components/WhatsAppButton';
import { Button } from '@/components/ui/button';
import { servicesData } from './Servicios';

const ServicioDetalle = () => {
  const { slug } = useParams<{ slug: string }>();
  const navigate = useNavigate();
  
  const service = servicesData.find(s => s.slug === slug);
  const otherServices = servicesData.filter(s => s.slug !== slug).slice(0, 3);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [slug]);

  if (!service) {
    return (
      <div className="min-h-screen bg-background">
        <Header />
        <div className="pt-32 pb-20 text-center">
          <h1 className="text-3xl font-bold text-navy mb-4">Servicio no encontrado</h1>
          <Button asChild>
            <Link to="/servicios">Ver todos los servicios</Link>
          </Button>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src={service.image}
            alt={service.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-primary/95 via-primary/90 to-navy/85" />
        </div>
        <div className="container mx-auto px-4 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <button
              onClick={() => navigate('/servicios')}
              className="inline-flex items-center gap-2 text-white/80 hover:text-white mb-6 transition-colors"
            >
              <ArrowLeft className="w-4 h-4" />
              Volver a servicios
            </button>
            <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
              {service.title}
            </h1>
            <p className="text-xl text-white/80 max-w-2xl">
              {service.fullDescription}
            </p>
            <div className="flex flex-wrap gap-6 mt-8">
              <div className="flex items-center gap-2 text-white/90">
                <Clock className="w-5 h-5 text-accent" />
                <span>{service.duration}</span>
              </div>
              <div className="flex items-center gap-2 text-white/90">
                <CreditCard className="w-5 h-5 text-accent" />
                <span>{service.price}</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-12">
            {/* Main Content */}
            <div className="lg:col-span-2">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
              >
                <h2 className="font-heading text-3xl font-bold text-navy mb-8">
                  ¿Qué Incluye Este Tratamiento?
                </h2>
                <div className="grid sm:grid-cols-2 gap-4 mb-12">
                  {service.features.map((feature, index) => (
                    <div
                      key={index}
                      className="flex items-start gap-3 p-4 bg-white rounded-xl border border-border"
                    >
                      <div className="w-6 h-6 rounded-full bg-accent/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                        <Check className="w-4 h-4 text-accent" />
                      </div>
                      <span className="text-foreground/80">{feature}</span>
                    </div>
                  ))}
                </div>

                <h2 className="font-heading text-3xl font-bold text-navy mb-6">
                  ¿Por Qué Elegirnos?
                </h2>
                <div className="prose prose-lg max-w-none text-foreground/80 mb-8">
                  <p>
                    En DentalCare, nos distinguimos por nuestra dedicación a la excelencia 
                    y nuestro compromiso con cada paciente. Nuestro equipo de especialistas 
                    cuenta con años de experiencia y formación continua en las técnicas más
                    avanzadas.
                  </p>
                  <p>
                    Utilizamos equipamiento de última generación que nos permite realizar 
                    diagnósticos precisos y tratamientos minimamente invasivos. Además, 
                    ofrecemos facilidades de pago y financiación para que el cuidado de 
                    su salud bucal esté siempre a su alcance.
                  </p>
                </div>

                <Button variant="cta" size="xl" asChild>
                  <Link to="/contacto">
                    Solicitar Cita para {service.title}
                  </Link>
                </Button>
              </motion.div>
            </div>

            {/* Sidebar */}
            <div>
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="sticky top-28"
              >
                {/* Contact Card */}
                <div className="bg-primary text-white p-8 rounded-2xl mb-8">
                  <h3 className="font-heading text-xl font-bold mb-4">
                    ¿Tiene Dudas?
                  </h3>
                  <p className="text-white/80 mb-6">
                    Llámenos sin compromiso y resolveremos todas sus preguntas sobre 
                    este tratamiento.
                  </p>
                  <a
                    href="tel:+34912345678"
                    className="block w-full bg-accent text-white text-center py-3 rounded-xl font-semibold hover:bg-accent/90 transition-colors"
                  >
                    912 345 678
                  </a>
                </div>

                {/* Other Services */}
                <div className="bg-white p-8 rounded-2xl border border-border">
                  <h3 className="font-heading text-lg font-bold text-navy mb-6">
                    Otros Servicios
                  </h3>
                  <div className="space-y-4">
                    {otherServices.map((s) => (
                      <Link
                        key={s.slug}
                        to={`/servicios/${s.slug}`}
                        className="flex items-center justify-between p-3 rounded-xl hover:bg-background transition-colors group"
                      >
                        <span className="font-medium text-foreground group-hover:text-primary transition-colors">
                          {s.title}
                        </span>
                        <ArrowRight className="w-4 h-4 text-accent" />
                      </Link>
                    ))}
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default ServicioDetalle;
