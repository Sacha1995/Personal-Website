import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const SkillsBar = ({ title, value, delay }) => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.5,
  });

  return (
    <>
      <p>{title}</p>
      <div className="containerSkillsBar">
        <div className="backgroundSkillsBar"></div>
        <motion.div
          ref={ref}
          initial={{ width: 0 }}
          animate={{ width: inView ? value : 0 }}
          transition={{ duration: 1 }}
          className="skillsBar bgColour"
        ></motion.div>
      </div>
    </>
  );
};

export default SkillsBar;
