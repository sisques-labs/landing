import { BlurFade } from "@/components/ui/blur-fade";
import { SectionTemplate } from "@/src/shared/components/templates/section-template";
import { useServices } from "@/src/services/hooks/use-services";
import { useTranslations } from "next-intl";
import { cn } from "@/lib/utils";
import { Check } from "lucide-react";

export const ServicesSection = () => {
  const t = useTranslations("LandingPage.ServicesSection");
  const services = useServices();

  return (
    <SectionTemplate id="services">
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

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <BlurFade key={service.id} delay={0.1 + index * 0.1}>
                <div
                  className={cn(
                    "group relative h-full rounded-2xl border p-6",
                    "bg-background/50 backdrop-blur-sm",
                    "border-border hover:border-primary/50",
                    "shadow-lg hover:shadow-xl",
                    "transition-all duration-300 hover:scale-105 hover:-translate-y-1",
                    "flex flex-col"
                  )}
                >
                  {/* Gradient background */}
                  <div
                    className={cn(
                      "absolute inset-0 rounded-2xl bg-gradient-to-br opacity-0 group-hover:opacity-100 transition-opacity duration-300",
                      service.gradient
                    )}
                  />

                  {/* Content */}
                  <div className="relative z-10 flex flex-col h-full">
                    {/* Icon */}
                    <div className="mb-4">
                      <div className="inline-flex items-center justify-center w-14 h-14 rounded-xl bg-primary/10 group-hover:bg-primary/20 transition-colors">
                        <Icon className="h-7 w-7 text-primary" />
                      </div>
                    </div>

                    {/* Title and description */}
                    <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors">
                      {t(`services.${service.id}.title`, { default: service.title })}
                    </h3>
                    <p className="text-muted-foreground mb-6 flex-grow">
                      {t(`services.${service.id}.description`, {
                        default: service.description,
                      })}
                    </p>

                    {/* Features */}
                    <ul className="space-y-2">
                      {service.features.map((feature, idx) => (
                        <li
                          key={idx}
                          className="flex items-center gap-2 text-sm text-muted-foreground"
                        >
                          <Check className="h-4 w-4 text-primary flex-shrink-0" />
                          <span>
                            {t(`services.${service.id}.features.${idx}`, {
                              default: feature,
                            })}
                          </span>
                        </li>
                      ))}
                    </ul>
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

