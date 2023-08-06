import React from "react";
import { Close, Menu } from "styled-icons/material";
import ThemeToggle from "./ThemeToggle";
import SocialMediaProfiles from "./SocialMediaProfiles";
import Menus from "./Menus";
import { attributes as siteMetaAttributes } from "../../content/site_meta.md";
import { attributes as contactAttributes } from "../../content/contact_details.md";

const TopNavBar = () => {
  const [openMenu, setOpenMenu] = React.useState(false);

  const goToHomeSection = () => {
    window.location.href = "/#/intro";
  };

  return (
    <header className="z-40 backdrop-blur-[200px]">
      <div className="flex items-center justify-between border-grey dark:border-grey border-b px-4">
        <span
          className="text-base font-gilroy-semibold italic cursor-pointer"
          onClick={goToHomeSection}
        >
          {siteMetaAttributes.site_title}
        </span>
        <div className="flex items-center justify-end">
          <div className="pr-4 py-2 hidden lg:block">
            <a
              href={contactAttributes.resume}
              target="_blank"
              rel="noreferrer"
              className="bg-lightGray dark:bg-black text-highlight dark:text-white px-4 py-2 rounded shadow-lg dark:shadow-none dark:hover:bg-primary hover:bg-secondary hover:text-white"
            >
              Resume
            </a>
          </div>
          <div className="flex items-center border-grey dark:border-grey border-r border-l p-4">
            <ThemeToggle />
          </div>
          <div className="border-grey dark:border-grey border-r p-4 space-x-2 hidden lg:flex">
            <SocialMediaProfiles
              mail={contactAttributes.mail}
              phone={contactAttributes.phone}
              facebook={contactAttributes.facebook}
              linkedin={contactAttributes.linkedin}
              twitter={contactAttributes.twitter}
              instagram={contactAttributes.instagram}
              github={contactAttributes.github}
              dribbble={contactAttributes.dribbble}
              behance={contactAttributes.behance}
            />
          </div>
          <div
            className="flex items-center justify-end border-grey dark:border-grey p-4 pr-0 cursor-pointer"
            onClick={() => setOpenMenu(!openMenu)}
          >
            <span className="text-base font-gilroy-medium text-highlight dark:text-white mr-4">
              Menu
            </span>
            {openMenu ? (
              <Close className="text-secondary dark:text-primary h-5 w-5" />
            ) : (
              <Menu className="text-secondary dark:text-primary h-5 w-5" />
            )}
          </div>
        </div>
      </div>
      {openMenu && <Menus open={openMenu} setOpen={setOpenMenu} />}
    </header>
  );
};

export default TopNavBar;
