import { BlurFade } from "@/components/ui/blur-fade";
import { SectionTemplate } from "@/src/shared/components/templates/section-template";
import { useWorkProcess } from "@/src/work-process/hooks/use-work-process";
import { useTranslations } from "next-intl";
import { cn } from "@/lib/utils";

export const WorkProcessSection = () => {
  const t = useTranslations("LandingPage.WorkProcessSection");
  const workProcessItems = useWorkProcess();
  
  const stepKeys = ["discovery", "design", "development", "launch"] as const;

  return (
    <SectionTemplate id="work-process" className="bg-muted/30">
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 space-y-12 sm:space-y-16">
        <BlurFade delay={0.1}>
          <div className="text-center space-y-3 sm:space-y-4">
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold">
              {t("title")}
            </h2>
            <p className="text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto px-4 sm:px-0">
              {t("description")}
            </p>
          </div>
        </BlurFade>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {workProcessItems.map((item, index) => {
            const Icon = item.Icon;
            const stepKey = stepKeys[index];
            return (
              <BlurFade key={item.name} delay={0.1 + index * 0.1}>
                <div
                  className={cn(
                    "group relative h-full rounded-2xl border p-6 sm:p-8",
                    "bg-background/50 backdrop-blur-sm",
                    "border-border hover:border-primary/50",
                    "shadow-lg hover:shadow-xl",
                    "transition-all duration-300 hover:scale-105 hover:-translate-y-1",
                    "flex flex-col"
                  )}
                >
                  {/* Step number */}
                  <div
                    className={cn(
                      "absolute -top-3 -left-3 z-10 w-10 h-10 sm:w-12 sm:h-12 rounded-full",
                      "flex items-center justify-center text-lg sm:text-xl font-bold",
                      "bg-primary text-primary-foreground",
                      "shadow-lg border-2 sm:border-4 border-background"
                    )}
                  >
                    {index + 1}
                  </div>

                  {/* Gradient background */}
                  <div
                    className={cn(
                      "absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300",
                      index === 0 && "bg-linear-to-br from-blue-500/20 to-purple-500/20",
                      index === 1 && "bg-linear-to-br from-pink-500/20 to-red-500/20",
                      index === 2 && "bg-linear-to-br from-green-500/20 to-emerald-500/20",
                      index === 3 && "bg-linear-to-br from-orange-500/20 to-yellow-500/20"
                    )}
                  />

                  {/* Content */}
                  <div className="relative z-10 flex flex-col h-full">
                    {/* Icon */}
                    <div className="mb-4 sm:mb-6">
                      <div className="inline-flex items-center justify-center w-12 h-12 sm:w-14 sm:h-14 rounded-xl bg-primary/10 group-hover:bg-primary/20 transition-colors">
                        <Icon className="h-6 w-6 sm:h-7 sm:w-7 text-primary" />
                      </div>
                    </div>

                    {/* Title */}
                    <h3 className="text-lg sm:text-xl font-bold mb-2 sm:mb-3 group-hover:text-primary transition-colors">
                      {t(`steps.${stepKey}.name`)}
                    </h3>

                    {/* Description */}
                    <p className="text-sm sm:text-base text-muted-foreground flex-grow leading-relaxed">
                      {t(`steps.${stepKey}.description`)}
                    </p>
                  </div>
                </div>
              </BlurFade>
            );
          })}
        </div>
      </div>
    </SectionTemplate>
  );
};
