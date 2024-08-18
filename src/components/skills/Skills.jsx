import SkillsBar from "../reusable-code/SkillsBar";
import { softWareSkills, softSkills } from "@/config";

const Skills = () => {
  return (
    <div className="skills">
      <div className="languages">
        <h3>Languages</h3>
        <div className="languagesGrid">
          <p>English:</p>
          <p className="colour">Native (IELTS 8.5/9, C2+)</p>
          <p>Dutch:</p>
          <p className="colour">Native</p>
        </div>
      </div>
      <div className="softwareSkills">
        <h3>Software Skills</h3>
        <div className="softwareSkillGrid">
          {softWareSkills.map((skill) => {
            const { title, value } = skill;
            return <SkillsBar title={title} value={value} key={title} />;
          })}
        </div>
      </div>
      <div className="softSkills">
        <h3>Soft Skills</h3>
        <div className="softSkillsGrid">
          {softSkills.map((skill, index) => {
            const { title, value } = skill;
            const delay = 1.5 + index * 0.1;
            return (
              <SkillsBar
                title={title}
                value={value}
                delay={delay}
                key={title}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Skills;
