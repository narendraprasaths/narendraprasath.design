import React from "react";
import { useTheme } from "next-themes";
import { DarkTheme } from "styled-icons/fluentui-system-regular";

const ThemeToggle = (props) => {
  const { theme, setTheme } = useTheme();

  return (
    <DarkTheme
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
      className="cursor-pointer text-highlight dark:text-white h-5 w-5"
    />
  );
};

export default ThemeToggle;
