"use client";

import Image from "next/image";
import { useState, useRef } from "react";
import SettingsPopUp from "./SettingsPopUp";

const SettingsTrigger = () => {
  const [displayPopUp, setDisplayPopUp] = useState();
  const settingsRef = useRef(null);

  const togglePopUp = (e) => {
    e.stopPropagation();
    setDisplayPopUp((prev) => !prev);
  };

  return (
    <div className="settingsContainer">
      <div className="settingsIconContainer" ref={settingsRef}>
        <Image
          src="./settings.svg"
          alt="Settings icon"
          className="settingsIcon"
          height="30"
          width="30"
          onClick={(e) => togglePopUp(e)}
        />
      </div>
      <SettingsPopUp
        displayPopUp={displayPopUp}
        togglePopUp={togglePopUp}
        settingsRef={settingsRef}
      />
    </div>
  );
};

export default SettingsTrigger;
