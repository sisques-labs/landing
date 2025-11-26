import { Technology } from "../types/technology.type";

export const useTechnologies = (): Technology[] => {
  return [
    { name: "React", icon: "⚛️", category: "Frontend" },
    { name: "Next.js", icon: "▲", category: "Frontend" },
    { name: "TypeScript", icon: "📘", category: "Language" },
    { name: "Node.js", icon: "🟢", category: "Backend" },
    { name: "Python", icon: "🐍", category: "Language" },
    { name: "PostgreSQL", icon: "🐘", category: "Database" },
    { name: "MongoDB", icon: "🍃", category: "Database" },
    { name: "Docker", icon: "🐳", category: "DevOps" },
    { name: "AWS", icon: "☁️", category: "Cloud" },
    { name: "Tailwind CSS", icon: "💨", category: "Frontend" },
    { name: "GraphQL", icon: "🔷", category: "API" },
    { name: "Redis", icon: "🔴", category: "Database" },
  ];
};
