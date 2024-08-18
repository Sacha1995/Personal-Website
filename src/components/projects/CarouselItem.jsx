import ProjectImg from "./ProjectImg";

const CarouselItem = ({ technologies, alt, description, src, title }) => {
  return (
    <section className="embla__slide">
      <div>
        <div className="containerPicture">
          <ProjectImg src={src} title={alt} />
          <div
            className="containerText"
            onClick={() => {
              window.open(srcWebsite, "_blank");
            }}
          >
            <h3>{title}</h3>
            <p>{description}</p>
            <ul>
              {technologies.map((technology, index) => {
                return <li key={index}>{technology}</li>;
              })}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CarouselItem;
