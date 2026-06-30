import { useState } from "react";

export const StepFour = () => {
  return (
    <div className="flex align-center justify-center">
      <div className="w-lg h-[14rem] flex align-center justify-center border rounded-lg my-8">
        <div className="flex flex-col rounded gap-1 py-4 my-4">
          <img className="w-[60px]" src="/logo.svg" alt="" />
          <div className="text-2xl font-semibold">
            <h1>You're all set</h1>
          </div>
          <div className="text-lg text-[#8E8E8E]">
            <p>We have received your submission. Thank you!</p>
          </div>
        </div>
      </div>
    </div>
  );
};
