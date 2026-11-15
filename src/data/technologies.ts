import type { TechGroup } from "./types";

export const technologies: TechGroup[] = [
  { id: "programming-languages", title: "Programming Languages", items: ["Python", "PHP", "C", "C++", "C#", "Bash", "PowerShell", "JavaScript", "TypeScript"] },
  { id: "mobile-development", title: "Mobile Development", items: ["Expo Go", "NativeWind"] },
  { id: "frontend", title: "Frontend", items: ["React.js", "Next.js", "Tailwind CSS"] },
  { id: "backend", title: "Backend", items: ["Node.js", "Express", "ASP.NET"] },
  { id: "databases", title: "Databases", items: ["PostgreSQL", "Microsoft SQL Server", "MongoDB", "Supabase"] },
  { id: "devops", title: "DevOps", items: ["Docker", "Mailpit"] },
  { id: "developer-tools", title: "Developer Tools", items: ["Git", "GitHub", "GitLab", "Visual Studio Code (VS Code)", "Cursor"] },
  { id: "networking-monitoring", title: "Networking | Monitoring", items: ["Wireshark", "PRTG Network Monitor", "PRTG Hosted Monitor"] },
];
