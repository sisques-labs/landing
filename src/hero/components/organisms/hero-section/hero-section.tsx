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
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-primary/5 to-transparent" />
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-pulse delay-1000" />
      </div>

      <div className="relative z-10 w-full max-w-6xl mx-auto px-4 text-center space-y-8">
        <BlurFade delay={0.1}>
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border bg-background/50 backdrop-blur-sm mb-4">
            <Sparkles className="h-4 w-4 text-primary" />
            <span className="text-sm font-medium">{t("badge")}</span>
          </div>
        </BlurFade>

        <BlurFade delay={0.2}>
          <TextAnimate
            as="h1"
            className="text-5xl leading-none font-bold tracking-tighter text-balance sm:text-6xl md:text-7xl lg:text-8xl mb-6"
            animation="blurInUp"
            by="word"
          >
            {t("title")}
          </TextAnimate>
        </BlurFade>

        <BlurFade delay={0.3}>
          <div className="text-xl md:text-2xl font-medium text-muted-foreground min-h-12">
            <TypingAnimation
              words={[t("description1"), t("description2"), t("description3")]}
              typeSpeed={50}
              deleteSpeed={100}
              pauseDelay={1500}
              loop
            />
          </div>
        </BlurFade>

        <BlurFade delay={0.4}>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mt-8">
            <Button asChild size="lg" className="group">
              <Link href="#portfolio">
                {t("cta.primary")}
                <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </Button>
            <Button asChild variant="outline" size="lg">
              <Link href="#contact">{t("cta.secondary")}</Link>
            </Button>
          </div>
        </BlurFade>
      </div>
    </SectionTemplate>
  );
};
