// Colour schemes + the matching themed portrait (public/images/profile); each `id` has a matching [data-theme="<id>"] block in src/app/globals.css.
export const themes = [
  { id: "tokyo-night", label: "Tokyo Night", portrait: "/images/profile/Tokyo Night.webp" },
  { id: "nord", label: "Nord", portrait: "/images/profile/Nord.webp" },
  { id: "kanagawa", label: "Kanagawa", portrait: "/images/profile/Kanagawa.webp" },
  { id: "osaka-jade", label: "Osaka Jade", portrait: "/images/profile/Osaka Jade.webp" },
  { id: "vantablack", label: "Vanta Black", portrait: "/images/profile/Vanta Black.webp" },
  { id: "miasma", label: "Miasma", portrait: "/images/profile/Miasma.webp" },
  { id: "matte-black", label: "Matte Black", portrait: "/images/profile/Matte Black.webp" },
  { id: "hackerman", label: "Hackerman", portrait: "/images/profile/Hackerman.webp" },
] as const;

// Applied when the visitor has not chosen a theme (and on the server-rendered HTML).
export const defaultTheme = "vantablack";

export type ThemeId = (typeof themes)[number]["id"];
