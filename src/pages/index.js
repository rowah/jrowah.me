import * as React from "react";
import { Link } from "gatsby";

const IndexPage = () => {
  return (
    <main>
      <h1>Hi, I'm James Rowa</h1>
      <Link to="/about">About</Link>
      <p>This is my Portfolio Website</p>
    </main>
  );
};

export default IndexPage;

export const Head = () => <title>Home Page</title>;
