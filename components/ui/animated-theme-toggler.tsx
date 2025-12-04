"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { Moon, Sun } from "lucide-react";
import { flushSync } from "react-dom";
import { useTheme } from "next-themes";

import { cn } from "@/lib/utils";

interface AnimatedThemeTogglerProps
  extends React.ComponentPropsWithoutRef<"button"> {
  duration?: number;
}

export const AnimatedThemeToggler = ({
  className,
  duration = 400,
  ...props
}: AnimatedThemeTogglerProps) => {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const [isDark, setIsDark] = useState(false);
  const buttonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (!mounted) return;
    setIsDark(theme === "dark");
  }, [theme, mounted]);

  const toggleTheme = useCallback(async () => {
    if (!buttonRef.current || !mounted) return;

    const newTheme = theme === "dark" ? "light" : "dark";

    if (document.startViewTransition) {
      await document.startViewTransition(() => {
        flushSync(() => {
          setIsDark(newTheme === "dark");
          setTheme(newTheme);
        });
      }).ready;

      const { top, left, width, height } =
        buttonRef.current.getBoundingClientRect();
      const x = left + width / 2;
      const y = top + height / 2;
      const maxRadius = Math.hypot(
        Math.max(left, window.innerWidth - left),
        Math.max(top, window.innerHeight - top)
      );

      document.documentElement.animate(
        {
          clipPath: [
            `circle(0px at ${x}px ${y}px)`,
            `circle(${maxRadius}px at ${x}px ${y}px)`,
          ],
        },
        {
          duration,
          easing: "ease-in-out",
          pseudoElement: "::view-transition-new(root)",
        }
      );
    } else {
      // Fallback for browsers without view transitions
      setIsDark(newTheme === "dark");
      setTheme(newTheme);
    }
  }, [theme, duration, mounted, setTheme]);

  if (!mounted) {
    return (
      <button
        ref={buttonRef}
        className={cn(
          "relative h-9 w-9 rounded-md",
          "hover:bg-accent hover:text-accent-foreground",
          "transition-colors duration-200",
          className
        )}
        {...props}
      >
        <div className="h-4 w-4" />
      </button>
    );
  }

  return (
    <button
      ref={buttonRef}
      onClick={toggleTheme}
      className={cn(
        "relative h-9 w-9 rounded-md",
        "hover:bg-accent hover:text-accent-foreground",
        "transition-colors duration-200",
        "flex items-center justify-center",
        className
      )}
      aria-label="Toggle theme"
      {...props}
    >
      {isDark ? (
        <Sun className="h-4 w-4" />
      ) : (
        <Moon className="h-4 w-4" />
      )}
      <span className="sr-only">Toggle theme</span>
    </button>
  );
};



