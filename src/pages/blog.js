import * as React from "react";
import Layout from "../components/layout";
import Seo from "../components/seo";
import Footer from "../components/footer";
import { graphql } from "gatsby";

const BlogPage = ({ data }) => {
  return (
    <main>
      <Layout pageTitle="My Blog Posts">
        <p>Here is where I am going to have my blog posts</p>
        <ul>
          {data.allFile.nodes.map((node) => (
            <li key={node.name}>{node.name}</li>
          ))}
        </ul>
      </Layout>
      <Footer>
        <ul id="copyright">
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
export const query = graphql`
  query {
    allFile {
      nodes {
        name
      }
    }
  }
`;
export const Head = () => <Seo pageTitle="My Blog Posts" />;
export default BlogPage;
