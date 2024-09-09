const SideMenuItem = ({
  handleNavigation,
  section,
  title,
  src,
  alt,
  activeSection,
}) => {
  return (
    <li
      onClick={() => handleNavigation(section)}
      tabIndex="0"
      className="sideMenuItem"
      onKeyDown={(e) => {
        if (e.key === "Enter") {
          handleNavigation(section);
        }
      }}
    >
      <span className="sideMenuName">{title}</span>
      <div
        className={`containerIcon ${
          activeSection === section ? "bgColour" : ""
        }`}
      >
        <img src={src} alt={alt} className="navIcon" />
      </div>
    </li>
  );
};

export default SideMenuItem;
