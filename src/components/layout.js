import * as React from "react";
import { Link } from "gatsby";
import {
  container,
  heading,
  navLinks,
  navLinkItem,
  navLinkText,
} from "./layout.module.css";

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
      {/* <header>{data.site.siteMetadata.title}</header> */}
      <nav>
        <ul className={navLinks}>
          <li className={navLinkItem}>
            <Link to="/" className={navLinkText}>
              About
            </Link>
          </li>
          <li className={navLinkItem}>
            <Link to="/journey">Journey</Link>
          </li>
          <li className={navLinkItem}>
            <Link to="/blog">Blogs</Link>
          </li>
        </ul>
      </nav>
      <main>
        <h1 className={heading}>{pageTitle}</h1>
        {children}
      </main>
    </div>
  );
};
export default Layout;
