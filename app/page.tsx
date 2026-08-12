import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Stats from "@/components/Stats";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Experience from "@/components/Experience";
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
        <Stats />
        <About />
        <Skills />
        <Experience />
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