"use client";
import Button from "../reusable-code/Button";
import ProjectImg from "./ProjectImgs";
import { useEffect, useRef, useState } from "react";
import { useAnimation, motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";

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
  const [open, setOpen] = useState(false);
  const modalRef = useRef(null);

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const handleBackdropClick = (e) => {
    // Check if the click is outside the modal content
    if (modalRef.current && !modalRef.current.contains(e.target)) {
      handleClose();
    }
  };

  const variants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }

    // Add event listener for clicks outside the modal
    document.addEventListener("mousedown", handleBackdropClick);

    // Clean up event listener
    return () => {
      document.removeEventListener("mousedown", handleBackdropClick);
    };
  }, [controls, inView]);

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
          aria-label="Click image to make the image bigger"
          tabIndex="0"
          onClick={handleOpen}
          onKeyDown={(e) => {
            if (e.key === "Enter") {
              handleOpen();
            }
          }}
        >
          <ProjectImg src={src} title={title} />
          <div
            className="containerText"
            aria-label="Click image to make the image bigger"
            onClick={handleOpen}
          >
            <Modal
              open={open}
              onClose={handleClose}
              aria-label={`modal ${title}`}
            >
              <Box className="box" ref={modalRef}>
                <button
                  className="closeButton"
                  onClick={(e) => {
                    e.stopPropagation();
                    handleClose();
                  }}
                  aria-label="Close modal"
                >
                  &times;
                </button>
                <img src={src} alt={title} className="modalImage" />
              </Box>
            </Modal>
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
