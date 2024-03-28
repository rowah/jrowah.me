import * as React from "react";
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
    <section>
      <div>
        <h2 class="text-2xl mt-4">Skill Set ?</h2>
        <span>
          <strong>
            <span class="text-yellow-500" className={yellow}>
              Java
            </span>
            <span>Script</span>
          </strong>{" "}
          ~{" "}
        </span>
        &nbsp;
        <span>
          <strong class="text-blue-600/100" className={blue}>
            ReactJS
          </strong>{" "}
          ~{" "}
        </span>
        &nbsp;
        <span>
          <strong class="text-green-700" className={green}>
            MongoDB
          </strong>{" "}
          ~
        </span>
        &nbsp;
        <span>
          <strong>
            N
            <span class="text-green-700" className={green}>
              o
            </span>
            deJS
          </strong>{" "}
          ~
        </span>
        &nbsp;
        <span>
          <strong>
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
          </strong>{" "}
          ~
        </span>
        &nbsp;
        <span>
          <strong class="text-blue-800" className={css}>
            CSS
          </strong>{" "}
          ~
        </span>
        &nbsp;
        <span>
          {" "}
          <strong className={blue} class="text-blue-600">
            Tailwind
          </strong>{" "}
          ~
        </span>
        &nbsp;
        <span>
          {" "}
          <strong class="text-purple-700" className={purple}>
            Elixir
          </strong>{" "}
          ~{" "}
          <strong className={em} class="text-orange-600">
            Phoenix
          </strong>
        </span>
        <h2 class="text-2xl mt-6 mb-4">Fun Time ?</h2>
        <span>
          <strong>Cooking</strong> ~
        </span>
        &nbsp;
        <span>
          <strong>Hockey</strong> ~
        </span>
        &nbsp;
        <span>
          <strong>Chess</strong> ~
        </span>
        &nbsp;
        <span>
          <strong>Gyming</strong>
        </span>
        <p class="text-2xl mt-2 text-blue-700">
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
