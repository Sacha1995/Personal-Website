"use client";
import HomePage from "@/components/home-page/HomePage";
import SkillsContainer from "@/components/skills/SkillsContainer";
import ExperienceAndEducation from "@/components/experienceAndEducation/ExperienceAndEducation";
import Projects from "@/components/projects/Projects";
import { useRef, useState } from "react";
import "../src/css/skills.scss";
import "../src/css/experienceAndEducation.scss";
import "../src/css/projects.scss";
import "../src/css/contact.scss";
import dynamic from "next/dynamic";
import ParticlesBg from "@/components/home-page/ParticalsBg";
import FirstLoadAnimation from "@/components/animation/FirstLoadAnimation";
import ContactForm from "@/components/contact/ContactForm";

export default function Home() {
  const [showAnimation, setShowAnimation] = useState(true);
  const homeRef = useRef(null);
  const skillsRef = useRef(null);
  const projectsRef = useRef(null);
  const experienceRef = useRef(null);
  const contactRef = useRef(null);

  const refs = {
    home: homeRef,
    skills: skillsRef,
    projects: projectsRef,
    experience: experienceRef,
    contact: contactRef,
  };

  //stop prerendering of navigationsItems, because they conditionally render
  // const NavigationItems = dynamic(() =>
  //   import("@/components/navigation/NavigationItems")
  // );

  return (
    <main>
      {showAnimation && (
        <FirstLoadAnimation onComplete={() => setShowAnimation(false)} />
      )}
      {/* <NavigationItems refs={refs} /> */}
      <div ref={homeRef}>
        <ParticlesBg />
        <HomePage refs={refs} />
      </div>
      <div ref={skillsRef}>
        <SkillsContainer />
      </div>
      <div ref={projectsRef}>
        <Projects />
      </div>
      <div ref={experienceRef}>
        <ExperienceAndEducation />
      </div>
      <div ref={contactRef}>
        <ContactForm />
      </div>
    </main>
  );
}
