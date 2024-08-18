import { technologiesInfo } from "@/config";
import TechnologyItem from "./TechnologyItem";

const Technologies = () => {
  return (
    <div className="technologiesContainer">
      <h3>Technologies</h3>
      <div className="technologiesList">
        {technologiesInfo.map((tech) => {
          const { alt, src, name } = tech;
          return <TechnologyItem alt={alt} src={src} name={name} key={name} />;
        })}
      </div>
    </div>
  );
};

export default Technologies;
