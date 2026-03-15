import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import BarSection from "@/components/BarSection";
import ArtSection from "@/components/ArtSection";
import HoursSection from "@/components/HoursSection";
import ContactSection from "@/components/ContactSection";
import BottomNav from "@/components/BottomNav";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <HeroSection />
      <AboutSection />
      <BarSection />
      <ArtSection />
      <HoursSection />
      <ContactSection />
      <Footer />
      <BottomNav />
    </div>
  );
};

export default Index;
