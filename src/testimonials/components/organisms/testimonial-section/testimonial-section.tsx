import { SectionTemplate } from "@/src/shared/components/templates/section-template";
import { TestimonialCarrousel } from "@/src/testimonials/components/organisms/testimonial-carrousel/testimonial-carrousel";
import { useTestimonials } from "@/src/testimonials/hooks/use-testimonials";
import { useTranslations } from "next-intl";

export const TestimonialSection = () => {
  const t = useTranslations("LandingPage.TestimonialSection");
  const testimonials = useTestimonials();
  return (
    <SectionTemplate id="testimonials">
      <h2 className="text-4xl font-bold">{t("title")}</h2>
      <TestimonialCarrousel testimonials={testimonials} />
    </SectionTemplate>
  );
};
