import type { Metadata, Viewport } from "next";
import { JetBrains_Mono } from "next/font/google";
import { profile } from "@/data/profile";
import { defaultTheme, themes } from "@/data/themes";
import { siteUrl } from "@/lib/site";
import "./globals.css";

const mono = JetBrains_Mono({ subsets: ["latin"], variable: "--font-jetbrains-mono", display: "swap" });

const title = `${profile.name} — Software Engineer`;

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  alternates: { canonical: "/" },
  title,
  description: profile.siteDescription,
  openGraph: { title, description: profile.siteDescription, url: "/", siteName: profile.name, type: "website", locale: "en_PH" },
  twitter: { card: "summary", title, description: profile.siteDescription },
};

export const viewport: Viewport = { themeColor: "#000000", colorScheme: "dark" };

// Runs before paint: ?theme=<id> wins, else the visitor's saved choice, else data-theme stays defaultTheme.
const themeScript = `(function(){try{var ids=${JSON.stringify(themes.map((t) => t.id))};var q=new URLSearchParams(location.search).get("theme");var t=ids.indexOf(q)>-1?q:localStorage.getItem("theme");if(ids.indexOf(t)>-1)document.documentElement.dataset.theme=t}catch(e){}})()`;

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    // suppressHydrationWarning: the inline script below may add data-theme before React hydrates
    <html lang="en" className={mono.variable} data-theme={defaultTheme} suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
      </head>
      <body>
        <div id="top" aria-hidden className="absolute left-0 top-0 h-0 w-0" />
        <a href="#main" className="sr-only z-50 bg-primary px-3 py-2 text-bg focus:not-sr-only focus:fixed focus:left-3 focus:top-3">
          Skip to content
        </a>
        {children}
      </body>
    </html>
  );
}
