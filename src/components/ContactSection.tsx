import { motion } from "framer-motion";

const transition = { type: "spring" as const, duration: 0.4, bounce: 0 };

const ContactSection = () => {
  return (
    <section id="contact" className="border-b border-border">
      {/* Map */}
      <div className="relative h-[50vh] border-b border-border overflow-hidden">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2559.5!2d14.4505!3d50.0865!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x470b94a06be97b3d%3A0x2e6a0db7c3fba42a!2sRokycanova%20218%2C%20130%2000%20Praha%203-%C5%BDi%C5%BEkov!5e0!3m2!1scs!2scz!4v1"
          className="w-full h-full border-0 grayscale invert opacity-80"
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title="Kiki Ward Music Club mapa"
        />
        <div className="absolute inset-0 pointer-events-none flex items-center justify-center">
          <span className="font-display text-[8vw] md:text-[5vw] text-foreground/10 uppercase tracking-tighter select-none">
            ROKYCANOVA 218
          </span>
        </div>
      </div>

      {/* Contact Info */}
      <div className="py-24 px-6 md:px-12">
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={transition}
          className="grid md:grid-cols-2 gap-12"
        >
          <div>
            <h2 className="font-display text-[8vw] md:text-[4vw] leading-[0.85] uppercase tracking-tight text-foreground">
              NAJDI NÁS
            </h2>
            <div className="mt-8 space-y-4 font-body text-muted-foreground">
              <p>Rokycanova 218 / Prokopova 218/1</p>
              <p>Praha 3 – Žižkov, 130 00</p>
              <p>Česká republika</p>
            </div>
          </div>

          <div className="space-y-6">
            <a
              href="tel:+420776640143"
              className="block font-body text-foreground hover:text-primary transition-colors duration-200"
            >
              +420 776 640 143
            </a>
            <a
              href="mailto:kikiward21@gmail.com"
              className="block font-body text-foreground hover:text-primary transition-colors duration-200"
            >
              kikiward21@gmail.com
            </a>
            <div className="flex gap-4 pt-4">
              <a
                href="https://maps.google.com/?q=Rokycanova+218+Praha+3"
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3 bg-primary text-primary-foreground font-body font-semibold text-sm tracking-wide hover:bg-primary/90 transition-colors duration-200"
              >
                GOOGLE MAPS
              </a>
              <a
                href="tel:+420776640143"
                className="px-6 py-3 border border-foreground/20 text-foreground font-body font-semibold text-sm tracking-wide hover:bg-foreground/5 transition-colors duration-200"
              >
                ZAVOLAT
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ContactSection;
