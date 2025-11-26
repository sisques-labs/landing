import { BentoCard, BentoGrid } from "@/components/ui/bento-grid";
import { BlurFade } from "@/components/ui/blur-fade";
import { SectionTemplate } from "@/src/shared/components/templates/section-template";
import { useWorkProcess } from "@/src/work-process/hooks/use-work-process";
import { useTranslations } from "next-intl";
import { cn } from "@/lib/utils";

export const WorkProcessSection = () => {
  const t = useTranslations("LandingPage.WorkProcessSection");
  const workProcessItems = useWorkProcess();

  return (
    <SectionTemplate id="work-process">
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
          <BentoGrid className="md:grid-cols-3">
            {workProcessItems.map((item, index) => (
              <div key={item.name} className="relative">
                {/* Step number */}
                <div
                  className={cn(
                    "absolute -top-4 -left-4 z-10 w-12 h-12 rounded-full",
                    "flex items-center justify-center text-xl font-bold",
                    "bg-primary text-primary-foreground",
                    "shadow-lg border-4 border-background"
                  )}
                >
                  {index + 1}
                </div>
                <BentoCard
                  name={item.name}
                  description={item.description}
                  href={item.href}
                  cta={t("learnMore")}
                  Icon={item.Icon}
                  className={cn(item.className, "pt-6")}
                  background={item.background}
                />
              </div>
            ))}
          </BentoGrid>
        </BlurFade>
      </div>
    </SectionTemplate>
  );
};
