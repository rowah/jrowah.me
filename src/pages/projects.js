import * as React from "react";
import Footer from "../components/footer";
import Layout from "../components/layout";
import Seo from "../components/seo";

const ProjectsPage = () => {
  return (
    <main>
      <Layout pageTitle="Projects">
        <p>These are some of my Projects</p>
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
export const Head = () => <Seo title="Projects" />;
export default ProjectsPage;
