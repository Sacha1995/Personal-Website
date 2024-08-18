const TechnologyItem = ({ src, alt, name }) => {
  return (
    <div className="technologyItem">
      <img src={src} alt={alt} className={`technologyIcon ${name}`} />
      <p>{name}</p>
    </div>
  );
};

export default TechnologyItem;
