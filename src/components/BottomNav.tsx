import { MapPin, Phone } from "lucide-react";

const BottomNav = () => {
  return (
    <nav className="fixed bottom-0 left-0 right-0 z-50 md:hidden bg-background/95 backdrop-blur-sm border-t border-border">
      <div className="flex">
        <a
          href="https://maps.google.com/?q=Kiki+Ward+Music+Club"
          target="_blank"
          rel="noopener noreferrer"
          className="flex-1 flex items-center justify-center gap-2 py-4 font-body text-sm font-semibold text-foreground hover:text-primary transition-colors border-r border-border"
        >
          <MapPin className="w-4 h-4" />
          MAPA
        </a>
        <a
          href="tel:+420776640143"
          className="flex-1 flex items-center justify-center gap-2 py-4 font-body text-sm font-semibold text-foreground hover:text-primary transition-colors"
        >
          <Phone className="w-4 h-4" />
          VOLAT
        </a>
      </div>
    </nav>
  );
};

export default BottomNav;
