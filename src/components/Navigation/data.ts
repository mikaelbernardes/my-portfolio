import EUAFlag from "@public/american-flag.svg";
import BrazilianFlag from "@public/brazilian-flag.svg";
import { StaticImport } from "next/dist/shared/lib/get-img-props";
import { IconType } from "react-icons";
import { FaFolderOpen, FaPhone, FaUser } from "react-icons/fa";
import { FaFile, FaHouse } from "react-icons/fa6";
import { IoIosGitNetwork } from "react-icons/io";

export const NavigationItems: {
  icon: IconType;
  brazilianName: string;
  americanName: string;
  link: string;
}[] = [
  {
    icon: FaHouse,
    americanName: "Home",
    brazilianName: "Início",
    link: "#home",
  },
  {
    icon: IoIosGitNetwork,
    americanName: "Projects",
    brazilianName: "Projetos",
    link: "#projects",
  },
  {
    icon: FaUser,
    americanName: "About me",
    brazilianName: "Sobre mim",
    link: "#about",
  },
  {
    icon: FaFolderOpen,
    americanName: "Resume",
    brazilianName: "Currículo",
    link: "#resume",
  },
  {
    icon: FaFile,
    americanName: "Blog",
    brazilianName: "Blog",
    link: "#blog",
  },
  {
    icon: FaPhone,
    americanName: "Contacts",
    brazilianName: "Contatos",
    link: "#contacts",
  },
];

export const countryFlag: {
  img: StaticImport;
  americanName: string;
  brazilianName: string;
  language: string;
}[] = [
  {
    img: EUAFlag,
    americanName: "Change English Language",
    brazilianName: "Mudar Idioma para Inglês",
    language: "en",
  },
  {
    img: BrazilianFlag,
    americanName: "Change Portuguese Language",
    brazilianName: "Mudar Idioma para Português",
    language: "pt-BR",
  },
];
