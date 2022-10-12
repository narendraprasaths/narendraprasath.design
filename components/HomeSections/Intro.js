import React from "react";
import { ArrowRight } from "styled-icons/octicons";

const Intro = (props) => {
  return (
    <div className="relative flex flex-col justify-start items-center">
      <div className="absolute left-0 bottom-[-250px]">
        <ArrowRight className="text-secondary dark:text-primary h-[50px] w-[50px]" />
      </div>
      <div className="z-[-100] absolute left-[-120%] top-[-200px] flex items-start text-grey opacity-20">
        <span className="text-[21rem] rotate-90 font-gilroy-bold">{"I'M"}</span>
        <span className="text-[40rem] leading-none font-gilroy-bold">
          {props.data.background_text}
        </span>
      </div>
      <div>
        <p className="text-graySecondary dark:text-grey text-sm font-gilroy-medium mb-4">
          {props.data.super_heading}
        </p>
        <p className="text-dark dark:text-white text-5xl font-gilroy-semibold">
          {props.data.name}
        </p>
      </div>
    </div>
  );
};

export default Intro;
