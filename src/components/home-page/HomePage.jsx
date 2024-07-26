"use client";

import Button from "../reusable-code/Button";
import IntroText from "./IntroText";

const HomePage = () => {
  const buttons = [
    { text: "Github", src: "https://github.com/Sacha1995", target: "_blank" },
    {
      text: "LinkedIn",
      src: "https://www.linkedin.com/in/sachauijlen/",
      target: "_blank",
    },
    { text: "More about me", src: "./about" },
  ];

  return (
    <div className="containerIntro">
      <div className="homePageImg mb"></div>
      <div className="containerTextIntro">
        <IntroText />
        <div className="containerButtons">
          {buttons.map((button, index) => {
            return (
              <Button
                key={index}
                buttonText={button.text}
                link={button.src}
                target={button.target}
                src="./arrow-right.svg"
                alt="right pointing arrow"
                className="rightArrow"
              />
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default HomePage;
