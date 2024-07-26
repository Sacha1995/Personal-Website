"use client";
import { Component } from "react";
import SectionProjects from "./SectionProjects";
import useWindowDimensions from "@/utils/customHooks";

const Projects = () => {
  const { width } = useWindowDimensions();

  console.log(width);

  const projects = [
    {
      title: "Redux Shop",
      sectionName: "shop",
      src: "./reduxShop.png",
      description:
        "This project showcases me using the redux toolbox and is a fake website where you can purchase items of clothing and add / remove items from a cart. As part of this work I'm using the following tech: The fake store API, React, Hooks, HTML/CSS and some plugins.",
      srcWebsite: "https://reduxtoolkitshop.netlify.app/",
      srcGithub: "https://github.com/Sacha1995/redux-toolbox-shop",
      technologies: [
        "Redux",
        "react",
        "css",
        "API-calling",
        "Javascript",
        "HTML",
      ],
    },
    {
      title: "Form with validator",
      sectionName: "form",
      src: "./form.png",
      description:
        "In this assignment I was tasked with creating a new form with react and implementing validation with Joi. This project uses react state to map the data inside the form to the state and implements a custom function to handle validation with Joi.",
      srcWebsite: "https://formvalidatorjoi.netlify.app/ ",
      srcGithub: "https://github.com/Sacha1995/form-validator",
      technologies: ["react", "Joi", "css", "Javascript", "HTML"],
    },
    {
      title: "Disneys Classics",
      sectionName: "disney",
      src: "./disney.png",
      description:
        "I made a Disney themed game which allows the user to start a game where they must put the movie to the description. To further improve my skills with react I decided to create an interactive experience where the viewer can do a little more than searching or ordering. This taught me a lot about the fundamentals of react and also how to organise my work efficiently. The tech that I used was: React, sass, html, css.",
      srcWebsite: "https://disneyclassicsgame.netlify.app/",
      srcGithub: "https://github.com/Sacha1995/disney",
      technologies: ["react", "css", "API-calling", "Javascript", "HTML"],
    },
    {
      title: "Simpsons Quotes",
      sectionName: "simpsons",
      src: "./simpsons.png",
      description:
        "This is my first react project and orginally this was built with class based components and then was later modernised with hooks. This project I had lot of fun editing images of the simpsons and it presented me with some intresting challenges that I had to overcome with sorting, ordering and animating the simpsons.",
      srcWebsite: "https://simpsonsquotesreact.netlify.app/",
      srcGithub: "https://github.com/Sacha1995/simpsons",
      technologies: ["react", "css", "API-calling", "Javascript", "HTML"],
    },
    {
      title: "Weather Website",
      sectionName: "WeatherWebsite",
      src: "./canthekidsplayoutside.png",
      description:
        "This was the first project where we implemented an API call into our work. The project is written in vanilla JavaScript where the JavaScript renders the html dynamically dependant on the response from the API. I have also included some nice responsive design into the project and added some humour to accommodate for a great user experience.",
      srcWebsite: "https://can-the-kids-play-outside.netlify.app/",
      srcGithub: "https://github.com/Sacha1995/Weather-Website",
      technologies: ["css", "API-calling", "Javascript", "HTML"],
    },
    {
      title: "Homage Piece",
      sectionName: "HomagePiece",
      src: "./tsl.png",
      description:
        "This assignment we were tasked with recreating a website, for this piece I choose https://thirdspacelearning.com/ and I set out to copy the look and feel of the website. There were some tricky parts as we weren't allowed to use JavaScript yet and everything was completed with just html and css. I am particularly pleased with the resemblance of my piece and it also gave me valuable lessons on how to construct the interactive portions of the website.",
      srcWebsite: "https://homagepiece.netlify.app/",
      srcGithub: "https://github.com/Sacha1995/thirdspacelearning",
      technologies: ["Sass", "HTML"],
    },
    {
      title: "Traffic Light",
      sectionName: "trafficLight",
      src: "./trafficlight.png",
      description:
        "This project was completed after our introduction to Javascript, utilising all of the basic skills we were taught we had to build a traffic light. This is a common coding interview question and after completing the basics for this project I went on to program some lights from different countries in the world and also made a simple game to help hone my skills.",
      srcWebsite: "https://trafficlightandgame.netlify.app/",
      srcGithub: "https://github.com/Sacha1995/traffic-light",
      technologies: ["css", "Javascript", "HTML"],
    },
    {
      title: "Other skills/technologies",
      sectionName: "skills",
      src: "./reduxShop.png",
      description:
        "Next to these projects I have also worked/experimented with other technologies",
      technologies: [
        "Bootstrap",
        "TailWind",
        "Bulma",
        "Git",
        "Date-FNS",
        "Joi",
        "MUI",
        "GSAP/GreenSock",
        "Chart.js",
        "Sha256",
        "day.js",
        "framer.motion",
      ],
    },
  ];

  return (
    <>
      <div className="projects" id="projects">
        <h1>
          MY <span className="colour">PROJECTS</span>
        </h1>
        <div className="projectsContainer">
          {width < 1000 &&
            projects.map((project) => {
              const {
                title,
                sectionName,
                description,
                srcWebsite,
                srcGithub,
                technologies,
                src,
              } = project;
              if (title === "Other skills/technologies") {
                return (
                  <SectionProjects
                    key={title}
                    title={title}
                    sectionName={sectionName}
                    srcWebsite={srcWebsite}
                    srcGithub={srcGithub}
                    technologies={technologies}
                    description={description}
                  />
                );
              }
              return (
                <SectionProjects
                  key={title}
                  title={title}
                  sectionName={sectionName}
                  srcWebsite={srcWebsite}
                  srcGithub={srcGithub}
                  technologies={technologies}
                  src={src}
                />
              );
            })}
          {width > 1000 &&
            projects.map((project) => {
              const {
                title,
                sectionName,
                description,
                srcWebsite,
                srcGithub,
                technologies,
              } = project;
              return (
                <SectionProjects
                  key={title}
                  title={title}
                  sectionName={sectionName}
                  description={description}
                  srcWebsite={srcWebsite}
                  srcGithub={srcGithub}
                  technologies={technologies}
                />
              );
            })}
        </div>
      </div>
    </>
  );
};

export default Projects;
