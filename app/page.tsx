import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import DevelopmentProcess from "@/components/DevelopmentProcess";
import Education from "@/components/Education";
import GithubSection from "@/components/Github";
import ResumeCTA from "@/components/ResumeCTA";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />

      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <DevelopmentProcess />
        <Education />
        <GithubSection />
        <ResumeCTA />
        <Contact />
      </main>

      <Footer />
    </>
  );
}