import * as React from "react";
import Footer from "../components/footer";
import Layout from "../components/layout";
import Seo from "../components/seo";
import { project } from "../components/layout.module.css";
import { StaticImage } from "gatsby-plugin-image";
// import Favicon from "react-favicon";

const ProjectsPage = () => {
  return (
    <main class="pt-4 pl-4">
      {/* <Favicon url="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRS8gkooPaNpNaUNStPjOaoRXlJgBheU0T8_w&usqp=CAU"></Favicon> */}
      <Layout pageTitle="Projects">
        <div className={project}>
          <p>PTracker</p>
          <a
            href="https://product-expiry-tracker.cyclic.app"
            target="_blank"
            rel="noopener noreferrer"
          >
            <StaticImage alt="Jrowah's picture" src="../images/track.png" />
          </a>
          <p>
            PTracker helps minimize westage that happen through disposal of
            expired goods by making it easy to track the expiry dates of
            products.
          </p>
        </div>
        <div className={project}>
          <p>Ayesha Salon website</p>
          <a
            href="https://saloun-website.netlify.app/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <StaticImage
              alt="Ayesha"
              src="https://images.pexels.com/photos/1987301/pexels-photo-1987301.jpeg?auto=compress&cs=tinysrgb&w=600"
            />
          </a>
          <p>
            This was a website that I built for a client who owned a berber shop
            and salon.
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
