const Education = () => {
  return (
    <div className="education">
      <h2>Education</h2>
      <ol className="educationList">
        <li className="educationItem">
          <div className="containerStylingFront">
            <div className="containerIcon bgColour">
              <img
                src="./education.svg"
                alt="education icon"
                className="eduIcon"
              />
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
            <div className="containerIcon bgColour">
              <img
                src="./education.svg"
                alt="education icon"
                className="eduIcon"
              />
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
