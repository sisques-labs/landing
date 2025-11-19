import React from "react";

interface SectionTemplateProps {
  id: string;
  children: React.ReactNode;
}

export const SectionTemplate = ({ id, children }: SectionTemplateProps) => {
  return (
    <section
      id={id}
      className="flex flex-col items-center justify-center h-screen"
    >
      {children}
    </section>
  );
};
