"use client";
import Image from "next/image";
import Button from "../reusable-code/Button";
import IntroText from "./IntroText";
import ArrowDown from "./ArrowDown";

const HomePage = ({ refs }) => {
  const handleNavigation = (section) => {
    if (refs[section].current) {
      refs[section].current.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      <div className="containerIntro">
        <div className="homePageImg mb"></div>
        <div className="containerTextIntro">
          <IntroText />
          <Button
            buttonText="Download CV"
            src="./downloads.svg"
            alt="arrow down"
            target="_blank"
            className="rightArrow"
          />
        </div>
        <ArrowDown handleNavigation={handleNavigation} />
      </div>
    </>
  );
};

export default HomePage;
