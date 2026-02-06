import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { MapPin, Phone, Mail, Clock, Send, CheckCircle } from 'lucide-react';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { WhatsAppButton } from '@/components/WhatsAppButton';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { toast } from 'sonner';

const contactInfo = [
  {
    icon: MapPin,
    title: 'Dirección',
    content: 'Calle Gran Vía, 28\n28013 Madrid, España',
    link: 'https://maps.google.com/?q=Gran+Via+28+Madrid',
  },
  {
    icon: Phone,
    title: 'Teléfono',
    content: '+34 912 345 678',
    link: 'tel:+34912345678',
  },
  {
    icon: Mail,
    title: 'Email',
    content: 'info@dentalcare.es',
    link: 'mailto:info@dentalcare.es',
  },
  {
    icon: Clock,
    title: 'Horario',
    content: 'Lun - Vie: 9:00 - 20:00\nSábados: 10:00 - 14:00',
    link: null,
  },
];

const faqs = [
  {
    question: '¿Es necesario pedir cita previa?',
    answer: 'Sí, recomendamos siempre pedir cita previa para garantizar una atención personalizada y sin esperas. Sin embargo, en caso de urgencias dentales, haremos todo lo posible por atenderle lo antes posible.',
  },
  {
    question: '¿Ofrecen financiación para los tratamientos?',
    answer: 'Sí, ofrecemos financiación hasta 24 meses sin intereses para tratamientos superiores a 1.000€. También aceptamos todas las principales tarjetas de crédito y seguros dentales.',
  },
  {
    question: '¿Cuánto dura la primera consulta?',
    answer: 'La primera consulta tiene una duración aproximada de 30-45 minutos. Incluye una exploración completa, diagnóstico y presupuesto personalizado sin compromiso.',
  },
  {
    question: '¿Atienden urgencias dentales?',
    answer: 'Sí, contamos con servicio de urgencias dentales. Si tiene un dolor intenso o una emergencia dental, llámenos y le atenderemos con prioridad en el menor tiempo posible.',
  },
];

const Contacto = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    service: '',
    message: '',
  });

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      toast.success('¡Mensaje enviado correctamente!', {
        description: 'Nos pondremos en contacto con usted en menos de 24 horas.',
      });
      setFormData({ name: '', phone: '', email: '', service: '', message: '' });
    }, 1500);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

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
              Contacto
            </span>
            <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
              ¿Listo Para Su Nueva Sonrisa?
            </h1>
            <p className="text-xl text-white/80">
              Contáctenos para programar su cita o resolver cualquier duda. 
              Estamos aquí para ayudarle a conseguir la sonrisa que merece.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Info Cards */}
      <section className="py-12 -mt-8 relative z-10">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {contactInfo.map((info, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="bg-white rounded-xl p-6 shadow-dental"
              >
                <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center mb-4">
                  <info.icon className="w-6 h-6 text-accent" />
                </div>
                <h3 className="font-semibold text-navy mb-2">{info.title}</h3>
                {info.link ? (
                  <a
                    href={info.link}
                    target={info.link.startsWith('http') ? '_blank' : undefined}
                    rel={info.link.startsWith('http') ? 'noopener noreferrer' : undefined}
                    className="text-foreground/70 text-sm whitespace-pre-line hover:text-accent transition-colors"
                  >
                    {info.content}
                  </a>
                ) : (
                  <p className="text-foreground/70 text-sm whitespace-pre-line">{info.content}</p>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Map and Form Section */}
      <section className="py-12">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Map */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative rounded-2xl overflow-hidden shadow-dental-lg h-[400px] lg:h-full min-h-[400px]"
            >
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3037.2232373454553!2d-3.7057902!3d40.4206991!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd42287b8b3c3fff%3A0xcd92b1dc5e1a0b8f!2sGran%20V%C3%ADa%2C%2028%2C%2028013%20Madrid!5e0!3m2!1ses!2ses!4v1699999999999"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Ubicación de DentalCare"
              />
            </motion.div>

            {/* Form */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <div className="bg-white rounded-2xl p-8 shadow-dental">
                <h2 className="font-heading text-2xl font-bold text-navy mb-2">
                  Solicite Su Cita
                </h2>
                <p className="text-foreground/70 mb-6">
                  Complete el formulario y nos pondremos en contacto con usted en menos de 24 horas.
                </p>
                
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-foreground mb-2">
                        Nombre completo *
                      </label>
                      <Input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="Su nombre"
                        required
                        className="bg-background border-border focus:border-accent"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-foreground mb-2">
                        Teléfono *
                      </label>
                      <Input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        placeholder="+34 600 000 000"
                        required
                        className="bg-background border-border focus:border-accent"
                      />
                    </div>
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      Email *
                    </label>
                    <Input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="su@email.com"
                      required
                      className="bg-background border-border focus:border-accent"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      ¿Qué servicio le interesa?
                    </label>
                    <select
                      name="service"
                      value={formData.service}
                      onChange={handleChange}
                      className="w-full h-10 px-3 rounded-md border border-border bg-background text-foreground focus:border-accent focus:outline-none focus:ring-2 focus:ring-accent/20"
                    >
                      <option value="">Seleccione un servicio</option>
                      <option value="ortodoncia">Ortodoncia</option>
                      <option value="implantes">Implantes Dentales</option>
                      <option value="estetica">Estética Dental</option>
                      <option value="endodoncia">Endodoncia</option>
                      <option value="periodoncia">Periodoncia</option>
                      <option value="odontopediatria">Odontopediatría</option>
                      <option value="revision">Revisión General</option>
                      <option value="otro">Otro</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      Mensaje
                    </label>
                    <Textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Cuéntenos en qué podemos ayudarle..."
                      rows={4}
                      className="bg-background border-border focus:border-accent resize-none"
                    />
                  </div>

                  <Button
                    type="submit"
                    variant="cta"
                    size="lg"
                    className="w-full"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? (
                      'Enviando...'
                    ) : (
                      <>
                        <Send className="w-4 h-4 mr-2" />
                        Enviar Solicitud
                      </>
                    )}
                  </Button>

                  <p className="text-xs text-foreground/60 text-center">
                    Al enviar este formulario, acepta nuestra{' '}
                    <a href="#" className="text-accent hover:underline">política de privacidad</a>.
                  </p>
                </form>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center max-w-2xl mx-auto mb-12"
          >
            <span className="inline-block text-accent font-semibold text-sm uppercase tracking-wider mb-4">
              FAQ
            </span>
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-navy mb-6">
              Preguntas Frecuentes
            </h2>
          </motion.div>

          <div className="max-w-3xl mx-auto grid gap-4">
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-background rounded-xl p-6 border border-border"
              >
                <div className="flex items-start gap-4">
                  <div className="w-6 h-6 rounded-full bg-accent/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <CheckCircle className="w-4 h-4 text-accent" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-navy mb-2">{faq.question}</h3>
                    <p className="text-foreground/70 text-sm">{faq.answer}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default Contacto;
