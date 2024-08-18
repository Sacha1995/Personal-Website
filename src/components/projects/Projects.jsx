"use client";
import ProjectCarousel from "./ProjectCarousel";
import SectionProjects from "./SectionProjects";

const Projects = () => {
  const projects = [
    {
      title: "Redux Shop",
      sectionName: "shop",
      src: "./shop.png",
      description: "A fake webstore created with the redux toolbox.",
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
        "A form created in React with the user input being validated with Joi.",
      srcWebsite: "https://formvalidatorjoi.netlify.app/ ",
      srcGithub: "https://github.com/Sacha1995/form-validator",
      technologies: ["react", "Joi", "css", "Javascript", "HTML"],
    },
    {
      title: "Disneys Classics",
      sectionName: "disney",
      src: "./disney.png",
      description:
        "To further improve my react skills I created an interactive website with a quiz and list of disney movies.",
      srcWebsite: "https://disneyclassicsgame.netlify.app/",
      srcGithub: "https://github.com/Sacha1995/disney",
      technologies: ["react", "css", "API-calling", "Javascript", "HTML"],
    },
    {
      title: "Simpsons Quotes",
      sectionName: "simpsons",
      src: "./simpsons.png",
      description: "A fun website with Simpsons quotes created in React.",
      srcWebsite: "https://simpsonsquotesreact.netlify.app/",
      srcGithub: "https://github.com/Sacha1995/simpsons",
      technologies: ["react", "css", "API-calling", "Javascript", "HTML"],
    },
    {
      title: "Weather Website",
      sectionName: "WeatherWebsite",
      src: "./weather.png",
      description:
        "A weather website created with vanilla JS where the html is rendered dynamically dependant on the response from the API.",
      srcWebsite: "https://can-the-kids-play-outside.netlify.app/",
      srcGithub: "https://github.com/Sacha1995/Weather-Website",
      technologies: ["css", "API-calling", "Javascript", "HTML"],
    },
    {
      title: "Homage Piece",
      sectionName: "HomagePiece",
      src: "./tsl.png",
      description:
        "A homage to https://thirdspacelearning.com/ completely recreated using only SASS and HTML.",
      srcWebsite: "https://homagepiece.netlify.app/",
      srcGithub: "https://github.com/Sacha1995/thirdspacelearning",
      technologies: ["Sass", "HTML"],
    },
    {
      title: "Traffic Light",
      sectionName: "trafficLight",
      src: "./trafficlight.png",
      description:
        "The well known traffic light. Created with vanilla JS, including a fun game.",
      srcWebsite: "https://trafficlightandgame.netlify.app/",
      srcGithub: "https://github.com/Sacha1995/traffic-light",
      technologies: ["css", "Javascript", "HTML"],
    },
  ];

  return (
    <>
      <div className="projects" id="projects">
        <h1>
          MY <span className="colour">PROJECTS</span>
        </h1>
        <ProjectCarousel />
        <div className="projectsContainer">
          {projects.map((project) => {
            const {
              title,
              sectionName,
              description,
              srcWebsite,
              srcGithub,
              technologies,
              src,
            } = project;
            return (
              <SectionProjects
                key={title}
                title={title}
                description={description}
                srcWebsite={srcWebsite}
                src={src}
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
