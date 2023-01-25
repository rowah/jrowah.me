import * as React from "react";

const Footer = ({ children }) => {
  return (
    <footer className="pt-4">
      <ul id="copyright">
        <li>
          Copyright &copy; Jrowah. All rights reserved. <span>2023</span>{" "}
          <span>
            <a href="/privacy-policy" target="_blank" rel="noopener noreferrer">
              Privacy Terms
            </a>
          </span>
        </li>
      </ul>
    </footer>
  );
};
export default Footer;
