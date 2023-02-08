import React from "react";
import Button from "../Button";
import { attributes as contactAttributes } from "../../content/contact_details.md";

const SayHello = (props) => {
  return (
    <div className="w-[150vw] md:w-screen lg:w-[70vw] flex flex-col items-center justify-center text-highlight dark:text-white text-center">
      <div className="flex items-center justify-center mb-8">
        <span className="font-gilroy-bold text-4xl">Get in touch</span>
        <span className="animate-wave text-3xl ml-2">👋🏻</span>
      </div>
      <span className="font-gilroy-medium text-xl mb-4">
        Feel free to email me about anything.{" "}
      </span>
      <span className="font-gilroy-medium text-gray-600 text-base mb-4">
        (or)
      </span>
      <span className="font-gilroy-medium text-xl mb-8">
        Call me at
        <a
          className="text-secondary dark:text-primary ml-3"
          href={`tel:${contactAttributes.phone}`}
        >
          {contactAttributes.phone}
        </a>
        .
      </span>
      <span className="font-gilroy-medium text-xl mb-8">
        You can also reach me around the web:
        <br className="block lg:hidden" />
        {contactAttributes.show_in_get_in_touch.map((social, i) => (
          <a
            className="text-secondary capitalize dark:text-primary ml-3"
            key={i}
            href={contactAttributes[social]}
          >
            {social},
          </a>
        ))}
      </span>
      <Button
        size="large"
        external={true}
        to={`mailto:${contactAttributes.mail}`}
      >
        Say Hello
      </Button>
    </div>
  );
};

export default SayHello;
