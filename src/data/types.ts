export type NavItem = { label: string; href: string };

export type ExperienceEntry = {
  id: string;
  kind: "work" | "education";
  status: "current" | "completed" | "education";
  title: string;
  org: string;
  period: string;
  /** e.g. "Full-time · Remote"; omit until confirmed */
  type?: string;
  bullets: string[];
  tags: string[];
  meta?: { location: string; honors: string; gpa: string };
};

export type TechGroup = { id: string; title: string; items: string[] };

export type Project = {
  id: string;
  repoLabel: string;
  title: string;
  description: string;
  tags: string[];
  details: string[];
};

export type Certification = {
  id: string;
  title: string;
  issuer?: string;
  date?: string;
};
