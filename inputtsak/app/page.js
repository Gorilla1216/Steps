"use client";

import { useState } from "react";
import { StepOne } from "./components/stepOne";
import { StepTwo } from "./components/stepTwo";
import { StepThree } from "./components/stepThree";
import { StepFour } from "./components/stepFour";

export default function App() {
  const [step, setStep] = useState(1);

  const handleNext = () => {
    setStep(step + 1);
  };
  const handlePrev = () => {
    setStep(step - 1);
  };

  return (
    <>
      {step == 1 && <StepOne handleNext={handleNext} />}
      {step == 2 && <StepTwo handleNext={handleNext} handlePrev={handlePrev}/>}
      {step == 3 && <StepThree handleNext={handleNext} handlePrev={handlePrev}/>} 
      {step == 4 && <StepFour handlePrev={handlePrev}/>}
      
     
    </>
  );
}
