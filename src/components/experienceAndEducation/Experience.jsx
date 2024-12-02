const Experience = () => {
  const technologiesWebDeveloper = [
    "Next.JS",
    "TypeScript",
    "Tailwind",
    "Redux",
    "Framer.Motion",
    "React Hook Form",
    "Zod",
  ];

  const technologiesReactDeveloper = [
    "React Native",
    "React",
    "TypeScript",
    "Restyle",
    "Zustand",
    "TanStack Query",
  ];

  return (
    <div className="experience">
      <h2>Experience</h2>
      <ol className="experienceList">
        <li className="experienceItem">
          <div className="containerStylingFront">
            <div className="containerIcon">
              <div className="containerBackground bgColour">
                <img
                  src="./projects.svg"
                  alt="experience icon"
                  className="expIcon"
                />
              </div>
            </div>
            <div className="line"></div>
          </div>
          <h3>Junior React Native Developer, iOWNA</h3>
          <p className="date"> November 2024 &ndash; present </p>
          <div>
            <p>
              At iOWNA, a digital platform for healthcare providers and patients
              built on a universal React Native framework, I develop new
              features, resolve technical issues, and participate in design
              discussions. I also perform cross-browser and cross-device testing
              to ensure functionality and maintain the existing codebase.
              Working closely with a team, I&apos;ve gained significant mobile
              development experience in a short time and have been productive
              from day one. Working in sprints has enhanced my ability to plan
              tasks effectively, set realistic timelines, and manage my time
              efficiently.
            </p>
            <ul>
              {technologiesReactDeveloper.map((technology, index) => {
                return <li key={index}>{technology}</li>;
              })}
            </ul>
          </div>
        </li>
        <li className="experienceItem">
          <div className="containerStylingFront">
            <div className="containerIcon">
              <div className="containerBackground bgColour">
                <img
                  src="./projects.svg"
                  alt="experience icon"
                  className="expIcon"
                />
              </div>
            </div>
            <div className="line"></div>
          </div>
          <h3>Website developer, iOWNA</h3>
          <p className="date"> August 2024 &ndash; November 2024 </p>
          <div>
            <p>
              I designed and built a{" "}
              <a
                href="https://iowna.com/"
                target="_blank"
                rel="noopener noreferrer"
              >
                responsive website
              </a>{" "}
              for iOWNA to make the user experience smoother and attract more
              clients. Using Next.js, Tailwind CSS, and TypeScript, I created a
              site that looks great and works well on any device. The main goal
              was to keep things user-friendly and visually appealing, so
              visitors enjoy their time on the site and are more likely to
              convert into clients. I worked closely with the marketing and
              product teams to make sure the site supports iOWNA&#39;s goals and
              helps bring in new business.
            </p>
            <ul>
              {technologiesWebDeveloper.map((technology, index) => {
                return <li key={index}>{technology}</li>;
              })}
            </ul>
          </div>
        </li>
        <li className="experienceItem">
          <div className="containerStylingFront">
            <div className="containerIcon">
              <div className="containerBackground bgColour">
                <img
                  src="./projects.svg"
                  alt="experience icon"
                  className="expIcon"
                />
              </div>
            </div>
            <div className="line"></div>
          </div>
          <h3>Primary School Teacher</h3>
          <p className="date"> February 2017 &ndash; December 2023 </p>
          <p>
            I am a fully qualified primary school teacher with two master&#39;s
            degrees.
          </p>
        </li>
      </ol>
    </div>
  );
};

export default Experience;
