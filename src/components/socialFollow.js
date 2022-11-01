import * as React from "react";
import { socialcontainer, social } from "./layout.module.css";
const SocialFollow = ({ children }) => {
  return <div className={socialcontainer}>{children}</div>;
};

export default SocialFollow;
