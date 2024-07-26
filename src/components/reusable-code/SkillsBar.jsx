import { motion } from "framer-motion";

const SkillsBar = ({ title, value, delay }) => {
  return (
    <>
      <p>{title}</p>
      <div className="containerSkillsBar">
        <div className="backgroundSkillsBar"></div>
        <motion.div
          initial={{ width: 0 }}
          animate={{ width: value }}
          transition={{ duration: 1, delay: delay }}
          className="skillsBar bgColour"
        ></motion.div>
      </div>
    </>
  );
};

export default SkillsBar;
