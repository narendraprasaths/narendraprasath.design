import React from "react";
import PropTypes from "prop-types";
import { attributes as contactAttributes } from "../../content/contact_details.md";
import Button from "../Button";
import SocialMediaProfiles from "./SocialMediaProfiles";
import CopyRight from "../Footer/CopyRight";
import { Close } from "styled-icons/material";

const Menus = (props) => {
  const changeRoute = (hash) => {
    if (props.open) {
      props.setOpen(false);
    }
    window.location.href = hash;
  };

  return (
    <div className="fixed inset-0 bg-white dark:bg-dark z-40 flex flex-col items-center justify-around h-screen w-screen">
      <div
        className="fixed right-4 top-4 cursor-pointer"
        onClick={() => props.setOpen(!props.open)}
      >
        <Close className="text-secondary dark:text-primary h-10 w-10" />
      </div>
      <div className="mt-10">
        <div className="flex flex-col space-y-6 items-center justify-center text-highlight dark:text-white text-2xl font-semibold font-gilroy-semibold">
          <span
            onClick={() => changeRoute("/#/intro")}
            className="cursor-pointer"
          >
            Home
          </span>
          <span
            onClick={() => changeRoute("/#/about")}
            className="cursor-pointer"
          >
            My Info
          </span>
          <span
            onClick={() => changeRoute("/#/blog")}
            className="cursor-pointer"
          >
            Blog
          </span>
          <span
            onClick={() => changeRoute("/#/experience")}
            className="cursor-pointer"
          >
            Experience
          </span>
          <span
            onClick={() => changeRoute("/#/skills")}
            className="cursor-pointer"
          >
            Skills
          </span>
          <span
            onClick={() => changeRoute("/#/projects")}
            className="cursor-pointer"
          >
            Project
          </span>
          <span
            onClick={() => changeRoute("/#/say-hello")}
            className="cursor-pointer"
          >
            Get in touch
          </span>
        </div>
        <div className="flex lg:hidden items-center justify-center mt-6 mb-8">
          <Button size="medium" to={contactAttributes.resume} external={true}>
            Resume
          </Button>
        </div>
        <div className="flex lg:hidden items-center justify-center space-x-3">
          <SocialMediaProfiles />
        </div>
      </div>
      <CopyRight isFooter={false} />
    </div>
  );
};

Menus.defaultProps = {
  open: false,
  setOpen: () => {},
};

Menus.propTypes = {
  open: PropTypes.bool.isRequired,
  setOpen: PropTypes.func.isRequired,
};

export default Menus;
