import * as React from "react";
import Footer from "../components/footer";
import Layout from "../components/layout";
import Seo from "../components/seo";

const ProjectsPage = () => {
  return (
    <main class="pt-4 pl-4">
      <Layout pageTitle="Projects" />
      {/* <div class="container px-6 py-10 mx-auto"> */}
      <div class="grid grid-cols-1 gap-8 m-8 md:mt-16 md:grid-cols-2">
        <div class="lg:flex">
          <img
            class="object-cover w-full h-56 rounded-lg lg:w-64"
            src="https://media.istockphoto.com/id/458414021/photo/jar-of-chocolate-nutella-spread-isolated-on-white-background.jpg?s=612x612&w=is&k=20&c=DQm-c871o7DjKa2lbt5iSikm2txS9KgkERDchkkmUhA="
            alt=""
          />

          <div class="flex flex-col justify-between py-6 lg:mx-6">
            <a
              href="https://product-expiry-tracker.cyclic.app"
              class="text-xl font-semibold text-gray-800 hover:underline dark:text-white "
              target="_blank"
              rel="noopener noreferrer"
            >
              PTracker App
            </a>

            <span class="text-sm text-gray-500 dark:text-gray-300">
              PTracker helps minimize westage that happen through disposal of
              expired goods by making it easy to track the expiry dates of
              products.
            </span>
          </div>
        </div>

        <div class="lg:flex">
          <img
            class="object-cover w-full h-56 rounded-lg lg:w-64"
            src="https://cdn.pixabay.com/photo/2018/04/03/23/04/woman-3288365_960_720.jpg"
            alt=""
          />

          <div class="flex flex-col justify-between py-6 lg:mx-6">
            <a
              href="https://saloun-website.netlify.app/"
              class="text-xl font-semibold text-gray-800 hover:underline dark:text-white "
            >
              Ayesha Salon Landing Page
            </a>

            <span class="text-sm text-gray-500 dark:text-gray-300">
              This was a website that I built for a client who owned a berber
              shop and salon.
            </span>
          </div>
        </div>

        <div class="lg:flex">
          <img
            class="object-cover w-full h-56 rounded-lg lg:w-64"
            src="https://images.unsplash.com/photo-1501959181532-7d2a3c064642?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1193&q=80"
            alt=""
          />

          <div class="flex flex-col justify-between py-6 lg:mx-6">
            <a
              href="https://jrowah.com"
              class="text-xl font-semibold text-gray-800 hover:underline dark:text-white "
            >
              Jrowah
            </a>

            <span class="text-sm text-gray-500 dark:text-gray-300">
              My Website
            </span>
            {/* </div> */}
          </div>

          {/* <div class="lg:flex">
                <img
                  class="object-cover w-full h-56 rounded-lg lg:w-64"
                  src="https://images.unsplash.com/photo-1624996379697-f01d168b1a52?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
                  alt=""
                />

                <div class="flex flex-col justify-between py-6 lg:mx-6">
                  <a
                    href="#"
                    class="text-xl font-semibold text-gray-800 hover:underline dark:text-white "
                  >
                    What do you want to know about Blockchane
                  </a>

                  <span class="text-sm text-gray-500 dark:text-gray-300">
                    On: 20 October 2019
                  </span>
                </div>
              </div> */}
        </div>
      </div>

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
