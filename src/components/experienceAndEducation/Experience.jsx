const Experience = () => {
  return (
    <div className="experience">
      <h2>Experience</h2>
      <ol className="experienceList">
        <li className="experienceItem">
          <div className="containerStylingFront">
            <div className="containerIcon bgColour">
              <img
                src="./projects.svg"
                alt="experience icon"
                className="expIcon"
              />
            </div>
            <div className="line"></div>
          </div>
          <h3>The Jump School Software engineer bootcamp</h3>
          <p className="date"> May 2024 &ndash; August 2024</p>
          <p>
            As a full-time student at the jump school bootcamp I have been
            taught by industry recognized senior developers who specialise in
            helping candidates become software engineers. During my bootcamp I
            was introduced to and developed skills with React, Typescript, SASS,
            HTML, CSS, Node, Redux, Git and Responsive Development alongside a
            host of other skills. I chose to do the full-time course as I feel
            committed to building a career within the software industry and I
            have already made lots of my projects available via my GitHub for
            you to review. I have immensely enjoyed the process and found that I
            have a real passion for creating websites and user interfaces and
            feel that frontend development would be a natural fit for me.
          </p>
        </li>
        <li className="experienceItem">
          <div className="containerStylingFront">
            <div className="containerIcon bgColour">
              <img
                src="./projects.svg"
                alt="experience icon"
                className="expIcon"
              />
            </div>
            <div className="line"></div>
          </div>
          <h3>Treehouse Self Learning / Development course</h3>
          <p className="date"> July 2023 &ndash; May 2024 </p>
          <p>
            I undertook a self-driven learning course on treehouse that covered
            the basics of web development. I choose the front-end web
            development track and have completed over 58 hours of learning. I
            completed this course whilst also working full time as a primary
            school teacher and it helped to form a base in my development
            skills. The course covered HTML, CSS, JavaScript, Debugging,
            Development Best practices and much more.
          </p>
        </li>
        <li className="experienceItem">
          <div className="containerStylingFront">
            <div className="containerIcon bgColour">
              <img
                src="./projects.svg"
                alt="experience icon"
                className="expIcon"
              />
            </div>
            <div className="line"></div>
          </div>
          <h3>Primary School Teacher</h3>
          <p className="date"> February 2017 &ndash; December 2023 </p>
          <p>
            I am a fully qualified primary school teacher with two master&#39;s
            degrees. I previously worked as a primary school teacher in both the
            Netherlands, UK and Curacao. I was a highly focused and passionate
            teacher and teaching remains on of my key areas of interest and it
            is something I would like to translate into the software world.
          </p>
        </li>
      </ol>
    </div>
  );
};

export default Experience;
