import { BlurFade } from "@/components/ui/blur-fade";
import { Marquee } from "@/components/ui/marquee";
import { cn } from "@/lib/utils";
import { Testimonial } from "@/src/testimonials/types/testimonial.type";
import { Star } from "lucide-react";
import Image from "next/image";

const TestimonialCard = ({
  img,
  name,
  username,
  body,
  role,
  company,
  rating = 5,
}: Testimonial) => {
  return (
    <BlurFade delay={0.1}>
      <figure
        className={cn(
          "relative h-full w-80 cursor-pointer overflow-hidden rounded-2xl border p-6",
          "bg-background/50 backdrop-blur-sm",
          "border-border hover:border-primary/50",
          "shadow-lg hover:shadow-xl",
          "transition-all duration-300 hover:scale-105 hover:-translate-y-1",
          "group"
        )}
      >
        {/* Rating stars */}
        <div className="flex gap-1 mb-4">
          {Array.from({ length: rating }).map((_, i) => (
            <Star
              key={i}
              className="h-4 w-4 fill-yellow-400 text-yellow-400"
            />
          ))}
        </div>

        {/* Quote */}
        <blockquote className="text-sm md:text-base text-foreground/90 mb-6 line-clamp-4 group-hover:text-foreground transition-colors">
          "{body}"
        </blockquote>

        {/* Author info */}
        <div className="flex flex-row items-center gap-3 pt-4 border-t border-border">
          <div className="relative">
            <Image
              className="rounded-full ring-2 ring-primary/20 group-hover:ring-primary/40 transition-all"
              width="48"
              height="48"
              alt={name}
              src={img}
            />
            <div className="absolute inset-0 rounded-full bg-primary/0 group-hover:bg-primary/10 transition-colors" />
          </div>
          <div className="flex flex-col flex-1 min-w-0">
            <figcaption className="text-sm font-semibold text-foreground truncate">
              {name}
            </figcaption>
            {role && company ? (
              <p className="text-xs text-muted-foreground truncate">
                {role} at {company}
              </p>
            ) : (
              <p className="text-xs text-muted-foreground truncate">
                {username}
              </p>
            )}
          </div>
        </div>

        {/* Decorative gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-primary/0 to-primary/0 group-hover:from-primary/5 group-hover:to-transparent transition-all duration-300 rounded-2xl pointer-events-none" />
      </figure>
    </BlurFade>
  );
};

export function TestimonialCarrousel({
  testimonials,
}: {
  testimonials: Testimonial[];
}) {
  return (
    <div className="relative flex w-full flex-col items-center justify-center overflow-hidden py-8">
      <Marquee pauseOnHover className="[--duration:40s] [--gap:1.5rem]">
        {testimonials.map((testimonial, index) => (
          <TestimonialCard
            key={`${testimonial.username}-${index}`}
            {...testimonial}
          />
        ))}
      </Marquee>
      <Marquee reverse pauseOnHover className="[--duration:40s] [--gap:1.5rem]">
        {testimonials.map((testimonial, index) => (
          <TestimonialCard
            key={`${testimonial.username}-reverse-${index}`}
            {...testimonial}
          />
        ))}
      </Marquee>
      <div className="from-background pointer-events-none absolute inset-y-0 left-0 w-1/4 bg-linear-to-r"></div>
      <div className="from-background pointer-events-none absolute inset-y-0 right-0 w-1/4 bg-linear-to-l"></div>
    </div>
  );
}
