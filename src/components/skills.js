import * as React from "react";
import Experience from "./experience";
import Skills_header from "./skills_header";
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
  const heading = Date.now();
  return (
    <section>
      <div class="text-lg md:text-xl lg:text-2xl">
        <div class="flex">
          <Skills_header />
          <h2 class="text-blue"> Skillset?:</h2>
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
            MongoDB
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
          <span>
            <span>H</span>
            <span class="text-orange-600" className={tee}>
              T
            </span>
            <span class="text-red-600" className={em}>
              M
            </span>
            <span class="text-gray-400" className={el}>
              L
            </span>
          </span>
          ,{" "}
        </span>
        &nbsp;
        <span>
          <span class="text-blue-800" className={css}>
            CSS
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
        <div class="flex">
          <Experience />
          <h2 class="text-blue">Experience?:</h2>
        </div>
        <div class="text-green-700">{heading}</div>
        <div class="flex">
          <Skills_header />
          <h2 class="text-blue"> Funtime?:</h2>
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
