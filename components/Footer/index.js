import React from "react";
import { Logout } from "styled-icons/material-outlined";
import { ArrowLeft, ArrowRight } from "styled-icons/octicons";
import CopyRight from "./CopyRight";
import HomeSections from "../HomeSections";

const Footer = () => {
  const triggerLeftEvent = () => {
    let currentLocation = window.location.href.split("/#/")[1] || "intro";
    let currentIndex = HomeSections.findIndex(
      (section) => section.id === currentLocation
    );
    let newIndex;
    if (currentIndex === 0) {
      newIndex = HomeSections.length - 1;
    } else {
      newIndex = currentIndex - 1;
    }
    window.location.href = `/#/${HomeSections[newIndex].id}`;
  };

  const triggerRightEvent = () => {
    let currentLocation = window.location.href.split("/#/")[1] || "intro";
    let currentIndex = HomeSections.findIndex(
      (section) => section.id === currentLocation
    );
    let newIndex;
    if (currentIndex === HomeSections.length - 1) {
      newIndex = 0;
    } else {
      newIndex = currentIndex + 1;
    }
    window.location.href = `/#/${HomeSections[newIndex].id}`;
  };

  return (
    <footer className="z-40">
      <div className="flex items-center justify-between border-grey dark:border-grey border-t">
        <div className="flex items-center px-4 py-2 border-grey dark:border-grey border-r">
          <Logout className="cursor-pointer text-highlight hover:text-secondary dark:text-white dark:hover:text-primary h-8 w-8 rotate-[270deg]" />
        </div>
        <CopyRight isFooter={true} />
        <div className="flex items-center justify-end">
          <div className="flex items-center px-4 py-2 border-grey dark:border-grey border-l border-r">
            <ArrowLeft
              onClick={triggerLeftEvent}
              className="cursor-pointer text-highlight hover:text-secondary dark:text-white dark:hover:text-primary h-8 w-8"
            />
          </div>
          <div className="flex items-center px-4 py-2">
            <ArrowRight
              onClick={triggerRightEvent}
              className="cursor-pointer text-highlight hover:text-secondary dark:text-white dark:hover:text-primary h-8 w-8"
            />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
