import React from "react";
import NextImage from "../NextImage";
import {Crop} from "styled-icons/feather"

const ProjectCard = (props) => {
  return (
    <React.Fragment>
      {props.show_heading && (
        <div className="text-secondary dark:text-primary text-4xl font-gilroy-semibold mb-4">
          Projects
        </div>
      )}
      <div
        className="w-screen md:w-[70vw] lg:w-[40vw] font-gilroy-semibold text-highlight dark:text-white flex flex-col items-start justify-start relative"
      >
        <div className="absolute right-[-250px] bottom-[-100px]">
          <Crop className="text-secondary dark:text-primary h-[350px] w-[350px] opacity-20"/>
        </div>
        <div className="text-4xl">{props.data.title}</div>
        {props.data.image && (
          <React.Fragment>
            {props.data.url ? (
              <a
                href={props.data.url}
                target="_blank"
                className="text-2xl text-secondary dark:text-primary"
                rel="noreferrer"
              >
                <NextImage
                  external={true}
                  src={props.data.image_url}
                  alt={props.data.title}
                  height={278}
                  width={371}
                  className="cursor-pointer my-8"
                />
              </a>
            ) : (
              <NextImage
                external={true}
                src={props.data.image_url}
                alt={props.data.title}
                height={278}
                width={371}
                className="cursor-pointer my-8"
              />
            )}
          </React.Fragment>
        )}
        {!props.data.image && (
          <React.Fragment>
            <p className="text-grey font-gilroy-medium text-2xl my-8">
              {props.data.description}
            </p>
            {props.data.url && (
              <a
                href={props.data.url}
                target="_blank"
                className="text-2xl text-secondary dark:text-primary"
                rel="noreferrer"
              >
                See Project
              </a>
            )}
          </React.Fragment>
        )}
        <div className="w-full flex items-center justify-between mt-16">
          <div className="font-gilroy-medium text-4xl text-secondary dark:text-primary">
            {props.data.year}
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default ProjectCard;
