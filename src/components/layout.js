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
              class="text-blue text-3xl flex items-center"
              activeClassName="pb-4 underline text-blue text-3xl flex items-center"
              // partiallyActive={true}
            >
              <span class="bg-blue-500 rounded-full w-9 h-9 mr-2 flex items-center justify-around">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="white"
                  class="w-5 h-5"
                >
                  <path d="M11.47 3.841a.75.75 0 0 1 1.06 0l8.69 8.69a.75.75 0 1 0 1.06-1.061l-8.689-8.69a2.25 2.25 0 0 0-3.182 0l-8.69 8.69a.75.75 0 1 0 1.061 1.06l8.69-8.689Z" />
                  <path d="m12 5.432 8.159 8.159c.03.03.06.058.091.086v6.198c0 1.035-.84 1.875-1.875 1.875H15a.75.75 0 0 1-.75-.75v-4.5a.75.75 0 0 0-.75-.75h-3a.75.75 0 0 0-.75.75V21a.75.75 0 0 1-.75.75H5.625a1.875 1.875 0 0 1-1.875-1.875v-6.198a2.29 2.29 0 0 0 .091-.086L12 5.432Z" />
                </svg>
              </span>
              <span>About Me</span>
            </Link>
          </li>
          <li class="pr-16">
            <Link
              to="/journey"
              class="text-blue text-3xl flex items-center"
              activeClassName="pb-1 border-b-2 border-black text-blue text-3xl flex items-center"
              // partiallyActive={true}
            >
              <span class="bg-blue-500 rounded-full w-9 h-9 mr-2 flex items-center justify-around">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="white"
                  class="w-5 h-5"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M2.25 18 9 11.25l4.306 4.306a11.95 11.95 0 0 1 5.814-5.518l2.74-1.22m0 0-5.94-2.281m5.94 2.28-2.28 5.941"
                  />
                </svg>
              </span>
              My Journey
            </Link>
          </li>
          <li class="pr-16">
            <Link
              to="/blog"
              class="text-blue text-3xl flex items-center"
              activeClassName="pb-1 border-b-2 border-black text-blue text-3xl flex items-center"
              // partiallyActive={true}
            >
              <span class="bg-blue-500 rounded-full w-9 h-9 mr-2 flex items-center justify-around">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="white"
                  class="w-5 h-5"
                >
                  <path d="M21.731 2.269a2.625 2.625 0 0 0-3.712 0l-1.157 1.157 3.712 3.712 1.157-1.157a2.625 2.625 0 0 0 0-3.712ZM19.513 8.199l-3.712-3.712-8.4 8.4a5.25 5.25 0 0 0-1.32 2.214l-.8 2.685a.75.75 0 0 0 .933.933l2.685-.8a5.25 5.25 0 0 0 2.214-1.32l8.4-8.4Z" />
                  <path d="M5.25 5.25a3 3 0 0 0-3 3v10.5a3 3 0 0 0 3 3h10.5a3 3 0 0 0 3-3V13.5a.75.75 0 0 0-1.5 0v5.25a1.5 1.5 0 0 1-1.5 1.5H5.25a1.5 1.5 0 0 1-1.5-1.5V8.25a1.5 1.5 0 0 1 1.5-1.5h5.25a.75.75 0 0 0 0-1.5H5.25Z" />
                </svg>
              </span>
              My Blog
            </Link>
          </li>
        </ul>
      </nav>
      <div class="flex justify-evenly space-x-2 mt-4">
        <span class="bg-gray-300 h-px flex-grow t-2 relative top-2"></span>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="gold"
          class="w-8 h-8 mt-[-4px]"
        >
          <path
            fill-rule="evenodd"
            d="M9 4.5a.75.75 0 0 1 .721.544l.813 2.846a3.75 3.75 0 0 0 2.576 2.576l2.846.813a.75.75 0 0 1 0 1.442l-2.846.813a3.75 3.75 0 0 0-2.576 2.576l-.813 2.846a.75.75 0 0 1-1.442 0l-.813-2.846a3.75 3.75 0 0 0-2.576-2.576l-2.846-.813a.75.75 0 0 1 0-1.442l2.846-.813A3.75 3.75 0 0 0 7.466 7.89l.813-2.846A.75.75 0 0 1 9 4.5ZM18 1.5a.75.75 0 0 1 .728.568l.258 1.036c.236.94.97 1.674 1.91 1.91l1.036.258a.75.75 0 0 1 0 1.456l-1.036.258c-.94.236-1.674.97-1.91 1.91l-.258 1.036a.75.75 0 0 1-1.456 0l-.258-1.036a2.625 2.625 0 0 0-1.91-1.91l-1.036-.258a.75.75 0 0 1 0-1.456l1.036-.258a2.625 2.625 0 0 0 1.91-1.91l.258-1.036A.75.75 0 0 1 18 1.5ZM16.5 15a.75.75 0 0 1 .712.513l.394 1.183c.15.447.5.799.948.948l1.183.395a.75.75 0 0 1 0 1.422l-1.183.395c-.447.15-.799.5-.948.948l-.395 1.183a.75.75 0 0 1-1.422 0l-.395-1.183a1.5 1.5 0 0 0-.948-.948l-1.183-.395a.75.75 0 0 1 0-1.422l1.183-.395c.447-.15.799-.5.948-.948l.395-1.183A.75.75 0 0 1 16.5 15Z"
            clip-rule="evenodd"
          />
        </svg>

        <span class="bg-gray-300 h-px flex-grow t-2 relative top-2"></span>
      </div>
      <main>
        <h1 class="text-black text-3xl">{pageTitle}</h1>
        {children}
      </main>
    </div>
  );
};
export default Layout;
