import * as React from "react";
import Layout from "../components/layout";

const AboutPage = () => {
  return (
    <main>
      <Layout pageTitle="James Rowa">
        <h1>Software Developer</h1>
        <hr />
        <p>
          Hello, my name is James Rowa.
          <br /> I am a self and community taugh software developer from
          Nairobi, Kenya. <br /> My interests include AI, Data Science, Object
          Oriented Programming.
          <br /> I am also a professional biochemist, and an educator.
        </p>
        <p>
          I am also a technical writer on Medium. <br />
          Check out my Blog. <br />
          Read about My Journey into Tech!
        </p>
        <h2>Skill Set</h2>
        <p>I am a MERN stack developer with proficiency in the following:</p>
        <ul>
          <li>JavaScript</li>
          <li>ReactJS</li>
          <li>MongoDB</li>
          <li>NodeJS</li>
          <li>HTML</li>
          <li>CSS</li>
          <li>Tailwind</li>
        </ul>
        <hr />
      </Layout>
    </main>
  );
};
export const Head = () => <title>About Me</title>;
export default AboutPage;
