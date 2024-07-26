import Education from "./Education";
import Experience from "./Experience";

const ExperienceAndEducation = () => {
  return (
    <div className="experienceAndEducation">
      <h1>
        Experience <span className="colour">&#38;</span> Education
      </h1>
      <Experience />
      <Education />
    </div>
  );
};

export default ExperienceAndEducation;
