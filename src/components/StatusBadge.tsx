import { useMemo } from "react";

const StatusBadge = () => {
  const { isOpen, closingTime } = useMemo(() => {
    const now = new Date();
    const day = now.getDay(); // 0=Sun
    const hours = now.getHours();
    const minutes = now.getMinutes();
    const currentMinutes = hours * 60 + minutes;

    // Opening: 11:00 every day
    const openMinutes = 11 * 60;

    // Closing times (in minutes from midnight, can exceed 24h for next-day closing)
    // Mon-Thu: 02:00 (26h), Fri-Sat: 03:00 (27h), Sun: 01:00 (25h)
    let closeMinutes: number;
    if (day >= 1 && day <= 4) closeMinutes = 26 * 60; // Mon-Thu
    else if (day === 5 || day === 6) closeMinutes = 27 * 60; // Fri-Sat
    else closeMinutes = 25 * 60; // Sun

    const adjustedCurrent = currentMinutes < openMinutes ? currentMinutes + 24 * 60 : currentMinutes;
    const open = adjustedCurrent >= openMinutes && adjustedCurrent < closeMinutes;

    const closeHour = (closeMinutes / 60) % 24;
    const closing = `${String(Math.floor(closeHour)).padStart(2, "0")}:00`;

    return { isOpen: open, closingTime: closing };
  }, []);

  return (
    <div
      className={`inline-flex items-center gap-2 px-3 py-1.5 rounded-full border text-sm font-body tracking-wide ${
        isOpen
          ? "bg-accent-green/10 text-accent-green border-accent-green/20"
          : "bg-primary/10 text-primary border-primary/20"
      }`}
    >
      <span className={`w-2 h-2 rounded-full bg-current ${isOpen ? "animate-pulse" : ""}`} />
      {isOpen ? `OTEVŘENO DO ${closingTime}` : "ZAVŘENO"}
    </div>
  );
};

export default StatusBadge;
