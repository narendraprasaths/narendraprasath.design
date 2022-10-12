import React from "react";
import PropTypes from "prop-types";
import Link from "next/link";

const ButtonContent = (props) => {
  return (
    <div
      className={`rounded-lg cursor-pointer text-highlight dark:text-white shadow-default dark:shadow-primary bg-lightGray dark:bg-transparent`}
    >
      {props.size === "small" && (
        <div className="px-4 py-2 text-sm leading-none">{props.children}</div>
      )}
      {props.size === "medium" && (
        <div className="px-6 py-3 text-lg leading-none">{props.children}</div>
      )}
      {props.size === "large" && (
        <div className="px-8 py-2 text-3xl leading-none">{props.children}</div>
      )}
    </div>
  );
};

const Button = (props) => {
  if (props.external) {
    return (
      <a href={props.to} target="_blank" rel="noreferrer">
        <ButtonContent {...props} />
      </a>
    );
  } else {
    return (
      <Link
        href={props.to}
        as={props.to}
        passHref
        target={props.external ? "_blank" : ""}
      >
        <ButtonContent {...props} />
      </Link>
    );
  }
};

Button.defaultProps = {
  onClick: () => {
  },
  size: "small",
  to: "/",
  external: false,
};

Button.propTypes = {
  onClick: PropTypes.func.isRequired,
  size: PropTypes.string.isRequired,
  to: PropTypes.string.isRequired,
  external: PropTypes.bool,
};

export default Button;
