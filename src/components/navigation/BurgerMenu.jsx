"use client";
import React from "react";
import Close from "../../../public/close.svg";
import Open from "../../../public/menu.svg";
import Image from "next/image";
import Dynamic from "next/dynamic";
import { usePathname, useRouter } from "next/navigation";

//import styles 👇
import "react-modern-drawer/dist/index.css";

const Drawer = Dynamic(() => import("react-modern-drawer"), {
  suspense: true,
});

const BurgerMenu = () => {
  const router = useRouter();
  const [isOpen, setIsOpen] = React.useState(false);
  const path = usePathname();

  const toggleDrawer = () => {
    setIsOpen((prevState) => !prevState);
  };

  const handleNavigation = (path) => {
    toggleDrawer();
    router.push(path);
  };

  return (
    <>
      <Image
        onClick={toggleDrawer}
        src={Open}
        alt="burger menu"
        className="burgerMenu"
      />
      <Drawer
        open={isOpen}
        onClose={toggleDrawer}
        direction="right"
        className="slideMenu"
        customIdSuffix="my-drawer"
      >
        <Image
          onClick={toggleDrawer}
          src={Close}
          alt="close icon"
          className="closeIcon"
        />
        <ul className="containerLinksNavBar">
          <li
            onClick={() => handleNavigation("/")}
            className={path === "/" ? "colour" : ""}
          >
            <img src="./home.svg" alt="home icon" className="navIcon" />
            HOME
          </li>
          <li
            onClick={() => handleNavigation("/about")}
            className={path === "/about" ? "colour" : ""}
          >
            <img src="./about.svg" alt="about icon" className="navIcon" />
            ABOUT
          </li>
          <li
            onClick={() => handleNavigation("/projects")}
            className={path === "/projects" ? "colour" : ""}
          >
            <img src="./projects.svg" alt="projects icon" className="navIcon" />
            PROJECTS
          </li>
          <li
            onClick={() => handleNavigation("/experience&education")}
            className={path === "/experience&education" ? "colour" : ""}
          >
            <img
              src="./experience.svg"
              alt="education icon"
              className="navIcon"
            />
            EXPERIENCE & EDUCATION
          </li>
        </ul>
      </Drawer>
    </>
  );
};

export default BurgerMenu;
