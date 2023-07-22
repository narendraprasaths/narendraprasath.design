import React from "react";
import { Terminal } from "styled-icons/remix-fill";

const About = (props) => {
  return (
    <div className="relative w-[600px]">
      <div className="absolute left-0 bottom-[-250px]">
        <Terminal className="text-secondary dark:text-primary h-[50px] w-[50px]" />
      </div>
      <p className="text-graySecondary dark:text-grey text-sm font-gilroy-medium mb-4">
        {props.data.title}
      </p>
      <p className="text-dark dark:text-white text-2xl leading-normal font-gilroy-semibold">
        {props.data.description}
      </p>
    </div>
  );
};

export default About;
