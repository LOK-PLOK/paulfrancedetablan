export const profile = {
  name: "Paul France M. Detablan",
  location: "Cebu, Philippines",
  shortLocation: "Cebu, PH",
  intro:
    "I'm a software engineer working across AI engineering, full-stack development, mobile applications, and network infrastructure support. I enjoy building software, solving technical problems, and learning new technologies.",
  availability: { open: true, label: "Open to new opportunities" },
  email: "paulfrancedetablan@gmail.com",
  github: { handle: "LOK-PLOK", url: "https://github.com/LOK-PLOK" },
  linkedin: {
    handle: "linkedin.com/in/paulfrancedetablan",
    url: "https://www.linkedin.com/in/paulfrancedetablan/",
  },
  photoAlt: "Portrait of Paul France M. Detablan",
  fastfetch: [
    ["location", "Cebu, Philippines"],
    ["focus", "AI · Full-stack · Mobile · Network"],
    ["study", "BS Computer Science, USC"],
    ["github", "LOK-PLOK"],
  ] as const,
  about: [
    "I'm someone who genuinely enjoys building things, solving problems, and figuring out how technology works. Whether I'm developing an application, experimenting with a new tool, or learning something completely unfamiliar, I'm always looking for ways to improve.",
    "I like getting hands-on, exploring different technologies, and pushing myself to understand more than I did yesterday. For me, engineering isn't just about writing code. It's about staying curious, learning continuously, and turning ideas into something useful.",
  ],
  focusAreas: ["Curious by default", "Hands-on learner", "Hard problems welcome", "Always improving"],
  siteDescription:
    "Portfolio of Paul France M. Detablan, a software engineer in Cebu, Philippines working across AI engineering, full-stack development, mobile applications and network infrastructure support.",
};

export const nav = [
  { label: "Home", href: "#top" },
  { label: "About", href: "#about" },
  { label: "Experience", href: "#experience" },
  { label: "Education", href: "#education" },
  { label: "Tech Stack", href: "#stack" },
  { label: "Projects", href: "#projects" },
  { label: "Certifications", href: "#certifications" },
  { label: "Connect", href: "#connect" },
] as const;
