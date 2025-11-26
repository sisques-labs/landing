"use client";

import { BlurFade } from "@/components/ui/blur-fade";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { SectionTemplate } from "@/src/shared/components/templates/section-template";
import { Send } from "lucide-react";
import { useTranslations } from "next-intl";
import { useState } from "react";

export const ContactSection = () => {
  const t = useTranslations("LandingPage.ContactSection");
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    console.log("Form submitted:", formData);
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <SectionTemplate id="contact">
      <div className="w-full max-w-2xl mx-auto px-4 space-y-12">
        <BlurFade delay={0.1}>
          <div className="text-center space-y-4">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold">
              {t("title")}
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              {t("description")}
            </p>
          </div>
        </BlurFade>

        <BlurFade delay={0.2}>
          <form
            onSubmit={handleSubmit}
            className="space-y-6 p-8 rounded-2xl border bg-background/50 backdrop-blur-sm shadow-lg"
          >
            <div className="space-y-2">
              <Label htmlFor="name">{t("form.name")}</Label>
              <Input
                id="name"
                name="name"
                type="text"
                placeholder={t("form.namePlaceholder")}
                value={formData.name}
                onChange={handleChange}
                required
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="email">{t("form.email")}</Label>
              <Input
                id="email"
                name="email"
                type="email"
                placeholder={t("form.emailPlaceholder")}
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="message">{t("form.message")}</Label>
              <Textarea
                id="message"
                name="message"
                placeholder={t("form.messagePlaceholder")}
                value={formData.message}
                onChange={handleChange}
                rows={6}
                required
              />
            </div>

            <Button type="submit" className="w-full" size="lg">
              {t("form.submit")}
              <Send className="ml-2 h-4 w-4" />
            </Button>
          </form>
        </BlurFade>
      </div>
    </SectionTemplate>
  );
};

