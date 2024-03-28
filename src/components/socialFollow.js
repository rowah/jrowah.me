import * as React from "react";
import { socialcontainer } from "../styles/layout.module.css";
const SocialFollow = ({ children }) => {
  return <div className={socialcontainer}>{children}</div>;
};

export default SocialFollow;
