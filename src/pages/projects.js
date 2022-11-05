import * as React from "react";
import Footer from "../components/footer";
import Layout from "../components/layout";
import Seo from "../components/seo";
import { container } from "../components/layout.module.css";

const ProjectsPage = () => {
  return (
    <main>
      <Layout pageTitle="Projects">
        <div className={container}>
          <a
            href="https://product-expiry-tracker.cyclic.app"
            target="_blank"
            rel="noopener noreferrer"
          >
            PTracker
          </a>
          <p>
            PTracker helps minimize westage through disposal of expired goods by
            making it easy to track the expiry dates of products.
          </p>
        </div>
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
export const Head = () => <Seo title="Projects" />;
export default ProjectsPage;
