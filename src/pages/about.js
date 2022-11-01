import * as React from "react";
import Layout from "../components/layout";
import { StaticImage } from "gatsby-plugin-image";
import { jrowah, aeso, intro, skillset } from "./about.module.css";
import Skills from "../components/skills";
import Footer from "../components/footer";

const AboutPage = () => {
  return (
    <main>
      <Layout pageTitle="James Rowa">
        <h1>Software Developer</h1>
        <hr />
        <section className={intro}>
          <div className={aeso}>
            <p>
              Self and community taught software developer from Nairobi, Kenya.{" "}
              <br /> Interested in AI, Data Science, and Object Oriented
              Programming.
              <br /> Professional biochemist, and educator. <br />
              Also a technical writer on{" "}
              <a href="https://medium.com/@jrowah">Medium</a>. <br />
              Check out my <a href="">Blog</a>. <br />
            </p>
            <p>
              Read about <a href="">My Journey</a> into Tech!
            </p>
          </div>
          <StaticImage
            alt="Jrowah's picture"
            src="../images/devjay.jpeg"
            className={jrowah}
          />
        </section>
        <hr />
      </Layout>
      <Skills>
        <div className={skillset}>
          <h2>Skill Set ?</h2>
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
            <strong>Tailwind</strong>
          </span>
          <h2>Fun Time ?</h2>
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
          <h2>Find Me On.....</h2>
          <div class="col-12">
            <ul class="social">
              <li>
                <a
                  href="https://twitter.com/Jrowah"
                  class="icon brands fa-twitter"
                >
                  <span class="label">Twitter</span>
                </a>
              </li>
              <li>
                <a
                  href="https://www.linkedin.com/in/james-rowa-7075/"
                  class="icon brands fa-linkedin-in"
                >
                  <span class="label">LinkedIn</span>
                </a>
              </li>
              <li>
                <a
                  href="https://www.instagram.com/jrowah/"
                  class="icon brands fa-instagram"
                >
                  <span class="label">Instagram</span>
                </a>
              </li>
              <li>
                <a
                  href="https://myaccount.google.com/profile"
                  class="icon brands fa-google-plus"
                >
                  <span class="label">Google+</span>
                </a>
              </li>

              <li>
                <a
                  href="https://github.com/rowah"
                  class="icon brands fa-github"
                >
                  <span class="label">Github</span>
                </a>
              </li>
              <li>
                <a
                  href="https://www.youtube.com/channel/UCEK7np5CO33sbDAmmR6UWHg"
                  class="icon brands fa-youtube"
                >
                  <span class="label">YouTube</span>
                </a>
              </li>
            </ul>
          </div>
          <p>
            <a href="https://docs.google.com/document/d/1FTQeq39RQMhv7aaWRh9Nxlp3MgQIy9O8/edit">
              Resume
            </a>
          </p>
        </div>
      </Skills>
      <Footer>
        <ul id="copyright">
          <li>
            Copyright &copy; Jrowah. All rights reserved. <span>2022</span>{" "}
            <span>
              <a href="#">Privacy Terms</a>
            </span>
          </li>
        </ul>
      </Footer>
    </main>
  );
};
export const Head = () => <title>About Me</title>;
export default AboutPage;
