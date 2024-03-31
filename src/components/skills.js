import * as React from "react";
import Experience from "./experience";
import Skills_header from "./skillsHeader";
import {
  purple,
  green,
  blue,
  css,
  yellow,
  tee,
  em,
  el,
} from "../styles/about.module.css";

const Skills = () => {
  return (
    <section class="mt-4">
      <div class="text-md md:text-lg lg:text-xl">
        <div class="flex">
          <Skills_header />
          <h2 class="text-blue text-lg md:text-xl lg:text-2xl"> Skillset?:</h2>
        </div>
        <span>
          <span>
            <span class="text-yellow-500" className={yellow}>
              Java
            </span>
            <span>Script</span>
          </span>
          ,{" "}
        </span>
        &nbsp;
        <span>
          <span class="text-blue-600/100" className={blue}>
            ReactJS
          </span>
          ,{" "}
        </span>
        &nbsp;
        <span>
          <span class="text-green-700" className={green}>
            PSQL
          </span>
          ,{" "}
        </span>
        &nbsp;
        <span>
          <span>
            N
            <span class="text-green-700" className={green}>
              o
            </span>
            deJS
          </span>
          ,{" "}
        </span>
        &nbsp;
        <span>
          <span class="text-[#295B8D]">Py</span>
          <span class="text-[#F0C83A]">thon</span>,{" "}
        </span>
        &nbsp;
        <span>
          <span class="text-blue-800" className={css}>
            AlpineJS
          </span>
          ,{" "}
        </span>
        &nbsp;
        <span>
          <span className={blue} class="text-blue-600">
            Tailwind
          </span>
          ,{" "}
        </span>
        &nbsp;
        <span>
          <span class="text-purple-700" className={purple}>
            Elixir
          </span>
          ,{" "}
          <span className={em} class="text-orange-600">
            Phoenix
          </span>
        </span>
        <Experience />
        <div class="flex">
          <Skills_header />
          <h2 class="text-blue text-lg md:text-xl lg:text-2xl">Funtime?:</h2>
        </div>
        <span>
          <span class="text-green-700">Cooking</span>,
        </span>
        &nbsp;
        <span>
          <span class="text-green-700">Hockey</span>,
        </span>
        &nbsp;
        <span>
          <span class="text-green-700">Chess</span>,
        </span>
        &nbsp;
        <span>
          <span class="text-green-700">Gyming</span>
        </span>
        <p class="text-center text-2xl mt-2 text-blue-700">
          <a
            href="https://drive.google.com/file/d/1ofgxq3MV0ODsi8qMP7lLieHfpfoTzEdm/view?usp=share_link"
            target="_blank"
            rel="noopener noreferrer"
          >
            Resume
          </a>
        </p>
      </div>
    </section>
  );
};

export default Skills;
