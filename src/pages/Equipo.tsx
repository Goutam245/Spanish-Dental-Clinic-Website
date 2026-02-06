import { useEffect } from 'react';
import { motion } from 'framer-motion';
import { Instagram, Linkedin, Mail } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { WhatsAppButton } from '@/components/WhatsAppButton';
import { Button } from '@/components/ui/button';
import dentist1 from '@/assets/dentist-1.jpg';
import dentist2 from '@/assets/dentist-2.jpg';
import dentist3 from '@/assets/dentist-3.jpg';
import dentist4 from '@/assets/dentist-4.jpg';

const teamMembers = [
  {
    name: 'Dr. Carlos Martínez',
    role: 'Director Médico',
    specialty: 'Implantología y Cirugía Oral',
    image: dentist1,
    bio: 'Licenciado en Odontología por la Universidad Complutense de Madrid con Máster en Implantología Avanzada. Más de 20 años de experiencia y más de 5,000 implantes colocados con éxito.',
    education: [
      'Licenciatura en Odontología - UCM (2001)',
      'Máster en Implantología - Universidad de Barcelona (2004)',
      'Diplomado en Cirugía Oral Avanzada - NYU (2008)',
    ],
  },
  {
    name: 'Dra. Laura García',
    role: 'Ortodoncista',
    specialty: 'Ortodoncia y Ortodoncia Invisible',
    image: dentist2,
    bio: 'Especialista en ortodoncia con certificación en Invisalign Diamond Provider. Apasionada por crear sonrisas perfectas utilizando las técnicas más innovadoras y discretas.',
    education: [
      'Licenciatura en Odontología - UAM (2008)',
      'Máster en Ortodoncia - Universidad de Sevilla (2011)',
      'Certificación Invisalign Diamond - 2015',
    ],
  },
  {
    name: 'Dra. Ana Rodríguez',
    role: 'Periodoncista',
    specialty: 'Periodoncia e Implantes',
    image: dentist3,
    bio: 'Especializada en el tratamiento de enfermedades periodontales y regeneración tisular. Su enfoque preventivo ayuda a los pacientes a mantener encías sanas de por vida.',
    education: [
      'Licenciatura en Odontología - UGR (2010)',
      'Máster en Periodoncia - UCM (2013)',
      'Curso de Microcirugía Periodontal - EAO (2016)',
    ],
  },
  {
    name: 'Dr. Miguel Fernández',
    role: 'Endodoncista',
    specialty: 'Endodoncia y Odontología Conservadora',
    image: dentist4,
    bio: 'Experto en endodoncia microscópica con una tasa de éxito superior al 98%. Dedicado a salvar dientes que otros consideran perdidos mediante técnicas de precisión.',
    education: [
      'Licenciatura en Odontología - UV (2005)',
      'Máster en Endodoncia - UB (2008)',
      'Certificación en Microscopía Dental - UCLA (2012)',
    ],
  },
];

const Equipo = () => {
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
              Nuestro Equipo
            </span>
            <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
              Profesionales a Su Servicio
            </h1>
            <p className="text-xl text-white/80">
              Conozca al equipo de especialistas que cuidará de su salud bucodental 
              con dedicación, experiencia y las técnicas más avanzadas.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Team Grid */}
      <section className="py-20">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="space-y-20">
            {teamMembers.map((member, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className={`grid lg:grid-cols-2 gap-12 items-center ${
                  index % 2 === 1 ? 'lg:flex-row-reverse' : ''
                }`}
              >
                <div className={index % 2 === 1 ? 'lg:order-2' : ''}>
                  <div className="relative">
                    <img
                      src={member.image}
                      alt={member.name}
                      className="w-full max-w-md mx-auto aspect-[3/4] object-cover rounded-2xl shadow-dental-lg"
                    />
                    <div className="absolute -bottom-4 -right-4 lg:right-auto lg:-left-4 flex gap-2">
                      <a
                        href="#"
                        className="w-12 h-12 rounded-full bg-primary flex items-center justify-center text-white hover:bg-accent transition-colors"
                        aria-label="Instagram"
                      >
                        <Instagram className="w-5 h-5" />
                      </a>
                      <a
                        href="#"
                        className="w-12 h-12 rounded-full bg-primary flex items-center justify-center text-white hover:bg-accent transition-colors"
                        aria-label="LinkedIn"
                      >
                        <Linkedin className="w-5 h-5" />
                      </a>
                      <a
                        href={`mailto:${member.name.toLowerCase().replace(' ', '.')}@dentalcare.es`}
                        className="w-12 h-12 rounded-full bg-primary flex items-center justify-center text-white hover:bg-accent transition-colors"
                        aria-label="Email"
                      >
                        <Mail className="w-5 h-5" />
                      </a>
                    </div>
                  </div>
                </div>
                <div className={index % 2 === 1 ? 'lg:order-1' : ''}>
                  <span className="inline-block text-accent font-semibold text-sm uppercase tracking-wider mb-2">
                    {member.role}
                  </span>
                  <h2 className="font-heading text-3xl md:text-4xl font-bold text-navy mb-2">
                    {member.name}
                  </h2>
                  <p className="text-primary font-medium mb-4">{member.specialty}</p>
                  <p className="text-foreground/70 mb-6">{member.bio}</p>
                  <div className="bg-background rounded-xl p-6 border border-border">
                    <h4 className="font-semibold text-navy mb-4">Formación</h4>
                    <ul className="space-y-2">
                      {member.education.map((edu, i) => (
                        <li key={i} className="text-sm text-foreground/70 flex items-start gap-2">
                          <span className="w-1.5 h-1.5 rounded-full bg-accent mt-2 flex-shrink-0" />
                          {edu}
                        </li>
                      ))}
                    </ul>
                  </div>
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
              ¿Quiere Conocernos en Persona?
            </h2>
            <p className="text-xl text-white/80 mb-8">
              Solicite una cita y permítanos mostrarle por qué somos la mejor elección 
              para su salud bucodental.
            </p>
            <Button variant="cta" size="xl" asChild>
              <Link to="/contacto">Conocer al Equipo</Link>
            </Button>
          </motion.div>
        </div>
      </section>

      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default Equipo;
