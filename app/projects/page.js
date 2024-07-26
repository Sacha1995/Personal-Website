"use client";

import Projects from "@/components/projects/Projects";
import "./projects.scss";
import Transition from "@/components/animation/Transition";

export default function projectsLink() {
  return (
    <main>
      <Transition>
        <Projects />
      </Transition>
    </main>
  );
}
