import React from "react";

import { Mail } from "styled-icons/fluentui-system-filled";
import {
  Behance,
  Dribbble,
  Facebook,
  Github,
  Instagram,
  Linkedin,
  Twitter,
} from "styled-icons/boxicons-logos";

const SocialMediaProfiles = (props) => {
  return (
    <React.Fragment>
      {props.mail && (
        <a href={`mailto:${props.mail}`}>
          <Mail className="cursor-pointer text-highlight hover:text-secondary dark:text-white dark:hover:text-primary h-5 w-5" />
        </a>
      )}
      {props.github && (
        <a href={props.github} target="_blank" rel="noreferrer">
          <Github className="cursor-pointer text-highlight hover:text-secondary dark:text-white dark:hover:text-primary h-5 w-5" />
        </a>
      )}
      {props.twitter && (
        <a href={props.twitter} target="_blank" rel="noreferrer">
          <Twitter className="cursor-pointer text-highlight hover:text-secondary dark:text-white dark:hover:text-primary h-5 w-5" />
        </a>
      )}
      {props.linkedin && (
        <a href={props.linkedin} target="_blank" rel="noreferrer">
          <Linkedin className="cursor-pointer text-highlight hover:text-secondary dark:text-white dark:hover:text-primary h-5 w-5" />
        </a>
      )}
      {props.instagram && (
        <a href={props.instagram} target="_blank" rel="noreferrer">
          <Instagram className="cursor-pointer text-highlight hover:text-secondary dark:text-white dark:hover:text-primary h-5 w-5" />
        </a>
      )}
      {props.dribbble && (
        <a href={props.dribbble} target="_blank" rel="noreferrer">
          <Dribbble className="cursor-pointer text-highlight hover:text-secondary dark:text-white dark:hover:text-primary h-5 w-5" />
        </a>
      )}
      {props.behance && (
        <a href={props.behance} target="_blank" rel="noreferrer">
          <Behance className="cursor-pointer text-highlight hover:text-secondary dark:text-white dark:hover:text-primary h-5 w-5" />
        </a>
      )}
      {props.facebook && (
        <a href={props.facebook} target="_blank" rel="noreferrer">
          <Facebook className="cursor-pointer text-highlight hover:text-secondary dark:text-white dark:hover:text-primary h-5 w-5" />
        </a>
      )}
    </React.Fragment>
  );
};

export default SocialMediaProfiles;
