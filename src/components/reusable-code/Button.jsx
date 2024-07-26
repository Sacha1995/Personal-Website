import { useRouter } from "next/navigation";
import { motion } from "framer-motion";

const Button = ({ buttonText, link, target, src, alt, className }) => {
  const router = useRouter();

  const handleClick = () => {
    if (target === "_blank") {
      window.open(link, "_blank");
    } else if (target === "_self") {
      router.push(link);
    } else {
      router.push(link);
    }
  };

  return (
    <motion.div
      className="containerBtn borderColour bgGradient"
      onClick={handleClick}
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
  );
};

export default Button;
