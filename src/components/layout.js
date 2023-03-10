import * as React from "react";
import { Link } from "gatsby";
// import container from // navLinks,
// // navLinkItem,
// // navLinkText,
// "./layout.module.css";
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
    <div class="m-auto border-solid max-w-screen-xl">
      <Favicon url="https://www.linkpicture.com/q/jr_1.png" />
      {/* <Favicon url="https://ibb.co/n7pTQqc" /> */}
      <nav>
        <ul class="flex justify-center list-none pl-0">
          <li class="pr-16">
            <Link
              to="/"
              // className={navLinkText}
              class="text-blue text-3xl"
              activeClassName="underline text-blue text-3xl"
              // partiallyActive={true}
            >
              About
            </Link>
          </li>
          <li class="pr-16">
            <Link
              to="/journey"
              class="text-blue text-3xl"
              activeClassName="underline text-blue text-3xl"
              // partiallyActive={true}
            >
              Journey
            </Link>
          </li>
          <li class="pr-16">
            <Link
              to="/blog"
              class="text-blue text-3xl"
              activeClassName="underline text-blue text-3xl"
              // partiallyActive={true}
            >
              Blog
            </Link>
          </li>
        </ul>
      </nav>
      <main>
        <h1 class="text-black text-3xl">{pageTitle}</h1>
        {children}
      </main>
    </div>
  );
};
export default Layout;
