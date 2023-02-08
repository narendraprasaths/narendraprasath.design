import React from "react";
import PropTypes from "prop-types";
import { Heart } from "styled-icons/boxicons-solid";

const CopyRight = (props) => {
  return (
    <div
      className={`${
        props.isFooter ? "hidden lg:flex" : "flex lg:hidden flex-col"
      } items-center text-sm font-gilroy-medium text-graySecondary dark:text-gray`}
    >
      <div className={props.isFooter ? "" : "mb-2"}>
        Copyright © {new Date().getFullYear()}. All rights reserved
      </div>
      <div>
        <span className="mr-1">Made with</span>
        <Heart className="text-secondary dark:text-primary h-5 w-5 mx-1" />
        <span className="mx-1">by</span>
        <a
          className="text-secondary dark:text-primary mx-1"
          href="https://narendraprasath.design"
        >
          Naren
        </a>
        <span className="mx-1">and</span>
        <a
          className="text-secondary dark:text-primary mx-1"
          href="https://matheswaaran.com"
        >
          Me
        </a>
      </div>
    </div>
  );
};

CopyRight.defaultProps = {
  isFooter: true,
};

CopyRight.propTypes = {
  isFooter: PropTypes.bool.isRequired,
};

export default CopyRight;
