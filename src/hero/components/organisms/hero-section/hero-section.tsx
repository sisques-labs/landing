import { BlurFade } from "@/components/ui/blur-fade";
import { Button } from "@/components/ui/button";
import { TextAnimate } from "@/components/ui/text-animate";
import { TypingAnimation } from "@/components/ui/typing-animation";
import { SectionTemplate } from "@/src/shared/components/templates/section-template";
import { ArrowRight, Sparkles } from "lucide-react";
import { useTranslations } from "next-intl";
import Link from "next/link";

export const HeroSection = () => {
  const t = useTranslations("LandingPage.HeroSection");

  return (
    <SectionTemplate id="hero" className="relative overflow-hidden">
      {/* Animated background gradient */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute inset-0 bg-linear-to-br from-primary/20 via-primary/5 to-transparent" />
        <div className="absolute top-1/4 left-1/4 w-64 h-64 sm:w-96 sm:h-96 bg-primary/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-64 h-64 sm:w-96 sm:h-96 bg-primary/10 rounded-full blur-3xl animate-pulse delay-1000" />
      </div>

      <div className="relative z-10 w-full max-w-6xl mx-auto px-4 sm:px-6 text-center space-y-6 sm:space-y-8">
        <BlurFade delay={0.1}>
          <div className="inline-flex items-center gap-2 px-3 py-1.5 sm:px-4 sm:py-2 rounded-full border bg-background/50 backdrop-blur-sm mb-2 sm:mb-4">
            <Sparkles className="h-3.5 w-3.5 sm:h-4 sm:w-4 text-primary" />
            <span className="text-xs sm:text-sm font-medium">{t("badge")}</span>
          </div>
        </BlurFade>

        <BlurFade delay={0.2}>
          <TextAnimate
            as="h1"
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl leading-tight sm:leading-none font-bold tracking-tighter text-balance mb-4 sm:mb-6 px-2"
            animation="blurInUp"
            by="word"
          >
            {t("title")}
          </TextAnimate>
        </BlurFade>

        <BlurFade delay={0.3}>
          <div className="text-base sm:text-lg md:text-xl lg:text-2xl font-medium text-muted-foreground px-4 sm:px-0">
            <div className="min-h-16 sm:min-h-14 md:min-h-12 flex items-center justify-center">
              <TypingAnimation
                words={[
                  t("description1"),
                  t("description2"),
                  t("description3"),
                ]}
                typeSpeed={50}
                deleteSpeed={100}
                pauseDelay={1500}
                loop
                className="!leading-normal sm:!leading-relaxed text-center"
              />
            </div>
          </div>
        </BlurFade>

        <BlurFade delay={0.4}>
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-center mt-6 sm:mt-8 px-4 sm:px-0">
            <Button asChild size="lg" className="group w-full sm:w-auto">
              <Link
                href="#portfolio"
                className="flex items-center justify-center"
              >
                {t("cta.primary")}
                <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </Button>
            <Button
              asChild
              variant="outline"
              size="lg"
              className="w-full sm:w-auto"
            >
              <Link href="#contact">{t("cta.secondary")}</Link>
            </Button>
          </div>
        </BlurFade>
      </div>
    </SectionTemplate>
  );
};
