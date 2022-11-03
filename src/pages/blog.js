import * as React from "react";
import Layout from "../components/layout";
import Seo from "../components/seo";
import Footer from "../components/footer";
import { graphql } from "gatsby";

const BlogPage = ({ data }) => {
  return (
    <main>
      <Layout pageTitle="My Blog Posts">
        <div>
          {data.allMdx.nodes.map((node) => (
            <article key={node.id}>
              <h2>{node.frontmatter.title}</h2>
              <p>Posted: {node.frontmatter.date}</p>
            </article>
          ))}
        </div>
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
  query MyQuery {
    allMdx(sort: { fields: frontmatter___date, order: DESC }) {
      nodes {
        frontmatter {
          date(formatString: "MMMM D, YYYY")
          title
        }
        id
        excerpt
      }
    }
  }
`;
export const Head = () => <Seo pageTitle="My Blog Posts" />;
export default BlogPage;
