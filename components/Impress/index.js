import { Impress, Step } from "react-impressjs";
import Steps from "../HomeSections";
import React from "react";
import ImpressContainer from "./ImpressContainer";
import Hint from "./Hint";

const HomeSections = () => {
  return (
    <ImpressContainer>
      <Impress
        fallbackMessage="Sorry, your device or browser couldn't support well."
        hintOn={false}
        hintMessage={<Hint />}
      >
        {Steps.map((step, i) => (
          <Step
            key={i}
            id={step.id}
            className={step.className}
            data={step.data}
          >
            {step.content}
          </Step>
        ))}
      </Impress>
    </ImpressContainer>
  );
};

export { Impress };

export default HomeSections;
