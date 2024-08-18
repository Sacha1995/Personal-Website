"use client";
import React from "react";
import "react-modern-drawer/dist/index.css";
import { sideMenuItems } from "@/config";
import SideMenuItem from "./SideMenuItem";

const SideMenu = ({ refs, activeSection }) => {
  const handleNavigation = (section) => {
    if (refs[section].current) {
      refs[section].current.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      <ul className="containerSideMenu">
        {sideMenuItems.map((item) => {
          const { section, title, src, alt } = item;
          return (
            <SideMenuItem
              section={section}
              title={title}
              src={src}
              alt={alt}
              activeSection={activeSection}
              handleNavigation={handleNavigation}
              key={title}
            />
          );
        })}
      </ul>
    </>
  );
};

export default SideMenu;
