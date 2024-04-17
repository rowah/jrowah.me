import * as React from "react";
import Footer from "../components/footer";
import Layout from "../components/layout";
import Seo from "../components/seo";

const ProjectsPage = () => {
  return (
    <main class="pt-4 pl-4">
      <Layout>
        <section class="bg-white dark:bg-gray-900">
          <div class="container px-6 pb-4 mx-auto">
            <div class="grid grid-cols-1 gap-8 mt-8 md:mt-16 md:grid-cols-2">
              <div class="lg:flex">
                <img
                  class="object-cover w-full h-56 rounded-lg lg:w-64"
                  src="https://raw.githubusercontent.com/rowah/product-expiry-tracker-app/main/public/imgs/track.png"
                  alt="Expiry-tracker"
                />

                <div class="flex flex-col justify-between py-6 lg:mx-6">
                  <a
                    href="https://product-expiry-tracker.cyclic.app"
                    class="text-xl font-semibold text-gray-800 hover:underline hover:text-blue dark:text-white "
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    PTracker: Avoid product wastage by tracking expiry dates.
                  </a>

                  <span class="text-sm text-gray-500 dark:text-gray-300">
                    Food, Economics, Environmental Conservation.
                  </span>
                </div>
              </div>

              <div class="lg:flex">
                <img
                  class="object-cover w-full h-56 rounded-lg lg:w-64"
                  src="https://raw.githubusercontent.com/rowah/APIs/1ada5461ee2d7e90fe2b8c0d3a1fb9f38712fb82/imgs/tastetrade.jpeg"
                  alt="Taste-trade"
                />

                <div class="flex flex-col justify-between py-6 lg:mx-6">
                  <a
                    href="https://tastetrade.fly.dev/"
                    class="text-xl font-semibold text-gray-800 hover:underline hover:text-blue dark:text-white "
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Create and Monetize Your Recipe Blog Posts
                  </a>

                  <span class="text-sm text-gray-500 dark:text-gray-300">
                    Business, Finance, Food.
                  </span>
                </div>
              </div>

              <div class="lg:flex">
                <img
                  class="object-cover w-full h-56 rounded-lg lg:w-64"
                  src="https://raw.githubusercontent.com/rowah/easy_bills/df88aa5e607b4e3aa64e5c06d2e36e4f32c02d1b/priv/static/images/logo-white.svg"
                  alt="Easy-bills"
                />

                <div class="flex flex-col justify-between py-6 lg:mx-6">
                  <a
                    href="https://easy-bills.fly.dev/"
                    class="text-xl font-semibold text-gray-800 hover:underline hover:text-blue dark:text-white "
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Generate Invoices with Artificial Intelligence Assistance
                  </a>

                  <span class="text-sm text-gray-500 dark:text-gray-300">
                    AI, Finance.
                  </span>
                </div>
              </div>

              <div class="lg:flex">
                <img
                  class="object-cover w-full h-56 rounded-lg lg:w-64"
                  src="https://images.unsplash.com/photo-1530099486328-e021101a494a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1547&q=80"
                  alt=""
                />

                <div class="flex flex-col justify-between py-6 lg:mx-6">
                  <a
                    href="https://devfinder.fly.dev/"
                    target="_blank"
                    rel="noopener noreferrer"
                    class="text-xl font-semibold text-gray-800 hover:underline hover:text-blue dark:text-white "
                  >
                    Find Developers on Github in a Sec.
                  </a>

                  <span class="text-sm text-gray-500 dark:text-gray-300">
                    Tech, Human Resource.
                  </span>
                </div>
              </div>

              <div class="lg:flex">
                <img
                  class="object-cover w-full h-56 rounded-lg lg:w-64"
                  src="https://images.pexels.com/photos/220057/pexels-photo-220057.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                  alt="Tic-tac-toe"
                />

                <div class="flex flex-col justify-between py-6 lg:mx-6">
                  <a
                    href="https://jr-tic-tac-toe.netlify.app/"
                    class="text-xl font-semibold text-gray-800 hover:underline hover:text-blue dark:text-white "
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Play the Tic-Tac-Toe Game.
                  </a>

                  <span class="text-sm text-gray-500 dark:text-gray-300">
                    Gaming, Entertainment.
                  </span>
                </div>
              </div>
            </div>
          </div>
        </section>
      </Layout>

      <Footer></Footer>
    </main>
  );
};
export const Head = () => <Seo title="Projects" />;
export default ProjectsPage;
