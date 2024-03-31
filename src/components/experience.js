import * as React from "react";
import Skills_header from "./skillsHeader";

const Experience = () => {
  const startOfExperience = new Date(2023, 0, 1);
  const currentDate = new Date();
  let yearDiff = currentDate.getFullYear() - startOfExperience.getFullYear();
  let monthDiff = currentDate.getMonth() - startOfExperience.getMonth();
  const experiencePeriod = `${yearDiff} years ${monthDiff} months`;

  return (
    <>
      <div class="flex">
        <Skills_header />
        <h2 class="text-blue text-lg md:text-xl lg:text-2xl">Experience?:</h2>
      </div>
      <div class="text-green-700">{experiencePeriod}</div>
    </>
  );
};

export default Experience;
