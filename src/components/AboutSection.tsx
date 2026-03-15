import { motion } from "framer-motion";

const transition = { type: "spring" as const, duration: 0.4, bounce: 0 };

const AboutSection = () => {
  return (
    <section id="about" className="border-b border-border py-24 px-6 md:px-12">
      <motion.div
        initial={{ y: 20, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={transition}
      >
        <h2 className="font-display text-[8vw] md:text-[4vw] leading-[0.85] uppercase tracking-tight text-foreground">
          DUŠE ŽIŽKOVA
        </h2>
        <div className="mt-8 max-w-2xl">
          <p className="font-body text-lg leading-relaxed text-muted-foreground">
            Neděláme „vyšperkované." Děláme to skutečné. Kiki Ward je útočiště pro bohémy,
            noční tvory a hledače rytmu. Od prvního Plzně v 11:00 po poslední afrobeat
            track ve 3:00 ráno — tady Žižkov dýchá.
          </p>
          <p className="font-body text-lg leading-relaxed text-muted-foreground mt-6">
            Není to bar, který najdete. Je to bar, kam patříte.
          </p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-3 gap-px mt-16 border border-border">
          {[
            { value: "4.3", label: "Hodnocení" },
            { value: "1000+", label: "Nocí" },
            { value: "∞", label: "Vibes" },
          ].map((stat) => (
            <div key={stat.label} className="p-6 md:p-8 border-r border-border last:border-r-0 text-center">
              <span className="font-display text-4xl md:text-5xl text-accent tabular-nums">
                {stat.value}
              </span>
              <span className="block font-body text-sm text-muted-foreground mt-2 uppercase tracking-wider">
                {stat.label}
              </span>
            </div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default AboutSection;
