import React from "react";
import { Coffee } from "styled-icons/feather";

const Skills = (props) => {
  return (
    <div className="w-[200vw] lg:w-[75vw] relative">
      <div className="absolute right-0 bottom-[-250px]">
        <Coffee className="text-secondary dark:text-primary h-[350px] w-[350px] opacity-20" />
      </div>
      <div className="text-secondary dark:text-primary text-4xl font-gilroy-semibold mb-4">
        {props.data.section_title}
      </div>
      <div className="flex flex-wrap items-center justify-between text-grey text-lg font-gilroy-medium leading-loose">
        {props.data.Skills.map((skill, i) => (
          <div className="w-1/2" key={i}>
            {skill}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Skills;
