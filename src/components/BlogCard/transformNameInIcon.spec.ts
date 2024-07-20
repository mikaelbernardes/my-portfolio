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

import { getIconByName } from "./transformNameInIcon";

describe("getIconByName", () => {
  it("should return the correct icon and color for 'javascript'", () => {
    const result = getIconByName("javascript");
    expect(result).toEqual({ icon: FaJs, color: "#f0db4f" });
  });

  it("should return the correct icon and color for 'html'", () => {
    const result = getIconByName("html");
    expect(result).toEqual({ icon: FaHtml5, color: "#F16529" });
  });

  it("should return the correct icon and color for 'css'", () => {
    const result = getIconByName("css");
    expect(result).toEqual({ icon: FaCss3Alt, color: "#2862E9" });
  });

  it("should return the correct icon and color for 'angular'", () => {
    const result = getIconByName("angular");
    expect(result).toEqual({ icon: FaAngular, color: "#D6002F" });
  });

  it("should return the correct icon and color for 'python'", () => {
    const result = getIconByName("python");
    expect(result).toEqual({ icon: FaPython, color: "#3675A8" });
  });

  it("should return the correct icon and color for 'django'", () => {
    const result = getIconByName("django");
    expect(result).toEqual({ icon: SiDjango, color: "#113228" });
  });

  it("should return the correct icon and color for 'typescript'", () => {
    const result = getIconByName("typescript");
    expect(result).toEqual({ icon: SiTypescript, color: "#3178c6" });
  });

  it("should return the correct icon and color for 'nodejs'", () => {
    const result = getIconByName("nodejs");
    expect(result).toEqual({ icon: FaNodeJs, color: "#68a063" });
  });

  it("should return the correct icon and color for 'react'", () => {
    const result = getIconByName("react");
    expect(result).toEqual({ icon: FaReact, color: "#61dafb" });
  });

  it("should return the correct icon and color for 'graphql'", () => {
    const result = getIconByName("graphql");
    expect(result).toEqual({ icon: GrGraphQl, color: "#F6009C" });
  });

  it("should return the correct icon and color for 'apollo'", () => {
    const result = getIconByName("apollo");
    expect(result).toEqual({ icon: SiApollographql, color: "#FEEADB" });
  });

  it("should return the correct icon and color for 'redux'", () => {
    const result = getIconByName("redux");
    expect(result).toEqual({ icon: SiRedux, color: "#7248B6" });
  });

  it("should return null for an unknown name", () => {
    const result = getIconByName("unknown");
    expect(result).toBeNull();
  });
});
