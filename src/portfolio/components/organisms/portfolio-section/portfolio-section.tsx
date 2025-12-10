import { BentoCard, BentoGrid } from "@/components/ui/bento-grid";
import { BlurFade } from "@/components/ui/blur-fade";
import { usePortfolio } from "@/src/portfolio/hooks/use-portfolio";
import { SectionTemplate } from "@/src/shared/components/templates/section-template";
import { useTranslations } from "next-intl";
import Image from "next/image";
import { cn } from "@/lib/utils";

export const PortfolioSection = () => {
  const t = useTranslations("LandingPage.PortfolioSection");
  const portfolioItems = usePortfolio();

  return (
    <SectionTemplate id="portfolio" className="bg-muted/30">
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
          <BentoGrid className="md:grid-cols-3 lg:grid-cols-3">
            {portfolioItems.map((item, index) => {
              return (
                <BentoCard
                  key={item.id}
                  name={item.title}
                  description={item.description}
                  href={item.href}
                  cta={t("viewProject")}
                  emoji={item.emoji}
                  className="col-span-3 md:col-span-1"
                  background={
                    <div className="absolute inset-0 overflow-hidden">
                      <Image
                        src={item.image}
                        alt={item.title}
                        fill
                        className="object-cover opacity-20 dark:opacity-30 group-hover:opacity-30 dark:group-hover:opacity-40 transition-opacity duration-500"
                      />
                      <div className="absolute inset-0 bg-white/40 dark:bg-transparent" />
                      <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-primary/5 to-transparent group-hover:from-primary/30 transition-all duration-500" />
                    </div>
                  }
                />
              );
            })}
          </BentoGrid>
        </BlurFade>

        {/* Technology badges */}
        <BlurFade delay={0.3}>
          <div className="flex flex-wrap gap-2 justify-center">
            {portfolioItems.flatMap((item) => item.technologies).slice(0, 6).map((tech, idx) => (
              <span
                key={idx}
                className={cn(
                  "px-3 py-1 rounded-full text-xs font-medium",
                  "bg-primary/10 text-primary border border-primary/20",
                  "hover:bg-primary/20 transition-colors"
                )}
              >
                {tech}
              </span>
            ))}
          </div>
        </BlurFade>
      </div>
    </SectionTemplate>
  );
};

