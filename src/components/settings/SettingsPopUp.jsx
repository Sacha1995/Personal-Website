"use client";

import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { colours } from "@/config";
import { useColor } from "./ColorProvider";
import { useEffect, useRef } from "react";

const SettingsPopUp = ({ displayPopUp, togglePopUp, settingsRef }) => {
  const { changeColor } = useColor();
  const popupRef = useRef(null);

  // Close pop-up when clicking outside of it
  const handleClickOutside = (event) => {
    if (
      popupRef.current &&
      !popupRef.current.contains(event.target) &&
      !settingsRef.current.contains(event.target)
    ) {
      togglePopUp(event);
    }
  };

  useEffect(() => {
    if (displayPopUp) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [displayPopUp]);

  return (
    <AnimatePresence>
      {displayPopUp && (
        <motion.div
          ref={popupRef}
          initial={{ x: "-100%", opacity: 0 }}
          animate={{ x: "0%", opacity: 1 }}
          exit={{ x: "-100%", opacity: 0 }}
          transition={{ duration: 0.5 }}
          className="containerPopUpSettings"
          style={{
            position: "fixed",
            left: 0,
            top: 72,
            bottom: 0,
            width: "280px",
          }}
        >
          <Image
            onClick={(e) => {
              togglePopUp(e);
            }}
            src="./close.svg"
            alt="close icon"
            className="closeSettings"
            width={15}
            height={15}
          />
          <p>Choose Colour:</p>
          {colours.map((item) => {
            const { hex, colour } = item;
            return (
              <Image
                key={hex}
                width={30}
                height={30}
                src={`./${colour}.svg`}
                alt={colour}
                className="colourIcon"
                onClick={() => {
                  changeColor(hex);
                }}
              />
            );
          })}
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default SettingsPopUp;
