import * as React from "react";
import Layout from "../components/layout";
import Footer from "../components/footer";
import Seo from "../components/seo";

const IndexPage = () => {
  return (
    <main class="pt-4 pl-4">
      <Layout>
        {/* <!-- component --> */}
        <div class="container">
          <div class="flex flex-col md:grid grid-cols-9 mx-auto p-2 text-blue-50">
            {/* <!-- right --> */}
            <div class="flex md:contents">
              <div class="col-start-5 col-end-6 mr-10 md:mx-auto relative">
                <div class="h-full w-6 flex items-center justify-center">
                  <div class="h-full w-1 bg-blue-800 pointer-events-none"></div>
                </div>
                <div class="w-6 h-6 absolute top-1/2 -mt-3 rounded-full bg-blue-500 shadow"></div>
              </div>
              <div class="bg-blue-500 col-start-6 col-end-10 p-4 rounded-xl my-4 mr-auto shadow-md">
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
                <h4>Tech Stack</h4>
                <span>JavaScript, </span> <span> HTML/CSS/Tailwind, </span>{" "}
                <span>Elixir, </span> <span>PostgreSQL, </span>{" "}
                <span>Python.</span>
                <p class="leading-tight text-slate-900 font-sans font-serif">
                  Understanding the codebase of the company's product written in
                  Elixir and Python. Learning Elixir and Python. Maintaining the
                  company's website and product landing page.
                </p>
              </div>
            </div>

            {/* <!-- left --> */}
            <div class="flex flex-row-reverse md:contents">
              <div class="bg-blue-500 col-start-1 col-end-5 p-4 rounded-xl my-4 ml-auto shadow-md">
                <h1>From January 2022 &#8594; November 2022</h1>
                <hr />
                <h2 class="font-semibold text-lg mb-1">Software Developer</h2>
                <h3 class="font-semibold text-lg mb-1">
                  {" "}
                  <a
                    href="https://leonnoel.com/100devs/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <img
                      class="w-20"
                      src="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBwgHBgkIBwgWFhUWDSEbGBgVGBgcIRsiIB0iHR8mGBkdHyogHR4xJx4ZIT0tMTU3Ojo6HiszRDU4Qyk5LisBCgoKDg0OGxAQGi0lICYtLS0yLSsrLTAtLS0tLTArLS0vLS0tLSstLS0tLy4tLS0tLy8tKy0tLTUtLjctLS0tK//AABEIAMgAyAMBEQACEQEDEQH/xAAaAAEAAwEBAQAAAAAAAAAAAAAABAUGAgMB/8QAPRAAAgEEAAMDCQUECwAAAAAAAAECAwQFEQYSITFBcRMUIjJRYYGRwRUjUnLwB0KhsRYkMzdDdIKSwuHx/8QAGgEBAAMBAQEAAAAAAAAAAAAAAAECAwUEBv/EACsRAQACAgAGAQQCAQUAAAAAAAABAgMRBBITITFBIgVRccGB8DIURWGRsf/aAAwDAQACEQMRAD8Arz7tzQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAd/JpNsMXc30ZVYpRpr1qk3qK+Pe/cup5s3E1x9vM/ZatJsX+MubFRnUipQl6tSD5oy8JfR9ScXE0y/HxP2LUmqEemdxCshHuNIkEz3PIO0dkhKO+gjub7BPfQDwBETHiE+ARBoCAeACQAEAAJAAAAAE+e5C2taNnZY6jkLui6kpzkoQfSK5eXbm11frLotHhyWyZMs46TqI/a8QiX+Qusg068+kfVjFajH8sV0Rtiw48Xb2iZtZ7xr5DBXVW2b904S1KMvzR7GUmuPiI5v8AqSJtV6XtGzusbLI2lJ02qqjOG9x9JSacH2r1X0e/EpS+THkil53v9JmO21bbUfOLinR8pGPNJLmk9Jb75PuR68t+Sk21vSkR3aTJ8K0bHATyUMlGq1JL7vTj1evW2c3B9Rtkzck102tj1DO2VrVvbulbW8dylLSOjlyRjrN7Ma13Omrjwrh3drF/bL8412KHo71vX6ZyZ4/Nrqcnx/Lfpx/izNzjbq2ycsdOn94qnLpd7fZrx2jp04mlsXV9M7RMTytL/RbEULmnjbzMNXEtejGO4pvsT6fVHMnj80xOStPj+WnThm8vjq2KyFWzue2L7V2NdzR0+GzRmpF6srxpHVCs6TrKlLlX72nr5l7ZaR233REbiGi48xlni8hbUrCioqVDb02+u37Wc/6ZnyZYtzzvUtMteWYZ2jb1q+/IUZS128qbOjfLWs+WenHK+bl112W5omNoJRlB6mmvEROx95JcvPyvXtG4HVGhWrtqhSlL8qb/AJFbZK18yRDmcJU5OE4tNdzJreLeCYclgAAAAAnuR5XkfNvsnC+e78n51V5uXt193vRzI5+pl5POo/bT1C9vbadzKxt8VGj5nK6gt0vW3v8Axeb0t62eGl+Tmtk3zxHv9emk69eHOOryvaNzc5pUvNJXE2nU9fbe35Ll9LZOWnTmtcW+fX936ImJ7z4UVXyH2HkfNN8nn8OXm7dctTW/ge2Jt1sfP51P6ZzrU6Up0/eoZ9vbZUv7s63+Z/5I4n+4PRreNA/Z9GL4otubujLX+1np+qbjh5/j/wBUxd7rLcsA6+Qqr+s3FxJU0+2MXLrLxfd/6eHvxEclf8Kwv3r8p8puThTf7TLLffFN+Ki9fyRXHM/6C399pmIjJEyiX+8Jd5PN3S+9ncThbp93Vpz+C6L/ALGKZz0rhr4iNyT2ncvTiuzhkOLcRb1f36Mefw5pb+qJ4PLbFgyTX0XruY254n4ovcZl5Y7GxhGlSio8rjFqXRN793XXQvwvA0y4urknvKL5JrbUPn7Q6PnOfxtCL1zUlHw3NofTL8mG9jL8piFzlbXLWHkLLhypSpU4Q68zhzSfv5keTFbFk3fNuZn8r25o1FVBx1RUaONyE3BV2tVPJtdWtafT9fI9306Znnx9+X1tTLERqY8ueMorKYzFZyjHrOHJPX4lv686+Q4G3QyXw2/hGX5ViYc8YyWNxOLwVPthT56mvxPf1cv4FuAicuW+af4Rl+MRVaYi5ndcN2lpw3fU6VaP9pGek5Pv1tP9ew8uenJxE2z1mY+68TuvxZ7iyrnJeb0s9bpOO+WajH0v9UenwOhwMcPuZxSzyTefLPHSZAAAAADwe1ta1rO9x1HH3VZ05QnJwm+sXzcu1NLqvVXVb8Dw5a3x5Jy17xPr8Lx4h5ypZDBXMKutbT5ZLUoy2mtxkuj7fgXi+HPGjU17vKxx93kN+Rj6Me2cnqMPGT6IvlzYsf5IiZ8pN7Ws7XGyx1nVdRuqpTnrUfRUklBdr9Z9XrwMcdMmTLGS8a16J1rsiYqnZVb2EMnXlCnp7lFbfZ07n3no4icsUnpxuUV17bKN7wrHASw/2nU5HU5ubklvt3+HXccXpcZOXrcvdvFsetQy8Lu3w/EELrEVXOEJpxcujktekn098kdOcVs/D8uWNWYRPLbcNLdZDhq9ysM3dX9Ryik1RcH2rsW9a1vr2/E51MPF0xzhrXt92/NW3dmr3N17niB5eK1JVVKK9iXYvkjpY+ErGDoyx6k720uQyPDeavKGTv76pFxit0XFvs66TS1p/rRzMeDisETjpXz7bWvE62oMnxDVu+I4ZeENck1yRfsj3Px6/M6GHgorw84p9spv89rrL3HCuWuFla91UjNpc9KMXuTS7N60vZvZ4cWPjMdelWO33aTOOZ5pV/GeatspkbO6x9R+jRXc1yvbfeen6fw18dLVvHlXLetphOvr7h/iWFG5yVzKhWjDUtRclL5L9e889MHEcPMxSvNVabRaO7OZmniqVWnDEV5zSj6UprW3v93v+Z0eF6sxPVjX2ZX89l5wlmsdb2FawzM2oKtGpDo31TTa6d3RfNnj47g8trRkxefEr47xHxlRZ7IPKZe6vH2Sn08F0X8Ej38LhjFhintned22tLe24YvLalz31ShUUUpc0XNN97Wjx3txdbT8eaF9VmHvxHmrGphLXD2FedVQnt1Jpr29Fvr3/JFOC4bJ1py3jX/C2S8a0yp12AAAAAAACbYZS5soypRalTfrU5rcX8O5+9dTz5eGpk7+J+60W0+X+Tub5RhUajCPqwguWMfCP1fUYuGpj7+/uTbaGehUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAH//Z"
                      alt="100Devs logo"
                    />
                    100 Devs
                  </a>
                </h3>
                <h4>Tech Stack</h4>
                <span>NodeJS, </span> <span>MongoDB, </span>{" "}
                <span>Express, </span>
                <span>JavaScript, </span> <span>Gatsby, </span>{" "}
                <span>ReactJS, </span> <span>HTML, </span>{" "}
                <span>TailwindCSS.</span>
                <p class="leading-tight text-slate-900 font-sans font-serif">
                  I worked on several collaborative projects with other folks
                  developing fullstack apps from start to finish. Building
                  websites for clients. Working with maultiple teams to deliver
                  client projects on time. Built my own website from scratch.
                </p>
              </div>
              <div class="col-start-5 col-end-6 md:mx-auto relative mr-10">
                <div class="h-full w-6 flex items-center justify-center">
                  <div class="h-full w-1 bg-blue-800 pointer-events-none"></div>
                </div>
                <div class="w-6 h-6 absolute top-1/2 -mt-3 rounded-full bg-blue-500 shadow"></div>
              </div>
            </div>
            {/* <!-- right --> */}
            <div class="flex md:contents">
              <div class="col-start-5 col-end-6 mr-10 md:mx-auto relative">
                <div class="h-full w-6 flex items-center justify-center">
                  <div class="h-full w-1 bg-blue-800 pointer-events-none"></div>
                </div>
                <div class="w-6 h-6 absolute top-1/2 -mt-3 rounded-full bg-blue-500 shadow"></div>
              </div>
              <div class="bg-blue-500 col-start-6 col-end-10 p-4 rounded-xl my-4 mr-auto shadow-md">
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
                <span>JavaScript, </span> <span>PostgreSQL, </span>{" "}
                <span>HTML, </span> <span>TailwindCSS.</span>
                <p class="leading-tight text-slate-900 font-sans font-serif">
                  At my first interniship, I managed and updated the Company's
                  product landing page. I also contributed JavaScript code to
                  the Comapany's app, Yweri which is on Google and App stores.
                </p>
              </div>
            </div>
          </div>
        </div>
      </Layout>

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

export const Head = () => <Seo title="Journey" />;
export default IndexPage;
