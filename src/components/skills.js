import * as React from "react";
import { container } from "./layout.module.css";

const Skills = ({ children }) => {
  return <section className={container}>{children}</section>;
};

export default Skills;
