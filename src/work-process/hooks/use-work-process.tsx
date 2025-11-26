import { Code, Palette, Rocket, Search } from "lucide-react";
import { useMemo } from "react";
import { WorkProcess } from "../types/workig-process.type";

export const useWorkProcess = (): WorkProcess[] => {
  return useMemo(
    () => [
      {
        name: "Discovery",
        description:
          "We start by understanding your business goals, target audience, and project requirements through comprehensive research and analysis.",
        href: "#",
        cta: "Learn more",
        className: "col-span-3 md:col-span-1",
        Icon: Search,
        background: (
          <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 to-purple-500/20" />
        ),
      },
      {
        name: "Design",
        description:
          "Our design team creates beautiful, user-friendly interfaces that align with your brand and provide exceptional user experiences.",
        href: "#",
        cta: "Learn more",
        className: "col-span-3 md:col-span-1",
        Icon: Palette,
        background: (
          <div className="absolute inset-0 bg-gradient-to-br from-pink-500/20 to-red-500/20" />
        ),
      },
      {
        name: "Development",
        description:
          "We build robust, scalable applications using the latest technologies and best practices to ensure high performance and maintainability.",
        href: "#",
        cta: "Learn more",
        className: "col-span-3 md:col-span-1",
        Icon: Code,
        background: (
          <div className="absolute inset-0 bg-gradient-to-br from-green-500/20 to-emerald-500/20" />
        ),
      },
      {
        name: "Launch",
        description:
          "We ensure a smooth deployment process and provide ongoing support to help your product succeed in the market.",
        href: "#",
        cta: "Learn more",
        className: "col-span-3",
        Icon: Rocket,
        background: (
          <div className="absolute inset-0 bg-gradient-to-br from-orange-500/20 to-yellow-500/20" />
        ),
      },
    ],
    []
  );
};
