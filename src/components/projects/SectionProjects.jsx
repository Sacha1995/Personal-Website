import { Component } from "react";
import Buttons from "../reusable-code/Button";
import ProjectImg from "./projectImg";

const SectionProjects = ({
  srcWebsite,
  srcGithub,
  technologies,
  title,
  description,
  sectionName,
  src,
}) => {
  return (
    <section className="outsideSectionProject">
      <div className={`${sectionName} insideSectionProject`}>
        <div className="containerText">
          <div className="containerTextInner">
            <h3>{title}</h3>
            <p>{description}</p>
            {src && <ProjectImg src={src} title={title} />}
            <h4>Technologies</h4>
            <ul>
              {technologies.map((technology, index) => {
                return <li key={index}>{technology}</li>;
              })}
            </ul>
            {title !== "Other skills/technologies" && (
              <div className="containerBtnProjects">
                <Buttons
                  buttonText="Website"
                  link={srcWebsite}
                  target="_blank"
                  src="./arrow-right.svg"
                  alt="right pointing arrow"
                  className="rightArrow"
                />
                <Buttons
                  buttonText="Github"
                  link={srcGithub}
                  target="_blank"
                  src="./arrow-right.svg"
                  alt="right pointing arrow"
                  className="rightArrow"
                />
              </div>
            )}
          </div>
        </div>
        <div className="containerPicture"></div>
      </div>
    </section>
  );
};

export default SectionProjects;
