import { useEffect } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Users, Calendar, Award, Heart } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { WhatsAppButton } from '@/components/WhatsAppButton';
import { Button } from '@/components/ui/button';
import waitingRoomImage from '@/assets/waiting-room.jpg';
import treatmentRoomImage from '@/assets/treatment-room.jpg';
import dentist1 from '@/assets/dentist-1.jpg';
import dentist2 from '@/assets/dentist-2.jpg';

const stats = [
  { value: '15+', label: 'Años de Experiencia', icon: Calendar },
  { value: '10,000+', label: 'Pacientes Satisfechos', icon: Users },
  { value: '98%', label: 'Índice de Satisfacción', icon: Heart },
  { value: '25+', label: 'Premios y Reconocimientos', icon: Award },
];

const values = [
  {
    title: 'Excelencia Profesional',
    description: 'Nuestro equipo está formado por especialistas con formación continua en las técnicas más avanzadas de odontología.',
  },
  {
    title: 'Atención Personalizada',
    description: 'Cada paciente es único. Diseñamos planes de tratamiento adaptados a sus necesidades específicas y objetivos.',
  },
  {
    title: 'Tecnología de Vanguardia',
    description: 'Contamos con equipamiento de última generación para diagnósticos precisos y tratamientos menos invasivos.',
  },
  {
    title: 'Ambiente Confortable',
    description: 'Nuestras instalaciones están diseñadas para que se sienta relajado y en confianza durante cada visita.',
  },
];

const Nosotros = () => {
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
              Sobre Nosotros
            </span>
            <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
              Más de 15 Años Cuidando Sonrisas
            </h1>
            <p className="text-xl text-white/80">
              En DentalCare combinamos experiencia, tecnología y un trato humano excepcional 
              para ofrecerle la mejor atención odontológica de Madrid.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <span className="inline-block text-accent font-semibold text-sm uppercase tracking-wider mb-4">
                Nuestra Historia
              </span>
              <h2 className="font-heading text-3xl md:text-4xl font-bold text-navy mb-6">
                Una Tradición de Excelencia Dental
              </h2>
              <div className="space-y-4 text-foreground/80">
                <p>
                  DentalCare nació en 2009 con una visión clara: crear un espacio donde la odontología 
                  de alta calidad se combinara con un trato cercano y personalizado. Fundada por el 
                  Dr. Carlos Martínez, nuestra clínica ha crecido hasta convertirse en un referente 
                  en salud bucodental en Madrid.
                </p>
                <p>
                  A lo largo de estos años, hemos atendido a más de 10,000 pacientes, realizando 
                  desde revisiones rutinarias hasta complejos procedimientos de implantología y 
                  ortodoncia. Nuestro compromiso con la formación continua nos permite ofrecer 
                  siempre las técnicas más avanzadas y los mejores resultados.
                </p>
                <p>
                  Hoy, nuestro equipo multidisciplinar de especialistas trabaja con un objetivo 
                  común: que cada paciente salga de nuestra clínica con la sonrisa que merece y 
                  la tranquilidad de estar en las mejores manos.
                </p>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative"
            >
              <img
                src={waitingRoomImage}
                alt="Sala de espera moderna de DentalCare"
                className="rounded-2xl shadow-dental-lg w-full h-[400px] object-cover"
              />
              <div className="absolute -bottom-6 -left-6 bg-accent text-white p-6 rounded-2xl shadow-lg">
                <p className="text-3xl font-bold">2009</p>
                <p className="text-sm opacity-90">Año de fundación</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="text-center p-8 bg-white rounded-2xl shadow-dental"
              >
                <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-accent/10 flex items-center justify-center">
                  <stat.icon className="w-8 h-8 text-accent" />
                </div>
                <p className="text-4xl font-bold text-navy mb-2">{stat.value}</p>
                <p className="text-foreground/70">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center max-w-2xl mx-auto mb-16"
          >
            <span className="inline-block text-accent font-semibold text-sm uppercase tracking-wider mb-4">
              Nuestros Valores
            </span>
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-navy mb-6">
              Lo Que Nos Define
            </h2>
            <p className="text-foreground/70">
              Estos principios guían cada decisión que tomamos y cada tratamiento que realizamos.
            </p>
          </motion.div>
          <div className="grid md:grid-cols-2 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="p-8 bg-background rounded-2xl border border-border"
              >
                <h3 className="font-heading text-xl font-bold text-navy mb-3">
                  {value.title}
                </h3>
                <p className="text-foreground/70">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Facilities Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="order-2 lg:order-1"
            >
              <div className="grid grid-cols-2 gap-4">
                <img
                  src={treatmentRoomImage}
                  alt="Sala de tratamiento moderna"
                  className="rounded-xl shadow-dental h-48 w-full object-cover"
                />
                <img
                  src={dentist1}
                  alt="Dr. Carlos Martínez"
                  className="rounded-xl shadow-dental h-48 w-full object-cover"
                />
                <img
                  src={dentist2}
                  alt="Dra. Laura García"
                  className="rounded-xl shadow-dental h-48 w-full object-cover col-span-2"
                />
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="order-1 lg:order-2"
            >
              <span className="inline-block text-accent font-semibold text-sm uppercase tracking-wider mb-4">
                Instalaciones
              </span>
              <h2 className="font-heading text-3xl md:text-4xl font-bold text-navy mb-6">
                Tecnología y Confort
              </h2>
              <div className="space-y-4 text-foreground/80 mb-8">
                <p>
                  Nuestras instalaciones han sido diseñadas pensando en su comodidad. Contamos 
                  con salas de tratamiento equipadas con la última tecnología, incluyendo 
                  sistemas de radiografía digital, escáneres intraorales 3D y equipos de 
                  esterilización de máxima seguridad.
                </p>
                <p>
                  La sala de espera ofrece un ambiente relajante con wifi gratuito, zona de 
                  lectura y área de juegos para los más pequeños. Queremos que cada visita 
                  sea una experiencia agradable.
                </p>
              </div>
              <Button variant="cta" asChild>
                <Link to="/galeria">
                  Ver Galería
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Link>
              </Button>
            </motion.div>
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
              ¿Listo Para Conocernos?
            </h2>
            <p className="text-xl text-white/80 mb-8">
              Solicite una cita y descubra por qué miles de pacientes confían en nosotros.
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

export default Nosotros;
