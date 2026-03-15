import { motion } from "framer-motion";
import barImg from "@/assets/bar.jpg";

const transition = { type: "spring" as const, duration: 0.4, bounce: 0 };

const items = [
  {
    title: "THE GOLD",
    description: "Pilsner Urquell z tanku. Chlazený tak, jak má být.",
    icon: "🍺",
  },
  {
    title: "THE SPIRIT",
    description: "Ruční koktejly pro dlouhé noci. Rum, mezcal, klasika.",
    icon: "🍹",
  },
  {
    title: "THE PLAY",
    description: "Šipky, stolní fotbálek a nejlepší sound systém na bloku.",
    icon: "🎯",
  },
];

const BarSection = () => {
  return (
    <section id="bar" className="border-b border-border">
      <div className="grid md:grid-cols-2">
        {/* Image */}
        <div className="relative h-[50vh] md:h-auto overflow-hidden border-b md:border-b-0 md:border-r border-border">
          <img src={barImg} alt="Bar Kiki Ward" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-background/30" />
        </div>

        {/* Content */}
        <div className="py-24 px-6 md:px-12">
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={transition}
          >
            <h2 className="font-display text-[8vw] md:text-[4vw] leading-[0.85] uppercase tracking-tight text-foreground">
              U BARU
            </h2>

            <div className="mt-12 space-y-8">
              {items.map((item) => (
                <div key={item.title} className="border-b border-border pb-8 last:border-b-0">
                  <div className="flex items-start gap-4">
                    <span className="text-2xl">{item.icon}</span>
                    <div>
                      <h3 className="font-display text-2xl tracking-wider text-accent">
                        {item.title}
                      </h3>
                      <p className="font-body text-muted-foreground mt-1 leading-relaxed">
                        {item.description}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default BarSection;
