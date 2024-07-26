"use client";
import PersonalInfo from "./PersonalInfo";
import Skills from "./Skills";
import { useColor } from "../settings/ColorProvider";
import Button from "../reusable-code/Button";

const About = () => {
  const { color } = useColor();

  return (
    <div style={{ color }} className="about">
      <h1>
        ABOUT <span className="colour">ME</span>
      </h1>
      <PersonalInfo />
      <Button
        buttonText="Download cv"
        src="./arrow-down.svg"
        alt="arrow down"
        target="_blank"
        className="rightArrow"
      />
      <Skills />
    </div>
  );
};

export default About;
