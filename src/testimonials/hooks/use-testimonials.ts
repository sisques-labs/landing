import { Testimonial } from "../types/testimonial.type";

export const useTestimonials = (): Testimonial[] => {
  return [
    {
      name: "María González",
      username: "@mariag",
      role: "CEO",
      company: "TechStart",
      body: "Sisques Labs transformó completamente nuestra plataforma. El equipo es profesional, proactivo y siempre entrega más de lo esperado. Nuestros usuarios están encantados con la nueva experiencia.",
      img: "https://avatar.vercel.sh/maria",
      rating: 5,
    },
    {
      name: "Carlos Rodríguez",
      username: "@carlosr",
      role: "CTO",
      company: "InnovateApp",
      body: "Trabajar con Sisques Labs fue una experiencia excepcional. Su enfoque en calidad y atención al detalle es impresionante. La aplicación móvil que desarrollaron superó todas nuestras expectativas.",
      img: "https://avatar.vercel.sh/carlos",
      rating: 5,
    },
    {
      name: "Ana Martínez",
      username: "@anam",
      role: "Product Manager",
      company: "Digital Solutions",
      body: "El proceso de desarrollo fue transparente y colaborativo. Entregaron a tiempo y el código es de excelente calidad. Definitivamente los recomendaría para cualquier proyecto complejo.",
      img: "https://avatar.vercel.sh/ana",
      rating: 5,
    },
    {
      name: "David López",
      username: "@davidl",
      role: "Founder",
      company: "StartupHub",
      body: "Increíble trabajo en nuestro dashboard de analytics. La interfaz es intuitiva y el rendimiento es excepcional. Sisques Labs realmente entiende cómo crear productos que los usuarios aman.",
      img: "https://avatar.vercel.sh/david",
      rating: 5,
    },
    {
      name: "Laura Fernández",
      username: "@lauraf",
      role: "Marketing Director",
      company: "BrandCo",
      body: "La landing page que crearon aumentó nuestras conversiones en un 40%. El diseño es moderno, la experiencia de usuario es fluida y el equipo siempre está disponible para ajustes.",
      img: "https://avatar.vercel.sh/laura",
      rating: 5,
    },
    {
      name: "Roberto Sánchez",
      username: "@robertos",
      role: "Operations Manager",
      company: "ScaleUp Inc",
      body: "Profesionales de primer nivel. El sistema que desarrollaron ha mejorado significativamente nuestros procesos internos. La comunicación fue excelente durante todo el proyecto.",
      img: "https://avatar.vercel.sh/roberto",
      rating: 5,
    },
  ];
};
