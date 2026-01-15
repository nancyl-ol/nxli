"use client";
import { Contact } from "./_components/contact";
import { Footer } from "./_components/footer";
import { Hero } from "./_components/hero";
import { Intro } from "./_components/intro";
import { Projects } from "./_components/projects";

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      <Hero />
      <Intro />
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
}
