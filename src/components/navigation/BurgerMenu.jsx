"use client";
import React from "react";
import Close from "../../../public/close.svg";
import Open from "../../../public/menu.svg";
import Image from "next/image";
import Dynamic from "next/dynamic";
import "react-modern-drawer/dist/index.css";

const Drawer = Dynamic(() => import("react-modern-drawer"), {
  suspense: true,
});

const BurgerMenu = ({ refs, activeSection }) => {
  const [isOpen, setIsOpen] = React.useState(false);

  const toggleDrawer = () => {
    setIsOpen((prevState) => !prevState);
  };

  const handleNavigation = (section) => {
    toggleDrawer();
    if (refs[section].current) {
      refs[section].current.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      <div
        tabindex="0"
        onKeyDown={(e) => {
          if (e.key === "Enter") {
            toggleDrawer();
          }
        }}
        role="button"
        aria-label="Burger menu button"
        className="burgerMenu"
        style={{ height: "50px", width: "50px", padding: "0px" }}
      >
        <Image
          onClick={toggleDrawer}
          src={Open}
          alt="burger menu"
          className="burgerMenu"
        />
      </div>
      <Drawer
        open={isOpen}
        onClose={toggleDrawer}
        direction="right"
        className="slideMenu"
        customIdSuffix="my-drawer"
      >
        <div
          tabindex="0"
          onKeyDown={(e) => {
            if (e.key === "Enter") {
              toggleDrawer();
            }
          }}
          role="button"
          aria-label="Close burger menu button"
          className="closeIcon"
          style={{ height: "50px", width: "50px", padding: "0px" }}
        >
          <Image
            onClick={toggleDrawer}
            src={Close}
            alt="close icon"
            className="closeIcon"
          />
        </div>
        <ul className="containerLinksNavBar">
          <li
            onClick={() => handleNavigation("home")}
            onKeyDown={(e) => {
              if (e.key === "Enter") {
                handleNavigation("home");
              }
            }}
            tabIndex="0"
            className={activeSection === "home" ? "colour" : ""}
          >
            <img src="./home.svg" alt="home icon" className="navIcon" />
            HOME
          </li>
          <li
            onClick={() => handleNavigation("skills")}
            onKeyDown={(e) => {
              if (e.key === "Enter") {
                handleNavigation("skills");
              }
            }}
            tabIndex="0"
            className={activeSection === "skills" ? "colour" : ""}
          >
            <img src="./about.svg" alt="skills icon" className="navIcon" />
            SKILLS
          </li>
          <li
            onClick={() => handleNavigation("projects")}
            onKeyDown={(e) => {
              if (e.key === "Enter") {
                handleNavigation("projects");
              }
            }}
            tabIndex="0"
            className={activeSection === "projects" ? "colour" : ""}
          >
            <img src="./projects.svg" alt="projects icon" className="navIcon" />
            PROJECTS
          </li>
          <li
            onClick={() => handleNavigation("experience")}
            onKeyDown={(e) => {
              if (e.key === "Enter") {
                handleNavigation("experience");
              }
            }}
            tabIndex="0"
            className={activeSection === "experience" ? "colour" : ""}
          >
            <img
              src="./experience.svg"
              alt="education icon"
              className="navIcon"
            />
            EXPERIENCE & EDUCATION
          </li>
          <li
            onClick={() => handleNavigation("contact")}
            onKeyDown={(e) => {
              if (e.key === "Enter") {
                handleNavigation("contact");
              }
            }}
            tabIndex="0"
            className={activeSection === "contact" ? "colour" : ""}
          >
            <img src="./email.svg" alt="email icon" className="navIcon" />
            CONTACT ME
          </li>
        </ul>
      </Drawer>
    </>
  );
};

export default BurgerMenu;
