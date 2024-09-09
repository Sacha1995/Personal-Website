import Technologies from "./components/skills/Technologies";

export const softWareSkills = [
  { title: "React", value: "80%" },
  { title: "TypeScript", value: "70%" },
  { title: "JavaScript", value: "80%" },
  { title: "SASS", value: "80%" },
  { title: "HTML5", value: "80%" },
  { title: "CSS3", value: "90%" },
  { title: "Node", value: "75%" },
  { title: "Git", value: "65%" },
  { title: "Responsive Design", value: "90%" },
  { title: "Redux", value: "80%" },
  { title: "Animations", value: "60%" },
];

export const softSkills = [
  { title: "Organisation", value: "100%" },
  { title: "Time Management", value: "100%" },
  { title: "Word/PP", value: "95%" },
  { title: "Communication", value: "95%" },
  { title: "Problem Solving", value: "100%" },
  { title: "Teamwork", value: "100%" },
];

export const colours = [
  { hex: "#bd2317", colour: "red" },
  { hex: "#fa5b0f", colour: "orange" },
  { hex: "#ffb400", colour: "yellow" },
  { hex: "#72b626", colour: "green" },
  { hex: "#4169e1", colour: "blue" },
  { hex: "#6957af", colour: "purple" },
  { hex: "#ee6192", colour: "pink" },
];

export const sideMenuItems = [
  { section: "home", title: "HOME", src: "./home.svg", alt: "home icon" },
  {
    section: "skills",
    title: "SKILLS",
    src: "./about.svg",
    alt: "skills icon",
  },
  {
    section: "projects",
    title: "PROJECTS",
    src: "./projects.svg",
    alt: "projects icon",
  },
  {
    section: "experience",
    title: "EXPERIENCE & EDUCATION",
    src: "./experience.svg",
    alt: "experience icon",
  },
  {
    section: "contact",
    title: "CONTACT",
    src: "./email.svg",
    alt: "email icon",
  },
];

export const technologiesInfo = [
  { name: "JavaScript", src: "./javascript.png", alt: "JavaScript logo" },
  { name: "React", src: "./react.png", alt: "React logo" },
  { name: "SASS", src: "./sass.png", alt: "SASS logo" },
  { name: "HTML5", src: "./html.png", alt: "html logo" },
  { name: "CSS", src: "./css.png", alt: "css logo" },
  { name: "Node", src: "./node.png", alt: "node logo" },
  { name: "MongoDB", src: "./mongo.png", alt: "Mongo logo" },
  { name: "SQL", src: "./sql.png", alt: "SQL logo" },
  { name: "mySQL", src: "./mysql.png", alt: "mySQL logo" },
  { name: "Git", src: "./git.png", alt: "git logo" },
  { name: "Vite", src: "./vite.png", alt: "vite logo" },
  { name: "Express", src: "./express.png", alt: "express logo" },
  { name: "Next-JS", src: "./nextjs.svg", alt: "Next-JS logo" },
  { name: "Day.JS", src: "./dayjs.png", alt: "Day.js logo" },
  { name: "Date-fns", src: "./datefns.png", alt: "Date-fns logo" },
  { name: "GSAP", src: "./GSAP.png", alt: "GSAP logo" },
  { name: "Framer Motion", src: "./motion.png", alt: "Framer Motion logo" },
  { name: "Bootstrap", src: "./bootstrap.svg", alt: "Bootstrap logo" },
  { name: "Tailwind", src: "./tailwind.png", alt: "Tailwind logo" },
  { name: "Bulma", src: "./bulma.png", alt: "Bulma logo" },
  { name: "Joi", src: "./joi.png", alt: "Joi logo" },
  { name: "MUI", src: "./mui.png", alt: "MUIsha 256  logo" },
];

export const carouselItemsInfo = [
  {
    id: 1,
    title: "HoliDough",
    src: "./general.png",
    alt: "holidough screenshots",
    description: "With my colleagues I created a holiday budgeting app.",
    technologies: ["SASS", "React", "Redux", "Javascript"],
  },
  {
    id: 2,
    title: "Sign up & Log in",
    src: "./holidough-sign.png",
    alt: "holidough sign up and log in screenshots",
    description:
      "Users can sign up and log in. Authentication is handled through token validation and user input is validated with Joi.",
    technologies: ["Joi", "Express", "mySQL", "React Toastify"],
  },
  {
    id: 3,
    title: "Profile set up",
    src: "./profilesetup.png",
    alt: "holidough profile set up screenshots",
    description:
      "Set up your own profile with a username and profile picture taken with you camera or uploaded.",
    technologies: ["React Cropper", "React Webcam", "Framer.Motion"],
  },
  {
    id: 4,
    title: "Onboarding",
    src: "./onboarding.png",
    alt: "holidough screenshots",
    description:
      "Add your trip with your budget spread over categories using handy sliders.",
    technologies: ["Material UI", "Javascript", "Joi", "React"],
  },
  {
    id: 5,
    title: "Track budget and add expenses",
    src: "./general.png",
    alt: "holidough screenshots",
    description:
      "Add your expenses whilst travelling and let the app convert and keep track of your budget.",
    technologies: ["API", "Axios", "Redux Toolkit with Persist", "NanoId"],
  },
  {
    id: 6,
    title: "Expenses and planning",
    src: "./expensesandfuture.png",
    alt: "holidough bill splits screenshots",
    description:
      "Expenses can be multiple days, be split with other people and added for the future to not only track your budget but plan it with greater detail.",
    technologies: ["SASS", "Javascript", "REACT", "GSAP"],
  },
  {
    id: 7,
    title: "Daily budget",
    src: "./dailybudget.png",
    alt: "holidough daily budget screenshots",
    description:
      "Throughout the day fill in your expenses and see how much money you have left for that day.",
    technologies: ["Chart JS", "GSAP", "React", "SASS"],
  },
  {
    id: 8,
    title: "Bill Splits",
    src: "./billsplits.png",
    alt: "holidough bill splits screenshots",
    description:
      "Add split expenses to keep track of your expenses with friends/family.",
    technologies: ["SASS", "Javascript", "REACT", "Chart JS"],
  },
];
