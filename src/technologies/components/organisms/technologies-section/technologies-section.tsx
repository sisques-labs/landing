import { BlurFade } from "@/components/ui/blur-fade";
import { Marquee } from "@/components/ui/marquee";
import { cn } from "@/lib/utils";
import { SectionTemplate } from "@/src/shared/components/templates/section-template";
import { useTechnologies } from "@/src/technologies/hooks/use-technologies";
import { useTranslations } from "next-intl";

const TechnologyCard = ({ name, icon }: { name: string; icon: string }) => {
  return (
    <div
      className={cn(
        "relative h-36 w-36 cursor-pointer overflow-hidden rounded-2xl border p-6",
        "bg-background/50 backdrop-blur-sm",
        "border-border hover:border-primary/50",
        "shadow-sm hover:shadow-lg",
        "flex flex-col items-center justify-center gap-3",
        "transition-all duration-300 hover:scale-110 hover:-translate-y-1",
        "group"
      )}
    >
      <div className="text-5xl group-hover:scale-110 transition-transform duration-300">
        {icon}
      </div>
      <div className="text-sm font-semibold text-center">{name}</div>
      <div className="absolute inset-0 bg-gradient-to-br from-primary/0 to-primary/0 group-hover:from-primary/10 group-hover:to-transparent transition-all duration-300 rounded-2xl" />
    </div>
  );
};

export const TechnologiesSection = () => {
  const t = useTranslations("LandingPage.TechnologiesSection");
  const technologies = useTechnologies();

  return (
    <SectionTemplate id="technologies" className="bg-muted/30">
      <div className="w-full max-w-7xl mx-auto px-4 space-y-16">
        <BlurFade delay={0.1}>
          <div className="text-center space-y-4">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold">
              {t("title")}
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              {t("description")}
            </p>
          </div>
        </BlurFade>

        <BlurFade delay={0.2}>
          <div className="relative flex w-full flex-col items-center justify-center overflow-hidden">
            <Marquee pauseOnHover className="[--duration:40s]">
              {technologies.map((tech) => (
                <TechnologyCard
                  key={tech.name}
                  name={tech.name}
                  icon={tech.icon}
                />
              ))}
            </Marquee>
            <Marquee reverse pauseOnHover className="[--duration:40s]">
              {technologies.map((tech) => (
                <TechnologyCard
                  key={tech.name}
                  name={tech.name}
                  icon={tech.icon}
                />
              ))}
            </Marquee>
            <div className="from-background pointer-events-none absolute inset-y-0 left-0 w-1/4 bg-linear-to-r"></div>
            <div className="from-background pointer-events-none absolute inset-y-0 right-0 w-1/4 bg-linear-to-l"></div>
          </div>
        </BlurFade>
      </div>
    </SectionTemplate>
  );
};
