import { Service } from "../types/service.type";
import {
  Code,
  Smartphone,
  Zap,
  Lightbulb,
  Settings,
  BarChart3,
} from "lucide-react";

export const useServices = (): Service[] => {
  return [
    {
      id: "web-development",
      title: "Desarrollo Web",
      description:
        "Creamos aplicaciones web modernas, escalables y de alto rendimiento utilizando las últimas tecnologías del mercado.",
      icon: Code,
      features: [
        "Aplicaciones React/Next.js",
        "APIs RESTful y GraphQL",
        "Arquitectura escalable",
        "Optimización SEO",
      ],
      gradient: "from-blue-500/20 to-cyan-500/20",
    },
    {
      id: "mobile-development",
      title: "Desarrollo Móvil",
      description:
        "Desarrollamos aplicaciones móviles nativas e híbridas para iOS y Android con excelente experiencia de usuario.",
      icon: Smartphone,
      features: [
        "Apps nativas iOS/Android",
        "React Native",
        "UI/UX optimizado",
        "Publicación en stores",
      ],
      gradient: "from-purple-500/20 to-pink-500/20",
    },
    {
      id: "integrations",
      title: "Integraciones",
      description:
        "Conectamos tus sistemas con APIs, servicios de terceros y plataformas existentes para optimizar tus procesos.",
      icon: Zap,
      features: [
        "APIs de terceros",
        "Webhooks y automatizaciones",
        "Sincronización de datos",
        "Migración de sistemas",
      ],
      gradient: "from-yellow-500/20 to-orange-500/20",
    },
    {
      id: "r-d-i",
      title: "I+D+I",
      description:
        "Investigamos y desarrollamos soluciones innovadoras utilizando tecnologías emergentes como IA, blockchain y más.",
      icon: Lightbulb,
      features: [
        "Prototipado rápido",
        "Tecnologías emergentes",
        "Análisis de viabilidad",
        "Innovación continua",
      ],
      gradient: "from-green-500/20 to-emerald-500/20",
    },
    {
      id: "consulting",
      title: "Consultoría Técnica",
      description:
        "Te ayudamos a tomar decisiones tecnológicas estratégicas y optimizar tu arquitectura de software.",
      icon: BarChart3,
      features: [
        "Arquitectura de software",
        "Auditorías técnicas",
        "Mejores prácticas",
        "Roadmap tecnológico",
      ],
      gradient: "from-indigo-500/20 to-blue-500/20",
    },
    {
      id: "maintenance",
      title: "Mantenimiento y Soporte",
      description:
        "Ofrecemos soporte continuo, actualizaciones de seguridad y mejoras para mantener tus aplicaciones al día.",
      icon: Settings,
      features: [
        "Soporte 24/7",
        "Actualizaciones de seguridad",
        "Monitoreo y alertas",
        "Optimización continua",
      ],
      gradient: "from-red-500/20 to-rose-500/20",
    },
  ];
};




