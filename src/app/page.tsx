import { HeroSection } from "@/components/home/HeroSection";
import AboutSection from "@/components/home/AboutSection";
import { DressesSection } from "@/components/home/DressesSection";
import { StepsSection } from "@/components/home/StepsSection";
import CTASection from "@/components/home/CTASection";
import Footer from "@/components/ui/Footer";

export default function HomePage() {
  return (
    <div>
      <HeroSection />
      <AboutSection />
      <DressesSection />
      <StepsSection />
      <CTASection />
      <Footer />
    </div>
  );
}