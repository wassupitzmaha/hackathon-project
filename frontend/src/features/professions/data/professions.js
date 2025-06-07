import { FaCode, FaServer, FaCogs, FaShieldAlt, FaChartLine, FaPaintBrush, FaRobot, FaCloud, FaMobileAlt, FaLayerGroup } from 'react-icons/fa';

export const professions = [
  {
    profession: "Front-End Developer",
    icon: FaCode,
    color: "primary",
    link: "/FrontEndDeveloper",
    skills: ["HTML", "CSS", "JavaScript"]
  },
  {
    profession: "Back-End Developer",
    icon: FaServer,
    color: "success",
    link: "/BackEndDeveloper",
    skills: ["Node.js", "Express", "Python"]
  },
  {
    profession: "DevOps Engineer",
    icon: FaCogs,
    color: "warning",
    link: "/DevOpsEngineer",
    skills: ["AWS", "Azure", "CI/CD"]
  },
  {
    profession: "Cybersecurity Analyst",
    icon: FaShieldAlt,
    color: "danger",
    link: "/CybersecurityAnalyst",
    skills: ["Network Security", "Firewalls", "SIEM"]
  },
  {
    profession: "Data Scientist",
    icon: FaChartLine,
    color: "info",
    link: "/DataScientist",
    skills: ["Python", "R", "SQL"]
  },
  // --- Additional Professions ---
  {
    profession: "UI/UX Designer",
    icon: FaPaintBrush,
    color: "secondary",
    link: "/UIUXDesigner",
    skills: ["Figma", "Sketch", "Adobe XD"]
  },
  {
    profession: "Machine Learning Engineer",
    icon: FaRobot,
    color: "dark",
    link: "/MachineLearningEngineer",
    skills: ["Python", "TensorFlow", "PyTorch"]
  },
  {
    profession: "Cloud Engineer",
    icon: FaCloud,
    color: "primary",
    link: "/CloudEngineer",
    skills: ["AWS", "Azure", "GCP"]
  },
  {
    profession: "Mobile App Developer",
    icon: FaMobileAlt,
    color: "success",
    link: "/MobileAppDeveloper",
    skills: ["Swift", "Kotlin", "React Native"]
  },
  {
    profession: "Full-Stack Developer",
    icon: FaLayerGroup,
    color: "info",
    link: "/FullStackDeveloper",
    skills: ["HTML", "CSS", "JavaScript"]
  }
];
