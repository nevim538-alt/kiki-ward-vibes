import { motion } from "framer-motion";

const transition = { type: "spring" as const, duration: 0.4, bounce: 0 };

const hours = [
  { day: "Pondělí – Čtvrtek", time: "11:00 – 02:00" },
  { day: "Pátek – Sobota", time: "11:00 – 03:00" },
  { day: "Neděle", time: "11:00 – 01:00" },
];

const HoursSection = () => {
  return (
    <section id="hours" className="border-b border-border py-24 px-6 md:px-12">
      <motion.div
        initial={{ y: 20, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={transition}
        className="max-w-xl"
      >
        <h2 className="font-display text-[8vw] md:text-[4vw] leading-[0.85] uppercase tracking-tight text-foreground">
          OTEVÍRACÍ DOBA
        </h2>

        <div className="mt-12 space-y-0">
          {hours.map((h) => (
            <div
              key={h.day}
              className="flex justify-between items-baseline py-4 border-b border-border"
            >
              <span className="font-body text-foreground">{h.day}</span>
              <span className="font-body tabular-nums text-accent font-semibold tracking-wider">
                {h.time}
              </span>
            </div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default HoursSection;
