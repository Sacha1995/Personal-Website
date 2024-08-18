"use client";
import useWindowDimensions from "@/utils/customHooks";
import BurgerMenu from "./BurgerMenu";
import SideMenu from "./SideMenu";
import NavigationIndicators from "@/components/navigation/NavigationIndicators";
import { useEffect, useState } from "react";

const NavigationItems = ({ refs }) => {
  const { width } = useWindowDimensions();
  const [activeSection, setActiveSection] = useState("");
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (typeof window !== "undefined") {
        const windowHeight = window.innerHeight;

        // Determine the current section
        for (const section in refs) {
          const ref = refs[section].current;
          const { top, bottom } = ref.getBoundingClientRect();
          if (top < windowHeight / 2 && bottom > windowHeight / 2) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    if (typeof window !== "undefined") {
      window.addEventListener("scroll", handleScroll);

      // Initial check in case the user is already scrolled
      handleScroll();

      return () => {
        window.removeEventListener("scroll", handleScroll);
      };
    }
  }, [refs]);

  useEffect(() => {
    setIsClient(true); // Set to true after the component mounts on the client
  }, []);

  if (!isClient) {
    return (
      <>
        <BurgerMenu />
        <NavigationIndicators />
      </>
    );
  }

  return (
    <>
      {width < 1000 && (
        <>
          <BurgerMenu refs={refs} activeSection={activeSection} />{" "}
          <NavigationIndicators refs={refs} activeSection={activeSection} />{" "}
        </>
      )}
      {width > 1000 && <SideMenu refs={refs} activeSection={activeSection} />}{" "}
    </>
  );
};

export default NavigationItems;
