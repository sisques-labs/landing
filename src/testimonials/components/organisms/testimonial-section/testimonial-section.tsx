import { SectionTemplate } from "@/src/shared/components/templates/section-template";
import { TestimonialCarrousel } from "@/src/testimonials/components/organisms/testimonial-carrousel/testimonial-carrousel";
import { useTestimonials } from "@/src/testimonials/hooks/use-testimonials";

export const TestimonialSection = () => {
  const testimonials = useTestimonials();
  return (
    <SectionTemplate id="testimonials">
      <h2 className="text-4xl font-bold">Testimonials</h2>
      <TestimonialCarrousel testimonials={testimonials} />
    </SectionTemplate>
  );
};
