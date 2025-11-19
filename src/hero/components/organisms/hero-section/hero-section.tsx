import { TypingAnimation } from "@/components/ui/typing-animation";
import { SectionTemplate } from "@/src/shared/components/templates/section-template";
import { useTranslations } from "next-intl";

export const HeroSection = () => {
  const t = useTranslations("LandingPage.HeroSection");

  const shadowColor = "black";

  return (
    <SectionTemplate id="hero">
      <h1 className="text-5xl leading-none font-semibold tracking-tighter text-balance sm:text-6xl md:text-7xl lg:text-8xl">
        {t("title")}
      </h1>
      <TypingAnimation
        words={[t("description1"), t("description2"), t("description3")]}
        typeSpeed={50}
        deleteSpeed={100}
        pauseDelay={1500}
        loop
      />
    </SectionTemplate>
  );
};
