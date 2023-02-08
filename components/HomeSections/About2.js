import React from "react";
import { Book } from "styled-icons/remix-line";

const About2 = (props) => {
  return (
    <div className="relative w-[600px]">
      <div className="absolute left-0 bottom-[-175px]">
        <Book className="text-secondary dark:text-primary h-[50px] w-[50px]" />
      </div>
      <p className="text-dark dark:text-white text-[50px] font-gilroy-medium">
        Take a look at my <br />
        <span className="text-secondary dark:text-primary">profile</span> <br />
        and <span className="text-secondary dark:text-primary">works</span>.
        <br />
        Don’t worry, they won’t{" "}
        <span className="text-secondary dark:text-primary">bite</span>.
      </p>
    </div>
  );
};

export default About2;
