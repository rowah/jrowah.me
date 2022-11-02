import * as React from "react";
import Layout from "../components/layout";
import Seo from "../components/seo";
import Footer from "../components/footer";

const BlogPost = () => {
  return (
    <main>
      <Layout pageTitle="My Blog Posts">
        <p>Here is where I am going to have my blog posts</p>
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
export const Head = () => <Seo pageTitle="My Blog Posts" />;
export default BlogPost;
