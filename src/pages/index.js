import * as React from "react";
import Layout from "../components/layout";
import Footer from "../components/footer";

const IndexPage = () => {
  return (
    <main>
      <Layout pageTitle="Home Page">
        <p>This is my Portfolio Website</p>
      </Layout>
      <Footer>
        <ul>
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

export default IndexPage;

export const Head = () => <title>Home Page</title>;
