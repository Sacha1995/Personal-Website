const TechnologyItem = ({ src, alt, name, key }) => {
  return (
    <div className="technologyItem" key={key}>
      <img src={src} alt={alt} className={`technologyIcon ${name}`} />
      <p>{name}</p>
    </div>
  );
};

export default TechnologyItem;
