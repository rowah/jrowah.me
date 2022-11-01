import * as React from "react";
import { footer } from "./layout.module.css";

const Footer = ({ children }) => {
  return <footer className={footer}> {children}</footer>;
};
export default Footer;
