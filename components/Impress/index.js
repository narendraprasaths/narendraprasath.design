import {Impress, Step} from 'react-impressjs';
import Steps from "../HomeSections";
import React from "react";
import ImpressContainer from "./ImpressContainer";

const HomeSections = () => {
  return (
    <ImpressContainer>
      <Impress
        fallbackMessage="Sorry, your device or browser couldn't support well."
        hintOn={false}
        // hintMessage={<div className="absolute left-0 bottom-[100px]">Hint</div>}
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

export {
  Impress
};

export default HomeSections;
