import { TestimonialSection } from "@/src/testimonials/components/organisms/testimonial-section/testimonial-section";

export default function Home() {
  return (
    <main>
      <section
        id="hero"
        className="flex flex-col items-center justify-center h-screen"
      >
        <h1 className="text-4xl font-bold">Hello World</h1>
      </section>
      <section
        id="portfolio"
        className="flex flex-col items-center justify-center h-screen"
      >
        <h2 className="text-4xl font-bold">Portfolio</h2>
      </section>
      <section
        id="work-process"
        className="flex flex-col items-center justify-center h-screen"
      >
        <h2 className="text-4xl font-bold">Work Process</h2>
      </section>

      <section
        id="technologies"
        className="flex flex-col items-center justify-center h-screen"
      >
        <h2 className="text-4xl font-bold">Technologies</h2>
      </section>
      <TestimonialSection />
      <section
        id="contact"
        className="flex flex-col items-center justify-center h-screen"
      >
        <h2 className="text-4xl font-bold">Contact</h2>
      </section>
    </main>
  );
}
