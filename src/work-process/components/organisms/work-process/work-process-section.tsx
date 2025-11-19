import { SectionTemplate } from "@/src/shared/components/templates/section-template";
import { useTranslations } from "next-intl";

export const WorkProcessSection = () => {
  const t = useTranslations("LandingPage.WorkProcessSection");

  return (
    <SectionTemplate id="work-process">
      <h1 className="text-5xl leading-none font-semibold tracking-tighter text-balance sm:text-6xl md:text-7xl lg:text-8xl">
        {t("title")}
      </h1>
    </SectionTemplate>
  );
};
