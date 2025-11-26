import React from "react";
import { cn } from "@/lib/utils";

interface SectionTemplateProps {
  id: string;
  children: React.ReactNode;
  className?: string;
  fullHeight?: boolean;
}

export const SectionTemplate = ({
  id,
  children,
  className,
  fullHeight = true,
}: SectionTemplateProps) => {
  return (
    <section
      id={id}
      className={cn(
        "flex flex-col items-center justify-center w-full py-20 md:py-32",
        fullHeight && "min-h-screen",
        className
      )}
    >
      {children}
    </section>
  );
};
