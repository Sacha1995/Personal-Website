const Education = () => {
  return (
    <div className="education">
      <h2>Education</h2>
      <ol className="educationList">
        <li className="experienceItem">
          <div className="containerStylingFront">
            <div className="containerIcon">
              <div className="containerBackground bgColour">
                <img
                  src="./education.svg"
                  alt="education icon"
                  className="eduIcon"
                />
              </div>
              ``
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
            committed to building a career within the software industry. I have
            immensely enjoyed the process and found that I have a real passion
            for creating websites and user interfaces.
          </p>
        </li>
        <li className="experienceItem">
          <div className="containerStylingFront">
            <div className="containerIcon">
              <div className="containerBackground bgColour">
                <img
                  src="./education.svg"
                  alt="education icon"
                  className="eduIcon"
                />
              </div>
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
            Development, best practices, and much more.
          </p>
        </li>
        <li className="educationItem">
          <div className="containerStylingFront">
            <div className="containerIcon">
              <div className="containerBackground bgColour">
                <img
                  src="./education.svg"
                  alt="education icon"
                  className="eduIcon"
                />
              </div>
            </div>
            <div className="line"></div>
          </div>
          <h3>Dual Masters Degree, Master of Education</h3>
          <p className="date">2017-2019</p>
          <div>
            <p>
              Master Educational needs at the university of applied sciences,
              Utrecht.
            </p>
            <ul>
              <li>Specialisation behaviour</li>
              <li>Specialisation learning</li>
            </ul>
          </div>
        </li>
        <li className="educationItem">
          <div className="containerStylingFront">
            <div className="containerIcon">
              <div className="containerBackground bgColour">
                <img
                  src="./education.svg"
                  alt="education icon"
                  className="eduIcon"
                />
              </div>
            </div>
            <div className="line"></div>
          </div>
          <h3>Bachelor of Education</h3>
          <p className="date">2012-2016</p>
          <p>
            Fontys Higher education; children and education,
            &#39;s&#45;Hertogenbosch
          </p>
        </li>
      </ol>
    </div>
  );
};

export default Education;
