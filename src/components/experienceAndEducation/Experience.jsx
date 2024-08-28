const Experience = () => {
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
          <h3>Website developer, iOWNA</h3>
          <p className="date"> August 2024 &ndash; present </p>
          <p>
            At iOWNA, I designed and built a responsive website to improve user
            experience and attract new clients. Using Next.js, Tailwind CSS, and
            TypeScript, I created a site that looks great and works well on any
            device. My main goal was to make the site easy to use and visually
            appealing, so visitors have a positive experience and are more
            likely to become clients. I worked closely with the marketing and
            product teams to ensure the website supported iOWNA&#39;s goals and
            helped draw in new business.
          </p>
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
