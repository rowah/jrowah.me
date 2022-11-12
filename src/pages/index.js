// Step 1: Import React
import * as React from "react";
import Layout from "../components/layout";
import { StaticImage } from "gatsby-plugin-image";
import Seo from "../components/seo";
import {
  jrowah,
  aeso,
  intro,
  skillset,
  // linkedin,
  // youtube,
  // github,
  // twitter,
  // instagram,
  // medium,
  links,
} from "./about.module.css";
import Skills from "../components/skills";
import Footer from "../components/footer";
import SocialFollow from "../components/socialFollow";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import {
//   faYoutube,
//   faTwitter,
//   faInstagram,
//   faMedium,
//   faGithub,
//   faLinkedin,
// } from "@fortawesome/free-brands-svg-icons";
// import Favicon from "react-favicon";

// Step 2: Define your component
const AboutPage = () => {
  return (
    <main class="pl-4 pt-4">
      <Layout pageTitle="James Rowa - Software Developer">
        <hr />
        <section className={intro}>
          <div className={aeso}>
            <p>
              Self and community taught software developer from Nairobi, Kenya.{" "}
              <br /> Interested in AI, Data Science, Functional and Object
              Oriented Programming.
              <br />
              <br /> Professional biochemist, and educator. <br />
              Also a technical writer on{" "}
              <a
                className={links}
                href="https://medium.com/@jrowah"
                target="_blank"
                rel="noopener noreferrer"
              >
                Medium
              </a>
              . <br />
              Check out my{" "}
              <a className={links} href="/projects">
                Projects
              </a>
              . <br />
            </p>
            <br />
            <p>
              Read about{" "}
              <a className={links} href="/journey">
                My Journey
              </a>{" "}
              into Tech!
            </p>
          </div>
          <StaticImage
            alt="Jrowah's picture"
            src="../images/devjay.png"
            className={jrowah}
          />
        </section>
        <hr />
      </Layout>
      <Skills>
        <div className={skillset}>
          <h2 class="text-2xl mt-4">Skill Set ?</h2>
          <p>MERN stack developer with proficiency in:</p>
          <span>
            <strong>JavaScript</strong> ~{" "}
          </span>
          &nbsp;
          <span>
            <strong>ReactJS</strong> ~{" "}
          </span>
          &nbsp;
          <span>
            <strong>MongoDB</strong> ~
          </span>
          &nbsp;
          <span>
            <strong>NodeJS</strong> ~
          </span>
          &nbsp;
          <span>
            <strong>HTML</strong> ~
          </span>
          &nbsp;
          <span>
            <strong>CSS</strong> ~
          </span>
          &nbsp;
          <span>
            {" "}
            <strong>Tailwind</strong> ~
          </span>
          &nbsp;
          <span>
            {" "}
            <strong>Elixir (currently learning)</strong>
          </span>
          <h2 class="text-2xl mt-4">Fun Time ?</h2>
          <span>
            <strong>Cooking</strong> ~
          </span>
          &nbsp;
          <span>
            <strong>Chess</strong> ~
          </span>
          &nbsp;
          <span>
            <strong>Gyming</strong>
          </span>
          <p class="text-2xl mt-2 text-blue-700">
            <a
              href="https://drive.google.com/file/d/1ofgxq3MV0ODsi8qMP7lLieHfpfoTzEdm/view?usp=share_link"
              target="_blank"
              rel="noopener noreferrer"
            >
              Resume
            </a>
          </p>
        </div>
        <SocialFollow>
          <h2 class="text-2xl mt-4">Find Me On.....</h2>
          {/* <a
            href="https://www.linkedin.com/in/james-rowa/"
            target="_blank"
            rel="noopener noreferrer"
            className={linkedin}
          >
            <FontAwesomeIcon icon={faLinkedin} size="2x" />
          </a>
          <a
            href="https://www.youtube.com/channel/UCEK7np5CO33sbDAmmR6UWHg"
            target="_blank"
            rel="noopener noreferrer"
            className={youtube}
          >
            <FontAwesomeIcon icon={faYoutube} size="2x" />
          </a>
          <a
            href="https://github.com/rowah"
            target="_blank"
            rel="noopener noreferrer"
            className={github}
          >
            <FontAwesomeIcon icon={faGithub} size="2x" />
          </a>
          <a
            href="https://twitter.com/Jrowah"
            target="_blank"
            rel="noopener noreferrer"
            className={twitter}
          >
            <FontAwesomeIcon icon={faTwitter} size="2x" />
          </a>
          <a
            href="https://www.instagram.com/jrowah/"
            target="_blank"
            rel="noopener noreferrer"
            className={instagram}
          >
            <FontAwesomeIcon icon={faInstagram} size="2x" />
          </a>
          <a
            href="https://medium.com/@jrowah"
            target="_blank"
            rel="noopener noreferrer"
            className={medium}
          >
            <FontAwesomeIcon icon={faMedium} size="2x" />
          </a> */}
        </SocialFollow>
      </Skills>
      <Footer>
        <ul id="copyright">
          <li>
            Copyright &copy; Jrowah. All rights reserved. <span>2022</span>{" "}
            <span>
              <a
                href="/privacy-policy"
                target="_blank"
                rel="noopener noreferrer"
              >
                Privacy Terms
              </a>
            </span>
          </li>
        </ul>
      </Footer>
    </main>
  );
};

// You'll learn about this in the next task, just copy it for now
export const Head = () => <Seo title="About" />;

// Step 3: Export your component
export default AboutPage;
