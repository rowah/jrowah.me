import * as React from "react";
import Footer from "../components/footer";
import Layout from "../components/layout";
import Seo from "../components/seo";

const ProjectsPage = () => {
  return (
    <main class="pt-4 pl-4">
      <Layout>
        <div class="container px-6 py-10 mx-auto">
          <div class="grid grid-cols-1 gap-8 m-8 md:mt-16 md:grid-cols-2">
            <div class="lg:flex">
              <img
                class="object-cover w-full h-56 rounded-lg lg:w-64"
                src="https://media.istockphoto.com/id/458414021/photo/jar-of-chocolate-nutella-spread-isolated-on-white-background.jpg?s=612x612&w=is&k=20&c=DQm-c871o7DjKa2lbt5iSikm2txS9KgkERDchkkmUhA="
                alt="Expiry-tracker"
              />

              <div class="flex flex-col justify-between py-6 lg:mx-6">
                <a
                  href="https://product-expiry-tracker.cyclic.app"
                  class="text-xl font-semibold text-gray-800 hover:underline dark:text-black "
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  PTracker App
                </a>

                <span class="text-sm text-gray-500 dark:text-gray-500">
                  PTracker helps minimize westage that happen through disposal
                  of expired goods by making it easy to track the expiry dates
                  of products. I used NodeJS, Express, MongoDB, Cloudinary, EJS,
                  and Tailwind to build the app.
                </span>
              </div>
            </div>

            <div class="lg:flex">
              <img
                class="object-cover w-full h-56 rounded-lg lg:w-64"
                src="https://cdn.pixabay.com/photo/2018/04/03/23/04/woman-3288365_960_720.jpg"
                alt="Landing-Page"
              />

              <div class="flex flex-col justify-between py-6 lg:mx-6">
                <a
                  href="https://saloun-website.netlify.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                  class="text-xl font-semibold text-gray-800 hover:underline dark:text-black "
                >
                  Ayesha Salon Landing Page
                </a>

                <span class="text-sm text-gray-500 dark:text-gray-500">
                  This was a website that I built for a client who owned a
                  berber shop and salon. The technologies I used to build the
                  website include HTML, CSS and Tailwind.
                </span>
              </div>
            </div>

            <div class="lg:flex">
              <img
                class="object-cover w-full h-56 rounded-lg lg:w-64"
                src="https://images.unsplash.com/photo-1501959181532-7d2a3c064642?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1193&q=80"
                alt="portfolio"
              />

              <div class="flex flex-col justify-between py-6 lg:mx-6">
                <a
                  href="https://jrowah.com"
                  class="text-xl font-semibold text-gray-800 hover:underline dark:text-black "
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Jrowah
                </a>

                <span class="text-sm text-gray-500 dark:text-gray-500">
                  This is my portolio website which I have build from scratch to
                  showcase my abilities, boost my online availability, and
                  showcase my skills. The tech stack I have used here include
                  GatsbyJS, JavaScript, ReactJS, Graphql, TailwindCSS and CSS.
                </span>
              </div>
            </div>
            <div class="lg:flex">
              <img
                class="object-cover w-full h-56 rounded-lg lg:w-64"
                src="https://images.pexels.com/photos/220057/pexels-photo-220057.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                alt="tic-tac-toe"
              />

              <div class="flex flex-col justify-between py-6 lg:mx-6">
                <a
                  href="https://jr-tic-tac-toe.netlify.app/"
                  class="text-xl font-semibold text-gray-800 hover:underline dark:text-black "
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Tic-Tac-Toe
                </a>

                <span class="text-sm text-gray-500 dark:text-gray-500">
                  This is a paper-and-pencil game for two players who take turns
                  marking the spaces in a three-by-three grid with X or O. The
                  player who succeeds in placing three of their marks in a
                  horizontal, vertical, or diagonal row is the winner. It is a
                  solved game, with a forced draw assuming best play from both
                  players
                </span>
              </div>
            </div>
          </div>
        </div>
      </Layout>

      <Footer></Footer>
    </main>
  );
};
export const Head = () => <Seo title="Projects" />;
export default ProjectsPage;
