import * as React from "react";
import Layout from "../../components/layout";
import Seo from "../../components/seo";
import Footer from "../../components/footer";
import { Link, graphql } from "gatsby";
import { blogs } from "../../pages/about.module.css";

const BlogPage = ({ data }) => {
  return (
    <main class="pl-4 pt-4">
      <Layout pageTitle="My Blog Posts">
        <div className={blogs}>
          {data.allMdx.nodes.map((node) => (
            <Link to={`/blog/${node.frontmatter.slug}`}>
              <article key={node.id}>
                <h2>{node.frontmatter.title}</h2>
                <hr />
                <p>Posted: {node.frontmatter.date}</p>
                <p>{node.excerpt}</p>
              </article>
            </Link>
          ))}
        </div>
      </Layout>
      <Footer>
        <ul id="copyright">
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
export const query = graphql`
  query MyQuery {
    allMdx(sort: { fields: frontmatter___date, order: DESC }) {
      nodes {
        frontmatter {
          date(formatString: "MMMM D, YYYY")
          title
          slug
        }
        id
        excerpt
      }
    }
  }
`;
export const Head = () => <Seo pageTitle="My Blog Posts" />;
export default BlogPage;
