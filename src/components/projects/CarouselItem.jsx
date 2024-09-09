"use client";
import { useEffect, useRef, useState } from "react";
import { useAnimation, motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import ProjectImg from "./ProjectImgs";

const CarouselItem = ({ technologies, alt, description, src, title }) => {
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

  const variants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  return (
    <section className="embla__slide">
      <motion.div
        className="containerPicture"
        ref={ref}
        initial="hidden"
        animate={controls}
        variants={variants}
      >
        <div
          onClick={handleOpen}
          aria-label="Click image to make it bigger"
          tabIndex="0"
          onKeyDown={(e) => {
            if (e.key === "Enter") {
              handleOpen();
            }
          }}
        >
          <ProjectImg src={src} title={alt} />
        </div>
        <div
          className="containerText"
          onClick={handleOpen}
          aria-label="Click image to make it bigger"
        >
          <h3>{title}</h3>
          <p>{description}</p>
          <ul>
            {technologies.map((technology, index) => (
              <li key={index}>{technology}</li>
            ))}
          </ul>
        </div>

        {/* Modal */}
        <Modal
          open={open}
          onClose={handleClose} // Close modal on Escape key
          aria-labelledby={`modal-${title}`}
          aria-describedby={`modal-description-${title}`}
        >
          <Box ref={modalRef} className="box">
            <img
              src={src}
              alt={title}
              style={{
                width: "100%",
                height: "auto",
                borderRadius: "20px",
              }}
            />
          </Box>
        </Modal>
      </motion.div>
    </section>
  );
};

export default CarouselItem;
