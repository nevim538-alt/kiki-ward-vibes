import { motion } from "framer-motion";
import StatusBadge from "./StatusBadge";
import heroBg from "@/assets/hero-bg.jpg";

const transition = { type: "spring" as const, duration: 0.4, bounce: 0 };

const HeroSection = () => {
  return (
    <section className="relative min-h-svh flex flex-col justify-end border-b border-border overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <img src={heroBg} alt="Kiki Ward Music Club interiér" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/80 to-background/30" />
      </div>

      {/* Content */}
      <div className="relative z-10 p-6 md:p-12">
        <motion.h1
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ ...transition, delay: 0.1 }}
          className="font-display text-[15vw] md:text-[10vw] leading-[0.85] uppercase tracking-tighter text-foreground"
        >
          KIKI<br />WARD
        </motion.h1>

        <motion.p
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ ...transition, delay: 0.25 }}
          className="font-display text-[5vw] md:text-[2.5vw] text-primary tracking-wider mt-2"
        >
          REGGAE · AFRO · ŽIŽKOV
        </motion.p>

        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ ...transition, delay: 0.4 }}
          className="flex flex-col sm:flex-row justify-between items-start sm:items-end mt-8 md:mt-12 gap-6"
        >
          <p className="max-w-[34ch] font-body text-lg text-muted-foreground leading-relaxed">
            Hudba, dobré drinky a přátelská atmosféra v jednom z nejautentičtějších barů pražského Žižkova.
Kiki Ward je místo, kde se potkává reggae, afro rytmy, DJs, živá hudba a lidé z celého světa. <br />
Přijď na drink, poslechni si hudbu a zažij noc, která má rytmus.
          </p>
          <StatusBadge />
        </motion.div>

        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ ...transition, delay: 0.55 }}
          className="flex gap-4 mt-8 pb-4"
        >
          <a
            href="https://maps.google.com/?q=Kiki+Ward+Music+Club"
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-3 bg-primary text-primary-foreground font-body font-semibold text-sm tracking-wide hover:bg-primary/90 transition-colors duration-200"
          >
            NAVIGOVAT
          </a>
          <a
            href="#events"
            className="px-6 py-3 border border-foreground/20 text-foreground font-body font-semibold text-sm tracking-wide hover:bg-foreground/5 transition-colors duration-200"
          >
            DNES VEČER
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
