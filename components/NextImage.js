import React from "react";
import PropTypes from "prop-types";
import images from "../assets/images";
import Image from "next/image";
import {useTheme} from "next-themes";

const shimmer = (w, h) => `
	<svg width="${w}" height="${h}" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
		<defs>
			<linearGradient id="g">
				<stop stop-color="#333" offset="20%" />
				<stop stop-color="#222" offset="50%" />
				<stop stop-color="#333" offset="70%" />
			</linearGradient>
		</defs>
		<rect width="${w}" height="${h}" fill="#333" />
		<rect id="r" width="${w}" height="${h}" fill="url(#g)" />
		<animate xlink:href="#r" attributeName="x" from="-${w}" to="${w}" dur="1s" repeatCount="indefinite"  />
	</svg>
`;

const toBase64 = (str) =>
  typeof window === "undefined"
    ? Buffer.from(str).toString("base64")
    : window.btoa(str);

const NextImage = (props) => {
  const {theme} = useTheme();

  return (
    <Image
      onClick={props.onClick}
      src={props.external ? props.src : images[props.src][theme || "dark"]}
      alt={props.alt}
      width={props.width}
      height={props.height}
      className={props.className}
      blurDataURL={`data:image/svg+xml;base64,${toBase64(
        shimmer("100%", "100%")
      )}`}
    />
  );
};

NextImage.defaultProps = {
  theme: "dark",
  alt: "Next default picture",
  className: "",
  onClick: () => {
  },
  src: "placeholder",
  placeholder: "blur",
  external: false,
  width: 0,
  height: 0,
};

NextImage.propTypes = {
  theme: PropTypes.string,
  alt: PropTypes.string,
  className: PropTypes.string,
  onClick: PropTypes.func,
  src: PropTypes.string,
  placeholder: PropTypes.string,
  external: PropTypes.bool,
  width: PropTypes.number,
  height: PropTypes.number,
};

export default NextImage;
