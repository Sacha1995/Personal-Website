"use client";

import About from "@/components/about/About";
import "./about.scss";
import Transition from "@/components/animation/Transition";

export default function aboutLink() {
  return (
    <main>
      <Transition>
        <About />
      </Transition>
    </main>
  );
}
