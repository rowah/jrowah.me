import * as React from "react";
import Layout from "../../components/layout";
import Seo from "../../components/seo";
import Footer from "../../components/footer";
import { Link, graphql } from "gatsby";

const BlogPage = ({ data }) => {
  return (
    <main class="pt-4 pl-4">
      <Layout>
        <h1 class="text-3xl font-semibold text-gray-800 capitalize lg:text-3xl dark:text-white pt-8">
          My Blog
        </h1>
      </Layout>
      <section class="bg-white dark:bg-gray-900">
        <div class="container px-6 py-10  mx-auto">
          <div class="grid grid-cols-1 gap-8 mt-8 md:mt-16 md:grid-cols-2">
            {data.allMdx.nodes.map((node) => (
              <div class="lg:flex" key={node.id}>
                <img
                  class="w-full h-56 rounded-lg lg:w-64"
                  src={node.frontmatter.hero_image_credit_link}
                  alt=""
                />
                <div class="flex flex-col justify-between py-6 lg:mx-6">
                  <Link to={`/blog/${node.frontmatter.slug}`}>
                    <a
                      href={`/blog/${node.frontmatter.slug}`}
                      class="text-xl font-semibold text-gray-800 hover:underline dark:text-white "
                    >
                      {node.frontmatter.title}
                    </a>
                    <hr />
                  </Link>

                  <span class="text-sm text-gray-500 dark:text-gray-300">
                    Posted On: {node.frontmatter.date}
                  </span>
                  <p>{node.excerpt}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
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
    allMdx(sort: { frontmatter: { date: DESC } }) {
      nodes {
        frontmatter {
          date(formatString: "MMMM D, YYYY")
          title
          slug
          hero_image_credit_link
        }
        id
        excerpt
      }
    }
  }
`;
export const Head = () => <Seo title="Blog" />;
export default BlogPage;
