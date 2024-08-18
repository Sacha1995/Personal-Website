import Button from "../reusable-code/Button";
import ProjectImg from "./ProjectImgs";
import { useEffect } from "react";
import { useAnimation, motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const SectionProjects = ({
  srcWebsite,
  srcGithub,
  technologies,
  title,
  description,
  src,
}) => {
  const controls = useAnimation();
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);

  const variants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  return (
    <section>
      <motion.div
        className="projectItem"
        ref={ref}
        initial="hidden"
        animate={controls}
        variants={variants}
      >
        <div
          className="containerPicture"
          onClick={() => {
            window.open(srcWebsite, "_blank");
          }}
        >
          <ProjectImg src={src} title={title} />
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
        <div className="containerBtnProjects">
          <Button
            buttonText="Website"
            link={srcWebsite}
            target="_blank"
            src="./arrow-right.svg"
            alt="right pointing arrow"
            className="rightArrow"
          />
          <Button
            buttonText="Github"
            link={srcGithub}
            target="_blank"
            src="./arrow-right.svg"
            alt="right pointing arrow"
            className="rightArrow"
          />
        </div>
      </motion.div>
    </section>
  );
};

export default SectionProjects;
