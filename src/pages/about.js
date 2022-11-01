import * as React from "react";
import Layout from "../components/layout";
import { StaticImage } from "gatsby-plugin-image";
import { jrowah, aeso, intro } from "./about.module.css";
import Skills from "../components/skills";

const AboutPage = () => {
  return (
    <main>
      <Layout pageTitle="James Rowa">
        <h1>Software Developer</h1>
        <hr />
        <section className={intro}>
          <div className={aeso}>
            <p>
              Self and community taugh software developer from Nairobi, Kenya.{" "}
              <br /> Interests include AI, Data Science, and Object Oriented
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
        <h2>Skill Set ?</h2>
        <p>MERN stack developer with proficiency in:</p>
        <span>JavaScript ~ </span>&nbsp;<span> ReactJS ~ </span>&nbsp;
        <span>MongoDB ~</span>&nbsp;<span>NodeJS ~</span>&nbsp;
        <span>HTML ~</span>&nbsp;
        <span>CSS ~</span>&nbsp;<span> Tailwind</span>
        <h2>Fun Time ?</h2>
        <span>Cooking ~</span>&nbsp;<span>Chess ~</span>&nbsp;<span>Gym</span>
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
              <a href="https://github.com/rowah" class="icon brands fa-github">
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
      </Skills>
      <footer>Copyright Jrowah 2022</footer>
    </main>
  );
};
export const Head = () => <title>About Me</title>;
export default AboutPage;
