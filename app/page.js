"use client";
import HomePage from "@/components/home-page/HomePage";
import Transition from "@/components/animation/Transition";

export default function Home() {
  return (
    <main>
      <Transition>
        <HomePage />
      </Transition>
    </main>
  );
}
