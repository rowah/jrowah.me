import * as React from "react";
import { Link } from "gatsby";
import {
  container,
  heading,
  navLinks,
  navLinkItem,
  navLinkText,
} from "./layout.module.css";
import Favicon from "react-favicon";

const Layout = ({ pageTitle, children }) => {
  // const data = useStaticQuery(graphql`
  //   query {
  //     site {
  //       siteMetadata {
  //         title
  //       }
  //     }
  //   }
  // `);
  return (
    <div className={container}>
      <Favicon url="https://www.linkpicture.com/q/jr_1.png" />
      {/* <Favicon url="https://ibb.co/n7pTQqc" /> */}
      <nav>
        <ul className={navLinks}>
          <li className={navLinkItem}>
            <Link to="/" className={navLinkText} class="text-3xl text-blue-500">
              About
            </Link>
          </li>
          <li className={navLinkItem}>
            <Link
              to="/journey"
              className={navLinkText}
              class="text-3xl text-blue-500"
            >
              Journey
            </Link>
          </li>
          <li className={navLinkItem}>
            <Link
              to="/blog"
              className={navLinkText}
              class="text-3xl text-blue-500"
            >
              Blog
            </Link>
          </li>
        </ul>
      </nav>
      <main>
        <h1 className={heading} class="text-black text-3xl">
          {pageTitle}
        </h1>
        {children}
      </main>
    </div>
  );
};
export default Layout;
