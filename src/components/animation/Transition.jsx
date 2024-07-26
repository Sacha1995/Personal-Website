"use client";
import { motion } from "framer-motion";

const variants = {
  initial: { opacity: 0, y: 100, pointerEvents: "none" },
  animate: { opacity: 1, y: 0, pointerEvents: "all" },
  exit: { opacity: 0, y: 100, pointerEvents: "none" },
};

const transition = {
  duration: 0.5,
  staggerChildren: 0.5,
  ease: "easeInOut",
};

const Transition = (props) => {
  return (
    <motion.div
      initial="initial"
      animate="animate"
      exit="exit"
      variants={variants}
      transition={transition}
      {...props}
    />
  );
};

export default Transition;
