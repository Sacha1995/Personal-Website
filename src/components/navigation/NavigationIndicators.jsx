const NavigationIndicators = ({ refs, activeSection }) => {
  const handleNavigation = (section) => {
    if (refs[section].current) {
      refs[section].current.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      <ul className="containerNavigationIndicators">
        <li
          onClick={() => handleNavigation("home")}
          className={activeSection === "home" ? "bgColour" : ""}
        ></li>
        <li
          onClick={() => handleNavigation("skills")}
          className={activeSection === "skills" ? "bgColour" : ""}
        ></li>
        <li
          onClick={() => handleNavigation("projects")}
          className={activeSection === "projects" ? "bgColour" : ""}
        ></li>
        <li
          onClick={() => handleNavigation("experience")}
          className={activeSection === "experience" ? "bgColour" : ""}
        ></li>
        <li
          onClick={() => handleNavigation("contact")}
          className={activeSection === "contact" ? "bgColour" : ""}
        ></li>
      </ul>
    </>
  );
};

export default NavigationIndicators;
