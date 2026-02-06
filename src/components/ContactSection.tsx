import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import { MapPin, Phone, Mail, Clock, Send } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { toast } from 'sonner';

export const ContactSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      toast.success('¡Mensaje enviado!', {
        description: 'Nos pondremos en contacto contigo pronto.',
      });
    }, 1500);
  };

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
            Contacto
          </span>
          <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-navy mb-6">
            ¿Listo Para Tu Nueva Sonrisa?
          </h2>
          <p className="text-foreground/70">
            Contáctanos para programar tu cita o resolver cualquier duda. 
            Estamos aquí para ayudarte.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
          {/* Map */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
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
              title="Ubicación de la clínica"
            />
          </motion.div>

          {/* Contact Form & Info */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            {/* Form */}
            <form onSubmit={handleSubmit} className="space-y-6 mb-10">
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    Nombre completo
                  </label>
                  <Input
                    type="text"
                    placeholder="Tu nombre"
                    required
                    className="bg-white border-border focus:border-accent"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    Teléfono
                  </label>
                  <Input
                    type="tel"
                    placeholder="+34 600 000 000"
                    required
                    className="bg-white border-border focus:border-accent"
                  />
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium text-foreground mb-2">
                  Email
                </label>
                <Input
                  type="email"
                  placeholder="tu@email.com"
                  required
                  className="bg-white border-border focus:border-accent"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-foreground mb-2">
                  Mensaje
                </label>
                <Textarea
                  placeholder="Cuéntanos en qué podemos ayudarte..."
                  rows={4}
                  className="bg-white border-border focus:border-accent resize-none"
                />
              </div>
              <Button
                type="submit"
                variant="cta"
                size="lg"
                className="w-full sm:w-auto"
                disabled={isSubmitting}
              >
                {isSubmitting ? (
                  'Enviando...'
                ) : (
                  <>
                    <Send className="w-4 h-4 mr-2" />
                    Enviar Consulta
                  </>
                )}
              </Button>
            </form>

            {/* Contact Info */}
            <div className="grid sm:grid-cols-2 gap-6">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-5 h-5 text-accent" />
                </div>
                <div>
                  <h4 className="font-semibold text-navy mb-1">Dirección</h4>
                  <p className="text-foreground/70 text-sm">
                    Calle Gran Vía, 28<br />
                    28013 Madrid, España
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center flex-shrink-0">
                  <Phone className="w-5 h-5 text-accent" />
                </div>
                <div>
                  <h4 className="font-semibold text-navy mb-1">Teléfono</h4>
                  <a
                    href="tel:+34912345678"
                    className="text-foreground/70 text-sm hover:text-accent transition-colors"
                  >
                    +34 912 345 678
                  </a>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center flex-shrink-0">
                  <Mail className="w-5 h-5 text-accent" />
                </div>
                <div>
                  <h4 className="font-semibold text-navy mb-1">Email</h4>
                  <a
                    href="mailto:info@dentalcare.es"
                    className="text-foreground/70 text-sm hover:text-accent transition-colors"
                  >
                    info@dentalcare.es
                  </a>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center flex-shrink-0">
                  <Clock className="w-5 h-5 text-accent" />
                </div>
                <div>
                  <h4 className="font-semibold text-navy mb-1">Horario</h4>
                  <p className="text-foreground/70 text-sm">
                    Lun - Vie: 9:00 - 20:00<br />
                    Sábados: 10:00 - 14:00
                  </p>
                </div>
              </div>
            </div>

            {/* Full Contact Page Link */}
            <div className="mt-8 pt-6 border-t border-border">
              <Link
                to="/contacto"
                className="inline-flex items-center gap-2 text-primary font-semibold hover:text-accent transition-colors"
              >
                Ir a página de contacto completa
              </Link>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
