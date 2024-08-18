const ProjectImg = ({ src, title }) => {
  return (
    <div className="imgContainer">
      <img src={src} alt={title} className="projectImg borderColour" />
    </div>
  );
};

export default ProjectImg;
