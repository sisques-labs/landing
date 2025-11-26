import { BlurFade } from "@/components/ui/blur-fade";
import { SectionTemplate } from "@/src/shared/components/templates/section-template";
import { TestimonialCarrousel } from "@/src/testimonials/components/organisms/testimonial-carrousel/testimonial-carrousel";
import { useTestimonials } from "@/src/testimonials/hooks/use-testimonials";
import { useTranslations } from "next-intl";
import { Quote } from "lucide-react";

export const TestimonialSection = () => {
  const t = useTranslations("LandingPage.TestimonialSection");
  const testimonials = useTestimonials();

  return (
    <SectionTemplate id="testimonials" className="bg-muted/30">
      <div className="w-full max-w-7xl mx-auto px-4 space-y-16">
        <BlurFade delay={0.1}>
          <div className="text-center space-y-4">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 mb-4">
              <Quote className="h-8 w-8 text-primary" />
            </div>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold">
              {t("title")}
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              {t("description")}
            </p>
          </div>
        </BlurFade>

        <BlurFade delay={0.2}>
          <TestimonialCarrousel testimonials={testimonials} />
        </BlurFade>
      </div>
    </SectionTemplate>
  );
};
