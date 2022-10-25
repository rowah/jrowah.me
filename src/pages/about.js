import * as React from "react";
import { Link } from "gatsby";

const AboutPage = () => {
  return (
    <main>
      <h1>About Me</h1>
      <p>
        Hello, my name is James Rowa. I am a self and community taugh software
        developer from Nairobi, Kenya.
      </p>
      <h2>Stack</h2>
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
      <Link to="/">Back to Home</Link>
    </main>
  );
};
export const Head = () => <title>About Me</title>;
export default AboutPage;
