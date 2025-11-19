"use client";

import { motion, MotionProps, useScroll } from "motion/react";

import { cn } from "@/lib/utils";

interface ScrollProgressProps
  extends Omit<React.HTMLAttributes<HTMLElement>, keyof MotionProps> {
  ref?: React.Ref<HTMLDivElement>;
  fromColor?: string;
  viaColor?: string;
  toColor?: string;
}

export function ScrollProgress({
  className,
  fromColor = "#A97CF8",
  viaColor = "#F38CB8",
  toColor = "#FDCC92",
  ref,
  ...props
}: ScrollProgressProps) {
  const { scrollYProgress } = useScroll();

  return (
    <motion.div
      ref={ref}
      className={cn("fixed inset-x-0 top-0 z-50 h-px origin-left", className)}
      style={{
        scaleX: scrollYProgress,
        background: `linear-gradient(to right, ${fromColor}, ${viaColor}, ${toColor})`,
      }}
      {...props}
    />
  );
}
