import { PortfolioItem } from "../types/portfolio.type";

export const usePortfolio = (): PortfolioItem[] => {
  return [
    {
      id: "1",
      title: "E-commerce Platform",
      description:
        "Modern e-commerce solution with real-time inventory management",
      image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800",
      technologies: ["Next.js", "TypeScript", "Stripe"],
      href: "#",
      category: "Web App",
    },
    {
      id: "2",
      title: "Mobile Banking App",
      description:
        "Secure mobile banking application with biometric authentication",
      image: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=800",
      technologies: ["React Native", "Node.js", "PostgreSQL"],
      href: "#",
      category: "Mobile App",
    },
    {
      id: "3",
      title: "Analytics Dashboard",
      description:
        "Real-time analytics dashboard with interactive visualizations",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800",
      technologies: ["React", "D3.js", "Python"],
      href: "#",
      category: "Dashboard",
    },
  ];
};




