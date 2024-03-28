import * as React from "react";
// import { MDXRenderer } from "gatsby-plugin-mdx";
import { blogImg } from "../../styles/about.module.css";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import { graphql } from "gatsby";
import Layout from "../../components/layout";
import Seo from "../../components/seo";

const BlogPost = ({ data, children }) => {
  const image = getImage(data.mdx.frontmatter.hero_image);
  return (
    <Layout pageTitle={data.mdx.frontmatter.title}>
      <div class="max-w-4xl bg-slate-200">
        <section class="bg-slate-100 shadow-2xl p-8 font-serif leading-relaxed text-lg w-6/6 md:w-5/6 lg:w-5/6 max-w-4xl m-auto ml-20">
          <p>Posted On: {data.mdx.frontmatter.date}</p>
          <GatsbyImage image={image} className={blogImg} />
          <p class="text-right mr-20">
            Photo Credit: {data.mdx.frontmatter.hero_image_credit_text}
          </p>
          <br />
          {children}
          <h3 align="right" class="mr-4">
            Connect With Me
          </h3>
          <p class="flex justify-end mt-4">
            <span class="px-4">
              <a href="https://twitter.com/jrowah" target="blank">
                <img
                  src="https://raw.githubusercontent.com/rahuldkjain/github-profile-readme-generator/master/src/images/icons/Social/twitter.svg"
                  alt="jrowah"
                  height="20"
                  width="30"
                />
              </a>
            </span>
            <span class="px-4">
              <a href="https://instagram.com/jrowah" target="blank">
                <img
                  src="https://raw.githubusercontent.com/rahuldkjain/github-profile-readme-generator/master/src/images/icons/Social/instagram.svg"
                  alt="jrowah"
                  height="20"
                  width="30"
                />
              </a>
            </span>
            <span class="px-4">
              <a href="https://linkedin.com/in/james-rowa" target="blank">
                <img
                  src="https://raw.githubusercontent.com/rahuldkjain/github-profile-readme-generator/master/src/images/icons/Social/linked-in-alt.svg"
                  alt="james rowa"
                  height="20"
                  width="30"
                />
              </a>
            </span>
            <span class="px-4">
              <a href="https://github.com/rowah" target="blank">
                <img
                  src="https://raw.githubusercontent.com/rahuldkjain/github-profile-readme-generator/master/src/images/icons/Social/github.svg"
                  alt="james rowa"
                  height="20"
                  width="30"
                />
              </a>
            </span>
          </p>
        </section>
      </div>
    </Layout>
  );
};

export const query = graphql`
  query ($id: String) {
    mdx(id: { eq: $id }) {
      frontmatter {
        title
        date(formatString: "MMMM DD, YYYY")
        hero_image_alt
        hero_image_credit_link
        hero_image_credit_text
        hero_image {
          childImageSharp {
            gatsbyImageData
          }
        }
      }
    }
  }
`;

export const Head = ({ data }) => <Seo title={data.mdx.frontmatter.title} />;

export default BlogPost;
