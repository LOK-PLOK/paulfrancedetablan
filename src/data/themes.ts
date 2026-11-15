// Colour schemes; each `id` has a matching [data-theme="<id>"] block in src/app/globals.css.
export const themes = [
  { id: "tokyo-night", label: "Tokyo Night" },
  { id: "nord", label: "Nord" },
  { id: "kanagawa", label: "Kanagawa" },
  { id: "osaka-jade", label: "Osaka Jade" },
  { id: "vantablack", label: "Vanta Black" },
  { id: "miasma", label: "Miasma" },
  { id: "matte-black", label: "Matte Black" },
  { id: "hackerman", label: "Hackerman" },
] as const;

// Applied when the visitor has not chosen a theme (and on the server-rendered HTML).
export const defaultTheme = "vantablack";

export type ThemeId = (typeof themes)[number]["id"];
