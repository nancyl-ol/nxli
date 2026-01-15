"use client";
import { Contact } from "./_components/contact";
import { Hero } from "./_components/hero";
import { Interests } from "./_components/interests";
import { Intro } from "./_components/intro";
import { Projects } from "./_components/projects";

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      <Hero />
      <Intro />
      <Projects />
      <Interests />
      <Contact />
    </div>
  );
}
