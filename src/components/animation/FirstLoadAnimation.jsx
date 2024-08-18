import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const FirstLoadAnimation = ({ onComplete }) => {
  const [animationComplete, setAnimationComplete] = useState(false);

  useEffect(() => {
    if (animationComplete) {
      onComplete();
    }
  }, [animationComplete, onComplete]);

  const handleComplete = () => {
    setAnimationComplete(true);
  };

  const lineVariants = {
    initial: { height: 0, opacity: 1, width: "2px" },
    animate: {
      height: ["0vh", "100vh", "100vh"],
      width: ["2px", "2px", "1px"],
      opacity: [1, 1, 0],
      transition: {
        duration: 2,
        times: [0, 0.5, 1],
        ease: "easeInOut",
      },
    },
    exit: { height: 0, opacity: 0, transition: { duration: 0.5, delay: 0.5 } },
  };

  const blackDivLeftVariants = {
    initial: { width: "50vw", height: "100%", opacity: 1 },
    animate: {
      width: ["50vw", "0vw"],
      x: ["0%", "-50%"],
      transition: { duration: 1, delay: 1.5 },
    },
    exit: { width: "0vw", opacity: 0, transition: { duration: 0.5 } },
  };

  const blackDivRightVariants = {
    initial: { width: "50vw", height: "100%", opacity: 1 },
    animate: {
      width: ["50vw", "0vw"],
      x: ["0%", "50%"],
      transition: { duration: 1, delay: 1.5 },
    },
    exit: { width: "0vw", opacity: 0, transition: { duration: 0.5 } },
  };

  return (
    <AnimatePresence onAnimationComplete={handleComplete}>
      {!animationComplete && (
        <>
          <motion.div
            className="blackDiv left"
            variants={blackDivLeftVariants}
            initial="initial"
            animate="animate"
            exit="exit"
          />
          <motion.div
            className="blackDiv right"
            variants={blackDivRightVariants}
            initial="initial"
            animate="animate"
            exit="exit"
          />
          <motion.div
            className="yellowLine"
            variants={lineVariants}
            initial="initial"
            animate="animate"
            exit="exit"
          />
        </>
      )}
    </AnimatePresence>
  );
};

export default FirstLoadAnimation;
