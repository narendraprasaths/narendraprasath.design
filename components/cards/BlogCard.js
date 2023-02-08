import React from "react";
import Button from "../Button";
import NextImage from "../NextImage";

const BlogCard = (props) => {
  return (
    <div className="w-[150vw] md:w-[70vw] lg:w-[40vw] font-gilroy-semibold text-highlight dark:text-white flex flex-col items-start justify-start">
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
              See blog
            </a>
          )}
        </React.Fragment>
      )}
      <div className="w-full flex items-center justify-between mt-16">
        <div className="font-gilroy-medium text-4xl text-secondary dark:text-primary">
          {props.data.year}
        </div>
        {props.showAll && (
          <Button size="large" external={true} to={props.showAll}>
            See all
          </Button>
        )}
      </div>
    </div>
  );
};

export default BlogCard;
