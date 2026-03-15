import { motion } from "framer-motion";
import muralImg from "@/assets/mural.jpg";

const transition = { type: "spring", duration: 0.4, bounce: 0 };

const ArtSection = () => {
  return (
    <section id="art" className="border-b border-border py-24 px-6 md:px-12">
      <motion.div
        initial={{ y: 20, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={transition}
      >
        <h2 className="font-display text-[8vw] md:text-[4vw] leading-[0.85] uppercase tracking-tight text-foreground">
          NÁSTĚNNÉ MALBY<br />
          <span className="text-primary">MILADY TYLER</span>
        </h2>

        <p className="font-body text-lg text-muted-foreground leading-relaxed mt-8 max-w-2xl">
          Naše stěny vyprávějí příběhy. Ikonické nástěnné malby od Milady Tyler
          proměňují interiér v živé plátno, které se vyvíjí spolu s komunitou.
          Je to umění, které cítíte.
        </p>
      </motion.div>

      <motion.div
        initial={{ y: 20, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ ...transition, delay: 0.15 }}
        className="mt-12 overflow-hidden"
      >
        <img
          src={muralImg}
          alt="Nástěnná malba od Milady Tyler v Kiki Ward"
          className="w-full h-[50vh] md:h-[70vh] object-cover grayscale hover:grayscale-0 transition-all duration-700"
        />
      </motion.div>
    </section>
  );
};

export default ArtSection;
