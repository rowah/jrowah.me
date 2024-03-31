import * as React from "react";
import Apple_logo from "./icons/apple_logo";
import Folder from "./icons/folder_icon";

const Skills_header = () => {
  return (
    <div class="flex">
      <Apple_logo />
      <span class="border-l-4 ml-1 border-black pl-1">
        <Folder />
      </span>
      <p class="text-blue ml-2 font-bold text-lg md:text-xl lg:text-2xl">~/</p>
    </div>
  );
};

export default Skills_header;
