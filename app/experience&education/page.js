"use client";

import ExperienceAndEducation from "@/components/experienceAndEducation/ExperienceAndEducation";
import "./experienceAndEducation.scss";
import Transition from "@/components/animation/Transition";

export default function experienceLink() {
  return (
    <main>
      <Transition>
        <ExperienceAndEducation />
      </Transition>
    </main>
  );
}
