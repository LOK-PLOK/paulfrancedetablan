import { Footer } from "@/components/layout/Footer";
import { Header } from "@/components/layout/Header";
import { About } from "@/components/sections/About";
import { Certifications } from "@/components/sections/Certifications";
import { Connect } from "@/components/sections/Connect";
import { Education, Experience } from "@/components/sections/Experience";
import { Hero } from "@/components/sections/Hero";
import { Projects } from "@/components/sections/Projects";
import { TechStack } from "@/components/sections/TechStack";
import { PixelStrip } from "@/components/ui/PixelStrip";

export default function Home() {
  return (
    <>
      <Header />
      <main id="main">
        <Hero />
        <PixelStrip />
        <About />
        <Experience />
        <Education />
        <TechStack />
        <Projects />
        <Certifications />
        <Connect />
      </main>
      <Footer />
    </>
  );
}
