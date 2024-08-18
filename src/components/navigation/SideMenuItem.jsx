const SideMenuItem = ({
  handleNavigation,
  section,
  title,
  src,
  alt,
  activeSection,
}) => {
  return (
    <li onClick={() => handleNavigation(section)} className="sideMenuItem">
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
