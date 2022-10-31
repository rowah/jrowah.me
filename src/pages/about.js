import * as React from "react";
import Layout from "../components/layout";
import { StaticImage } from "gatsby-plugin-image";
import { jrowah, aeso } from "./about.module.css";

const AboutPage = () => {
  return (
    <main>
      <Layout pageTitle="James Rowa">
        <h1>Software Developer</h1>
        <hr />
        <section>
          <div className={aeso}>
            Self and community taugh software developer <br /> from Nairobi,
            Kenya. <br /> My interests include AI, Data Science, <br /> and
            Object Oriented Programming.
            <br /> I am also a professional biochemist, and an educator. <br />I
            am also a technical writer on Medium. <br />
            Check out my Blog. <br />
            Read about My Journey into Tech!
          </div>
          <StaticImage
            alt="Jrowah's picture"
            src="../images/devjay.jpeg"
            className={jrowah}
          />
        </section>
        <h2>Skill Set ?</h2>
        <p>I am a MERN stack developer with proficiency in the following:</p>
        <span>JavaScript ~ </span> <span>ReactJS ~ </span>{" "}
        <span>MongoDB ~ </span> <span>NodeJS ~ </span> <span>HTML ~ </span>{" "}
        <span>CSS ~ </span> <span>Tailwind</span>
        <hr />
      </Layout>
    </main>
  );
};
export const Head = () => <title>About Me</title>;
export default AboutPage;
