import * as React from "react";
import Layout from "../components/layout";
import Footer from "../components/footer";
import Seo from "../components/seo";

const IndexPage = () => {
  return (
    <main class="pt-4 pl-4">
      <Layout>
        {/* <!-- component --> */}
        <div class="container max-w-screen-lg m-auto">
          <div class="flex flex-col md:grid grid-cols-9 mx-auto p-2 text-blue-50">
            {/* <!-- Optimum --> */}
            <div class="flex flex-row-reverse md:contents">
              <div class="bg-gray-300 col-start-1 col-end-5 p-4 rounded-br-2xl rounded-tl-none md:rounded-tl-2xl rounded-tr-2xl md:rounded-tr-none rounded-bl-2xl my-4 ml-auto shadow-md">
                <h1>May 2023 &#8594; Present</h1>
                <hr />
                <h2 class="font-semibold text-lg mb-1">
                  Full Stack Software Developer Intern
                </h2>
                <h3 class="font-semibold text-lg mb-1">
                  {" "}
                  <a
                    href="https://optimum.ba/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <img
                      class="w-20"
                      src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAFq0lEQVR4Aa3XA5AlSxqG4efPrHO6p3tmbdu2bdu2vTsbXtu2bdsKrO3da/ve5qnMf0/EzI2OXl3MvBFvGV8lqirDGeG7OfiliXMpZooVAaDqNjTLRo+dK9JpI5wWmeF9FkxMzSzpri9cQ2uX0JxNCuIE6QAtf2mp/tiCU6wYfcuGT0Y78wG+kguOs4Ar654g867SstbFXEL2ABI9UNZkfkXGW0z93IpNz7BO5OkPkBk+adnMeUR/kXRfqejEONI6Chn/I0SQkbovCM+15FBfs2peGqcd4HlZXN2y9fEGMt4nnU+iY5yJ1snY47YQ6J2e2/f3OE7ko0T9tuOsel6M/ztAZviCnTY27yDK+/RclMhgHMVstv3Gve/ZNs5NqAipouwxC8qYUR/nXPWTplbcZ6skBmwxL3bT8QZR432yLwoksotxXSoE2mbGxtqBZTY7WKm9Z72QqBcnCwEEEoE0kG9zTDvBrvoNmaeISIhtDa67oOw/js3NrWJPYmOd1shySFdfY+XEj3vyRQ7DFq884jxlcbiX1p6ZZXoJMbBVAjID9XhtvLHl6T89NlYhQGb4ql3C24zj/ecB6Ei0pqyvSuXNvfbdHnK+Ff+PN/x1YVgtz8thYXef7Ap1Sp4aoJC+ZrHez+FWPC/GAN/NRTPX1PzAOCuxuUGiE+tr9P6M/rDzvdYZoL7yoIdL78phseRkl4yBDBKl3tFZfN9DYqWANVPZn6BkER1ty77x5jN6c2jPvsh7s5SXRDZl82TRNykoQeaTrBl8Imvx3RykJdVd6UQKXeTcNjukH33cbmeSvuuCL8iIP2Upom3MXScQbq04hyMMxdEmFtv1yWUFEWRDo3iNZ191xZnlsTGLKC9XCzXIJvoGxWDmZs5mKM6qKHENASlKCE1ky97XPm4faZvHfVq2zSyFWogkR7imohbLishLzBVzFTJCZj/A/eddbV/ZfbmTjau/U4q5BKGT7eJWRDEI4WwhOdVaRY4H20+EfjCNEtRKCUo7OxSghUh77HI6Eb2l/UWtWfompRBBCaKAAoZ6gkh0MilFn9QL2l+UcsHUKLFlxIlQrOlqPSBrQRJ9jws7LuEDvz6PfeXthy2ZDFeOCCJlCXMpDoBiQRN+aRioBV3o1FrK2S54L/tILZO7Zi2LOVQZSQ0CxS+MWjE1an4irOfClKGSiY72TF/564Izyyc+UTPbbnWgVCIpqNGU+j1LxuKaRud2suLLCrmwKKcLIrrQL1E2l5/nTDIcfbVn5nR61azFXErstXzPsqMcaCwi0olGNd4ipGBeEvrSTrmnO+6un/znw51B6jsOuGdOl15smFCrubZ6gbegeV6MBfzDhvRzkV8QiGSocucuuXyWMEzfNXz0Ly/09p9NTrvYs5b3HfoctX4sl5YHtVAKda9DfN/Et13CBgSAn+QO082LavXHsp8jWtI7Y6d1xpnY3PxTKC9vJ534GQ+69Enbf0h+vVwvct67ZLM7el41s8gdZ6Ej0ckyPUUtN9H91X3ilO0BMsOP7TRpt5L9E9Fz2BagN9E6YxNj28zWfhdtPNisp1IumMPilcVkUetibl/YSal0e0w9sz7CrvpZp2z9Fwbbi89FLKvt3tH627Q2aN0etwWgpyyVMpVRaV30TktZp3MXyCTRo+uerQ/vdrxVj40ZQPzX4dcOS6pb09+p9bPP3fbLHXPN1XNvuKTvDRpFDjtIdHSnaJ5krJ9zhHVPiY3THpjMS8JVLDnJRYRXybydtPcm6Cnm6rk9hJDDAomedN8X9en4u/NYc62Ynf6hWWb4uR2YSDeU+SQ9bz130G0PMJeQMSE13fe0eIvBt+c2R1vbGgtsJ07XiPgcFswMJs5hrd1Md03dxbU8u0wyTlSGA4x+ofmecJRBs8vGtqc+MwG2VcvVDVbnrqkGAeB4wKBh9P25z4uR0+Zf2/IM2lVmvxUAAAAASUVORK5CYII="
                      alt="Optimum BH logo"
                    />
                    Optimum BH
                  </a>
                </h3>
                <h4>Tech Stack:</h4>
                <span>Phoenix, </span> <span>Elixir, </span>{" "}
                <span>Tailwind, </span>
                <span>Alpine, </span> <span>LiveView </span>{" "}
                <p class="leading-tight text-slate-900 font-serif">
                  As an intern, I fix company product's UI and contribute to new
                  features such as chat. I also maintained the company's landing
                  page. I created a full stack web application, EasyBills using
                  Elixir, Phoenix and Ecto which I deployed to Fly. Skills
                  acquired include Ecto, LiveView, and PSQL.
                </p>
              </div>
              <div class="col-start-5 col-end-6 md:mx-auto relative mr-10">
                <div class="h-full w-6 flex items-center justify-center">
                  <div class="h-full w-1 bg-blue-800 pointer-events-none"></div>
                </div>
              </div>
            </div>
            {/* <!-- Expivot --> */}
            <div class="flex md:contents">
              <div class="col-start-5 col-end-6 mr-10 md:mx-auto relative">
                <div class="h-full w-6 flex items-center justify-center">
                  <div class="h-full w-1 bg-blue-800 pointer-events-none"></div>
                </div>
              </div>
              <div class="bg-gray-300 col-start-6 col-end-10 p-4 rounded-br-2xl rounded-tr-2xl rounded-bl-2xl my-4 mr-auto shadow-md md:mt-[-70%]">
                <h1>From September 2022 &#8594; Present</h1>
                <hr />
                <h2 class="font-semibold text-lg mb-1">
                  Software Developer ~ Part Time
                </h2>
                <h3 class="font-semibold text-lg mb-1">
                  {" "}
                  <a
                    href="https://expivot.tech/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <img
                      class="w-20"
                      src="https://avatars.githubusercontent.com/u/54973894?s=200&v=4"
                      alt="expivot logo"
                    />
                    ExPivot Labs
                  </a>
                </h3>
                <h4>Tech Stack:</h4>
                <span>Elixir, </span> <span>React Native, </span>{" "}
                <span>Phoenix, </span> <span>PostgreSQL, </span>{" "}
                <span>Python.</span>
                <p class="leading-tight text-slate-900   font-serif">
                  Roles include fixing UI of company's product and landing
                  pages. The product is an AI enabled finance application.
                </p>
              </div>
            </div>

            {/* <!-- Expivot --> */}
            <div class="flex flex-row-reverse md:contents">
              <div class="bg-gray-300 col-start-1 col-end-5 p-4 rounded-br-2xl rounded-tl-none md:rounded-tl-2xl rounded-tr-2xl md:rounded-tr-none rounded-bl-2xl my-4 ml-auto shadow-md">
                <h1>From February 2022 &#8594; September 2022</h1>
                <hr />
                <h2 class="font-semibold text-lg mb-1">
                  Software Developer Intern
                </h2>
                <h3 class="font-semibold text-lg mb-1">
                  {" "}
                  <a
                    href="https://expivot.tech/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <img
                      class="w-20"
                      src="https://avatars.githubusercontent.com/u/54973894?s=200&v=4"
                      alt="expivot logo"
                    />
                    ExPivot Labs
                  </a>
                </h3>
                <h4>Tech Stack:</h4>
                <span>JavaScript, </span> <span>CSS, </span> <span>HTML, </span>{" "}
                <span>TailwindCSS.</span>
                <p class="leading-tight text-slate-900   font-serif">
                  At my first interniship, I did common tasks like managed and
                  updated the Company's website and product landing page. Skills
                  acquired include Git and Python.
                </p>
              </div>
              <div class="col-start-5 col-end-6 md:mx-auto relative mr-10">
                <div class="h-full w-6 flex items-center justify-center">
                  <div class="h-full w-1 bg-blue-800 pointer-events-none"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Layout>

      <Footer />
    </main>
  );
};

export const Head = () => <Seo title="Journey" />;
export default IndexPage;
