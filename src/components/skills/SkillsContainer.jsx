"use client";
import Skills from "./Skills";
import { useColor } from "../settings/ColorProvider";
import Technologies from "./Technologies";

const SkillsContainer = () => {
  const { color } = useColor();

  return (
    <div style={{ color }} className="skillsContainer">
      <h1>SKILLS</h1>
      <Technologies />
      <Skills />
    </div>
  );
};

export default SkillsContainer;
