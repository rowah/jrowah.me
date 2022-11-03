import * as React from "react";
import Layout from "../components/layout";
import Footer from "../components/footer";

const IndexPage = () => {
  return (
    <main>
      <Layout pageTitle="My Journey">
        <p>My Journey into Tech</p>
        <p>100 DEVS!!!!!</p>
      </Layout>

      <Footer>
        <ul>
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

export default IndexPage;

export const Head = () => <title>Blog</title>;
