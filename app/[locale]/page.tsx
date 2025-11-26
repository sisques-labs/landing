import { ScrollProgress } from "@/components/ui/scroll-progress";
import { ContactSection } from "@/src/contact/components/organisms/contact-section/contact-section";
import { HeroSection } from "@/src/hero/components/organisms/hero-section/hero-section";
import { PortfolioSection } from "@/src/portfolio/components/organisms/portfolio-section/portfolio-section";
import { ServicesSection } from "@/src/services/components/organisms/services-section/services-section";
import { TechnologiesSection } from "@/src/technologies/components/organisms/technologies-section/technologies-section";
import { TestimonialSection } from "@/src/testimonials/components/organisms/testimonial-section/testimonial-section";
import { WorkProcessSection } from "@/src/work-process/components/organisms/work-process/work-process-section";

export default function Home() {
  return (
    <main>
      <ScrollProgress
        className="top-[65px]"
        fromColor="#3b82f6"
        viaColor="#60a5fa"
        toColor="#93c5fd"
      />
      <HeroSection />
      <ServicesSection />
      <PortfolioSection />
      <WorkProcessSection />
      <TechnologiesSection />
      <TestimonialSection />
      <ContactSection />
    </main>
  );
}
