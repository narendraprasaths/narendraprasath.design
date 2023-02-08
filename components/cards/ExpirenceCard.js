import React from "react";
import { Class } from "styled-icons/material";
import { School } from "styled-icons/material-rounded";

const ExperienceCard = (props) => {
  return (
    <div className="w-[150vw] md:w-[70vw] lg:w-[40vw] font-gilroy-semibold text-highlight dark:text-white flex flex-col items-start justify-start relative">
      <div className="absolute left-0 bottom-[-100px]">
        {props.data.is_education ? (
          <School className="text-secondary dark:text-primary h-[56px] w-[56px]" />
        ) : (
          <Class className="text-secondary dark:text-primary h-[56px] w-[56px]" />
        )}
      </div>
      <div className="text-4xl">{props.data.title}</div>
      <p className="text-grey font-gilroy-medium text-2xl my-8">
        {props.data.description}
      </p>
      <div className="w-full flex items-center justify-between mt-16">
        <div className="font-gilroy-medium text-4xl text-secondary dark:text-primary">
          {props.data.year}
        </div>
      </div>
    </div>
  );
};

export default ExperienceCard;
