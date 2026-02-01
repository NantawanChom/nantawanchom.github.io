import { Navigation } from "./components/Navigation.tsx";
import { Hero } from "./components/Hero.tsx";
import { About } from "./components/About.tsx";
import { Timeline } from "./components/Timeline.tsx";
import { Skills } from "./components/Skills.tsx";
import { Projects } from "./components/Projects.tsx";
import { Contact } from "./components/Contact.tsx";
export function App() {
  return (
    <div className="min-h-screen bg-[var(--cream)] selection:bg-[var(--mint)] selection:text-[var(--dark)]">
      <Navigation />
      <main>
        <Hero />
        <About />
        <Timeline />
        <Skills />
        <Projects />
        <Contact />
      </main>
    </div>
  );
}
