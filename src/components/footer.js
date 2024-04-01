import * as React from "react";

const Footer = () => {
  const year = new Date();
  let thisYear = year.getFullYear();
  return (
    <footer class="w-full md:w-3/4 text-center bg-white pt-2">
      <ul id="copyright">
        <li>
          Copyright &copy; Jrowah. All rights reserved. <span>{thisYear}</span>{" "}
          <span>
            <a
              href="/privacy-policy"
              target="_blank"
              rel="noopener noreferrer"
              class="text-blue"
            >
              Privacy Terms
            </a>
          </span>
        </li>
      </ul>
    </footer>
  );
};
export default Footer;
