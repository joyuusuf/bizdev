import { Nav } from "@/components/Nav";
import {
  About,
  BusinessDevelopment,
  Contact,
  Education,
  Experience,
  Footer,
  Hero,
  Tools,
  Work,
} from "@/components/Sections";

export default function Home() {
  return (
    <>
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:fixed focus:top-3 focus:left-3 focus:z-[60] focus:rounded-md focus:bg-ink focus:px-4 focus:py-2 focus:text-white"
      >
        Skip to content
      </a>
      <Nav />
      <main id="main">
        <Hero />
        <About />
        <BusinessDevelopment />
        <Experience />
        <Work />
        <Tools />
        <Education />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
