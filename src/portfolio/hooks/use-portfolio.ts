import { useTranslations } from "next-intl";
import { useMemo } from "react";
import { PortfolioItem } from "../types/portfolio.type";

export const usePortfolio = (): PortfolioItem[] => {
  const t = useTranslations("LandingPage.PortfolioSection.projects");
  return useMemo(
    () => [
      {
        id: "1",
        title: "ApexEngineer",
        description: t("apex-engineer.description"),
        image:
          "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800",
        technologies: ["Python", "GPT4All", "AI"],
        href: "https://sisques-labs.github.io/apex-engineer/",
        category: "Web App",
        emoji: "🏎️",
      },
      {
        id: "2",
        title: "Pest Patrol",
        description: t("pest-patrol.description"),
        image:
          "https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=800",
        technologies: ["PyTorch", "Computer Vision", "Deep Learning", "ResNet"],
        href: "https://sisques-labs.github.io/pest-patrol/",
        category: "Web App",
        emoji: "🐛",
      },
    ],
    [t]
  );
};
