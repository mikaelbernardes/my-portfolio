import { IconType } from "react-icons";
import {
  FaAngular,
  FaCss3Alt,
  FaHtml5,
  FaJs,
  FaNodeJs,
  FaPython,
  FaReact,
} from "react-icons/fa";
import { GrGraphQl } from "react-icons/gr";
import {
  SiApollographql,
  SiDjango,
  SiRedux,
  SiTypescript,
} from "react-icons/si";
interface IconInfo {
  icon: IconType;
  color: string;
}

function getIconByName(name: string): IconInfo | null {
  switch (name.toLowerCase()) {
    case "javascript":
      return { icon: FaJs, color: "#f0db4f" };
    case "html":
      return { icon: FaHtml5, color: "#F16529" };
    case "css":
      return { icon: FaCss3Alt, color: "#2862E9" };
    case "angular":
      return { icon: FaAngular, color: "#D6002F" };
    case "python":
      return { icon: FaPython, color: "#3675A8" };
    case "django":
      return { icon: SiDjango, color: "#113228" };
    case "typescript":
      return { icon: SiTypescript, color: "#3178c6" };
    case "nodejs":
      return { icon: FaNodeJs, color: "#68a063" };
    case "react":
      return { icon: FaReact, color: "#61dafb" };
    case "graphql":
      return { icon: GrGraphQl, color: "#F6009C" };
    case "apollo":
      return { icon: SiApollographql, color: "#FEEADB" };
    case "redux":
      return { icon: SiRedux, color: "#7248B6" };
    default:
      return null;
  }
}

export { getIconByName };
