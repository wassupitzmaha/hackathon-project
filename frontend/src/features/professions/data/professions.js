
import { //importing various icons from react-icons/fa
  FaCode,
  FaServer,
  FaCogs,
  FaShieldAlt,
  FaChartLine,
  FaPaintBrush,
  FaRobot,
  FaCloud,
  FaMobileAlt,
  FaLayerGroup
} from 'react-icons/fa';

export const professions = [ //exports an array of javascript objects
  {
    profession: "Front-End Developer", //Name of the profession
    icon: FaCode, //imported react icon component itself, allows ProfessionSearch to dynamically render the icon
    color: "primary", //bootstrap color variant for buttons 
    link: "/FrontEndDeveloper", //the frontend route for this profession's detailed page
    background: "linear-gradient(120deg, #e0c3fc 0%, #8ec5fc 100%)", //CSS background gradient
    iconBg: "#8ec5fc22", //background color for the icon circle
    description: "Build beautiful, interactive user interfaces using modern web technologies.", //short description
    skills: ["HTML", "CSS", "JavaScript"] //example catds (displayed on the card, not fetched from DB)
  },

  //other profession objects follow similar structure ....

  {
    profession: "Back-End Developer",
    icon: FaServer,
    color: "success",
    link: "/BackEndDeveloper",
    background: "linear-gradient(120deg, #f093fb 0%, #f5576c 100%)",
    iconBg: "#f093fb22",
    description: "Design and maintain the server, database, and application logic.",
    skills: ["Node.js", "Express", "Python"]
  },
  {
    profession: "DevOps Engineer",
    icon: FaCogs,
    color: "warning",
    link: "/DevOpsEngineer",
    background: "linear-gradient(120deg, #43e97b 0%, #38f9d7 100%)",
    iconBg: "#43e97b22",
    description: "Automate, monitor, and optimize software delivery and infrastructure.",
    skills: ["AWS", "Azure", "CI/CD"]
  },
  {
    profession: "Cybersecurity Analyst",
    icon: FaShieldAlt,
    color: "danger",
    link: "/CybersecurityAnalyst",
    background: "linear-gradient(120deg, #f7971e 0%, #ffd200 100%)",
    iconBg: "#ffd20022",
    description: "Protect systems and data from cyber threats and vulnerabilities.",
    skills: ["Network Security", "Firewalls", "SIEM"]
  },
  {
    profession: "Data Scientist",
    icon: FaChartLine,
    color: "info",
    link: "/DataScientist",
    background: "linear-gradient(120deg, #56ccf2 0%, #2f80ed 100%)",
    iconBg: "#56ccf222",
    description: "Extract insights from data using statistical and machine learning techniques.",
    skills: ["Python", "R", "SQL"]
  },
  {
    profession: "UI/UX Designer",
    icon: FaPaintBrush,
    color: "secondary",
    link: "/UIUXDesigner",
    background: "linear-gradient(120deg, #f8ffae 0%, #43cea2 100%)",
    iconBg: "#43cea222",
    description: "Design intuitive and engaging digital experiences for users.",
    skills: ["Figma", "Sketch", "Adobe XD"]
  },
  {
    profession: "Machine Learning Engineer",
    icon: FaRobot,
    color: "dark",
    link: "/MachineLearningEngineer",
    background: "linear-gradient(120deg, #30cfd0 0%, #330867 100%)",
    iconBg: "#33086722",
    description: "Build intelligent systems that learn from data and make predictions.",
    skills: ["Python", "TensorFlow", "PyTorch"]
  },
  {
    profession: "Cloud Engineer",
    icon: FaCloud,
    color: "primary",
    link: "/CloudEngineer",
    background: "linear-gradient(120deg, #a1c4fd 0%, #c2e9fb 100%)",
    iconBg: "#a1c4fd22",
    description: "Develop and maintain scalable cloud infrastructure and services.",
    skills: ["AWS", "Azure", "GCP"]
  },
  {
    profession: "Mobile App Developer",
    icon: FaMobileAlt,
    color: "success",
    link: "/MobileAppDeveloper",
    background: "linear-gradient(120deg, #fbc2eb 0%, #a6c1ee 100%)",
    iconBg: "#a6c1ee22",
    description: "Create engaging mobile applications for iOS and Android platforms.",
    skills: ["Swift", "Kotlin", "React Native"]
  },
  {
    profession: "Full-Stack Developer",
    icon: FaLayerGroup,
    color: "info",
    link: "/FullStackDeveloper",
    background: "linear-gradient(120deg, #fdc830 0%, #f37335 100%)",
    iconBg: "#fdc83022",
    description: "Work across the stack to build robust and scalable web applications.",
    skills: ["HTML", "CSS", "JavaScript"]
  }
];

