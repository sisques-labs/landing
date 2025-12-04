"use client";

import { BlurFade } from "@/components/ui/blur-fade";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import {
  Github,
  Linkedin,
  Mail,
  Twitter,
  ArrowUp,
} from "lucide-react";
import { useTranslations } from "next-intl";
import Link from "next/link";

const footerLinks = [
  { id: "services", href: "#services" },
  { id: "portfolio", href: "#portfolio" },
  { id: "work-process", href: "#work-process" },
  { id: "technologies", href: "#technologies" },
  { id: "testimonials", href: "#testimonials" },
  { id: "contact", href: "#contact" },
];

const socialLinks = [
  { id: "github", icon: Github, href: "https://github.com" },
  { id: "linkedin", icon: Linkedin, href: "https://linkedin.com" },
  { id: "twitter", icon: Twitter, href: "https://twitter.com" },
  { id: "email", icon: Mail, href: "mailto:contact@sisqueslabs.com" },
];

export const Footer = () => {
  const t = useTranslations("LandingPage.Footer");
  const currentYear = new Date().getFullYear();

  const handleNavClick = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="relative border-t border-border bg-background/50 backdrop-blur-sm">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-12">
          {/* Brand Section */}
          <BlurFade delay={0.1}>
            <div className="space-y-4">
              <Link
                href="#hero"
                onClick={(e) => {
                  e.preventDefault();
                  scrollToTop();
                }}
                className="text-2xl font-bold text-foreground hover:text-primary transition-colors inline-block"
              >
                Sisques Labs
              </Link>
              <p className="text-sm text-muted-foreground max-w-xs">
                {t("description")}
              </p>
              {/* Social Links */}
              <div className="flex items-center gap-3">
                {socialLinks.map((social) => {
                  const Icon = social.icon;
                  return (
                    <Button
                      key={social.id}
                      variant="ghost"
                      size="icon"
                      asChild
                      className="h-9 w-9"
                    >
                      <a
                        href={social.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={t(`social.${social.id}`)}
                      >
                        <Icon className="h-4 w-4" />
                      </a>
                    </Button>
                  );
                })}
              </div>
            </div>
          </BlurFade>

          {/* Quick Links */}
          <BlurFade delay={0.2}>
            <div className="space-y-4">
              <h3 className="text-sm font-semibold">{t("quickLinks")}</h3>
              <nav className="flex flex-col gap-2">
                {footerLinks.slice(0, 3).map((link) => (
                  <Button
                    key={link.id}
                    variant="ghost"
                    onClick={() => handleNavClick(link.href)}
                    className="justify-start text-sm text-muted-foreground hover:text-foreground"
                  >
                    {t(`links.${link.id}`)}
                  </Button>
                ))}
              </nav>
            </div>
          </BlurFade>

          {/* More Links */}
          <BlurFade delay={0.3}>
            <div className="space-y-4">
              <h3 className="text-sm font-semibold">{t("moreLinks")}</h3>
              <nav className="flex flex-col gap-2">
                {footerLinks.slice(3).map((link) => (
                  <Button
                    key={link.id}
                    variant="ghost"
                    onClick={() => handleNavClick(link.href)}
                    className="justify-start text-sm text-muted-foreground hover:text-foreground"
                  >
                    {t(`links.${link.id}`)}
                  </Button>
                ))}
              </nav>
            </div>
          </BlurFade>

          {/* Contact Info */}
          <BlurFade delay={0.4}>
            <div className="space-y-4">
              <h3 className="text-sm font-semibold">{t("contact")}</h3>
              <div className="flex flex-col gap-3 text-sm text-muted-foreground">
                <a
                  href="mailto:contact@sisqueslabs.com"
                  className="hover:text-foreground transition-colors flex items-center gap-2"
                >
                  <Mail className="h-4 w-4" />
                  {t("email")}
                </a>
                <p className="flex items-start gap-2">
                  <span>{t("location")}</span>
                </p>
              </div>
            </div>
          </BlurFade>
        </div>
      </div>

      {/* Bottom Bar */}
      <BlurFade delay={0.5}>
        <div className="w-full border-t border-border bg-muted/30">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-6 flex flex-col sm:flex-row justify-between items-center gap-4">
            <p className="text-sm text-muted-foreground text-center sm:text-left">
              {t("copyright", { year: currentYear })}
            </p>
            <Button
              variant="ghost"
              size="icon"
              onClick={scrollToTop}
              className="h-9 w-9"
              aria-label={t("scrollToTop")}
            >
              <ArrowUp className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </BlurFade>
    </footer>
  );
};

