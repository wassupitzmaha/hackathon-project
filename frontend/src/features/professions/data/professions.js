import { FaCode, FaServer, FaCogs, FaShieldAlt, FaChartLine, FaPaintBrush, FaRobot, FaCloud, FaMobileAlt, FaLayerGroup } from 'react-icons/fa';

export const professions = [
  {
    profession: "Front-End Developer",
    icon: FaCode,
    color: "primary",
    link: "/FrontEndDeveloper",
    background: "linear-gradient(120deg, #e0c3fc 0%, #8ec5fc 100%)",
    skills: ["HTML", "CSS", "JavaScript"]
  },
  {
    profession: "Back-End Developer",
    icon: FaServer,
    color: "success",
    link: "/BackEndDeveloper",
    background: "linear-gradient(120deg, #f093fb 0%, #f5576c 100%)",
    skills: ["Node.js", "Express", "Python"]
  },
  {
    profession: "DevOps Engineer",
    icon: FaCogs,
    color: "warning",
    link: "/DevOpsEngineer",
    background: "linear-gradient(120deg, #43e97b 0%, #38f9d7 100%)",
    skills: ["AWS", "Azure", "CI/CD"]
  },
  {
    profession: "Cybersecurity Analyst",
    icon: FaShieldAlt,
    color: "danger",
    link: "/CybersecurityAnalyst",
    background: "linear-gradient(120deg, #f7971e 0%, #ffd200 100%)",
    skills: ["Network Security", "Firewalls", "SIEM"]
  },
  {
    profession: "Data Scientist",
    icon: FaChartLine,
    color: "info",
    link: "/DataScientist",
    background: "linear-gradient(120deg, #56ccf2 0%, #2f80ed 100%)",
    skills: ["Python", "R", "SQL"]
  },
  {
    profession: "UI/UX Designer",
    icon: FaPaintBrush,
    color: "secondary",
    link: "/UIUXDesigner",
    background: "linear-gradient(120deg, #f8ffae 0%, #43cea2 100%)",
    skills: ["Figma", "Sketch", "Adobe XD"]
  },
  {
    profession: "Machine Learning Engineer",
    icon: FaRobot,
    color: "dark",
    link: "/MachineLearningEngineer",
    background: "linear-gradient(120deg, #30cfd0 0%, #330867 100%)",
    skills: ["Python", "TensorFlow", "PyTorch"]
  },
  {
    profession: "Cloud Engineer",
    icon: FaCloud,
    color: "primary",
    link: "/CloudEngineer",
    background: "linear-gradient(120deg, #a1c4fd 0%, #c2e9fb 100%)",
    skills: ["AWS", "Azure", "GCP"]
  },
  {
    profession: "Mobile App Developer",
    icon: FaMobileAlt,
    color: "success",
    link: "/MobileAppDeveloper",
    background: "linear-gradient(120deg, #fbc2eb 0%, #a6c1ee 100%)",
    skills: ["Swift", "Kotlin", "React Native"]
  },
  {
    profession: "Full-Stack Developer",
    icon: FaLayerGroup,
    color: "info",
    link: "/FullStackDeveloper",
    background: "linear-gradient(120deg, #fdc830 0%, #f37335 100%)",
    skills: ["HTML", "CSS", "JavaScript"]
  }
];
