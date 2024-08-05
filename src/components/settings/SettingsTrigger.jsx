"use client";

import Image from "next/image";
import { useState } from "react";
import SettingsPopUp from "./SettingsPopUp";

const SettingsTrigger = () => {
  const [displayPopUp, setDisplayPopUp] = useState();

  const openPopUp = () => {
    setDisplayPopUp(true);
  };

  const closePopUp = () => {
    setDisplayPopUp(false);
  };

  return (
    <div className="settingsContainer">
      <div className="settingsIconContainer">
        <Image
          src="./settings.svg"
          alt="Settings icon"
          className="settingsIcon"
          height="30"
          width="30"
          onClick={() => openPopUp()}
        />
      </div>
      <SettingsPopUp displayPopUp={displayPopUp} closePopUp={closePopUp} />
    </div>
  );
};

export default SettingsTrigger;
