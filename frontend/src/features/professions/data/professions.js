import { FaCode, FaServer, FaCogs, FaShieldAlt, FaChartLine } from 'react-icons/fa';

export const professions = [
  {
    profession: "Front-End Developer",
    icon: FaCode,
    color: "primary",
    link: "/FrontEndDeveloper"
  },
  {
    profession: "Back-End Developer",
    icon: FaServer,
    color: "success",
    link: "/BackEndDeveloper"
  },
  {
    profession: "DevOps Engineer",
    icon: FaCogs,
    color: "warning",
    link: "/DevOpsEngineer"
  },
  {
    profession: "Cybersecurity Analyst",
    icon: FaShieldAlt,
    color: "danger",
    link: "/CybersecurityAnalyst"
  },
  {
    profession: "Data Scientist",
    icon: FaChartLine,
    color: "info",
    link: "/DataScientist"
  }
];
