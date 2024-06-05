import * as React from "react";
import Layout from "../../components/layout";
import Seo from "../../components/seo";
import Footer from "../../components/footer";
import { Link, graphql } from "gatsby";

const BlogPage = ({ data }) => {
  return (
    <main class="pt-4 pl-4">
      <Layout>
        <div class="px-6 py-8  mx-auto">
          <div class="grid grid-cols-1 gap-2 mt-2 md:mt-4 md:grid-cols-2">
            {data.allMdx.nodes.map((node) => (
              <div class="bg-gray-300 rounded-lg border p-4" key={node.id}>
                <img
                  class="object-cover w-full h-48 rounded-lg"
                  src={node.frontmatter.hero_image_credit_link}
                  alt="hero"
                />
                <div class="flex flex-col justify-between py-4 px-1 lg:mx-4">
                  <Link to={`/blog/${node.frontmatter.slug}`}>
                    <a
                      href={`/blog/${node.frontmatter.slug}`}
                      class="text-xl font-semibold text-blue hover:underline"
                    >
                      {node.frontmatter.title}
                    </a>
                    <hr />
                  </Link>

                  <span class="text-sm text-gray-800 dark:text-gray-800">
                    Posted On: {node.frontmatter.date}
                  </span>
                  <p>{node.excerpt}</p>
                  <div class="px-1 py-4">
                    <a
                      href={`/blog/${node.frontmatter.slug}`}
                      class="text-blue hover:underline"
                    >
                      Read More...
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Layout>
      <Footer />
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
