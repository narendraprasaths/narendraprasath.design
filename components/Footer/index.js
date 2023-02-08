import React from "react";
import { Logout } from "styled-icons/material-outlined";
import { ArrowLeft, ArrowRight } from "styled-icons/octicons";
import CopyRight from "./CopyRight";

const Footer = (props) => {
  React.useEffect(() => {
    document.addEventListener("keydown", (event) => {
      console.log(event);
    });
  }, []);

  const triggerEvent = () => {
    var key = 37; //Left arrow key event code
    let element = document.getElementById("impress");

    console.log(element);

    var eventObj = document.createEvent("Events");
    eventObj.initEvent("keydown", true, true);
    eventObj.which = key;
    document.dispatchEvent(eventObj);
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
              onClick={triggerEvent}
              className="cursor-pointer text-highlight hover:text-secondary dark:text-white dark:hover:text-primary h-8 w-8"
            />
          </div>
          <div className="flex items-center px-4 py-2">
            <ArrowRight className="cursor-pointer text-highlight hover:text-secondary dark:text-white dark:hover:text-primary h-8 w-8" />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
