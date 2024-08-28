import { motion } from "framer-motion";

const Button = ({ buttonText, link, target, src, alt, className }) => {
  return (
    <a className="unstyled-button" href={link} target={target}>
      <motion.div
        className="containerBtn borderColour bgGradient"
        initial={{ backgroundPosition: "10% 0" }}
        whileHover={{ backgroundPosition: "105% 0" }}
        transition={{ duration: 0.2 }}
        style={{
          background:
            "linear-gradient(to left, var(--global-color) 50%, #111111 50%)",
          backgroundSize: "200% 100%",
        }}
      >
        <button className="btn">{buttonText}</button>
        {src && (
          <div className="containerBtnImg bgColour">
            <img src={src} alt={alt} className={className} />
          </div>
        )}
      </motion.div>
    </a>
  );
};

export default Button;
