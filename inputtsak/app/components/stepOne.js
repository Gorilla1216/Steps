"use client";

import { useState } from "react";

export const StepOne = ({ handleNext }) => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [userName, setUserName] = useState("");

  const [firstNameError, setFirstNameError] = useState("");
  const [lastNameError, setLastNameError] = useState("");
  const [userNameError, setUserNameError] = useState("");

  const validateInput = () => {
    const onlyLetters = /^[\p{L}\s'-]+$/u;
    let isValid = true;

    if (firstName.length == 0) {
      setFirstNameError(
        "First name cannot contain special characters or numbers.",
      );
      isValid = false;
    } else if (onlyLetters.test(firstName) == false) {
      setFirstNameError(
        "First name cannot contain special characters or numbers",
      );
      isValid = false;
    } else {
      setFirstNameError("");
    }

    if (lastName.length == 0) {
      setLastNameError(
        "First name cannot contain special characters or numbers.",
      );
      isValid = false;
    } else if (onlyLetters.test(lastName) == false) {
      setLastNameError(
        "First name cannot contain special characters or numbers",
      );
      isValid = false;
    } else {
      setLastNameError("");
    }

    if (userName.length == 0) {
      setUserNameError(
        "First name cannot contain special characters or numbers.",
      );
      isValid = false;
    } else if (onlyLetters.test(userName) == false) {
      setUserNameError(
        "First name cannot contain special characters or numbers",
      );
      isValid = false;
    } else {
      setUserNameError("");
    }

    return isValid;
  };

  const handleButtonClick = () => {
    const haha = validateInput();
    if (haha == true) {
      handleNext();
    }
  };

  return (
    <div className="flex align-center justify-center">
      <div className="w-lg h-[40rem] flex align-center justify-center border rounded-lg my-8">
        <div className="flex flex-col rounded py-4 gap-1 my-4">
          <img className="w-[60px]" src="/logo.svg" alt="" />
          <div className="text-2xl font-semibold">
            <h1>Join Us!</h1>
          </div>
          <div className="text-lg text-[#8E8E8E]">
            <p>Please provide all current information accurately</p>
          </div>
          <div className="flex flex-col">
            <label
              htmlFor="first_name"
              className="text-lg text-[#334155] font-semibold "
            >
              First name
            </label>
            <input
              type="text"
              placeholder="Your first name"
              value={firstName}
              onChange={(event) => setFirstName(event.target.value)}
              className="w-64 text-<base> border border-[#0CA5E9] rounded-md px-4 py-2"
            />
            {firstNameError.length > 0 && (
              <p className="font-normal text-sm text-[#E14942]">
                {firstNameError}
              </p>
            )}
          </div>
          <div className="flex flex-col">
            <label
              htmlFor="last_name"
              className="text-lg text-[#334155] font-semibold "
            >
              Last name
            </label>
            <input
              type="text"
              placeholder="Your last name"
              value={lastName}
              onChange={(event) => setLastName(event.target.value)}
              className="w-64 text-<base> border border-[#0CA5E9] rounded-md px-4 py-2"
            />
            {lastNameError.length > 0 && (
              <p className="font-normal text-sm text-[#E14942]">
                {lastNameError}
              </p>
            )}
          </div>
          <div className="flex flex-col">
            <label
              htmlFor="user_name"
              className="text-lg text-[#334155] font-semibold "
            >
              User name
            </label>
            <input
              type="text"
              placeholder="Your user name"
              value={userName}
              onChange={(event) => setUserName(event.target.value)}
              className="w-64 text-<base> border border-[#0CA5E9] rounded-md px-4 py-2"
            />
            {userNameError.length > 0 && (
              <p className="font-normal text-sm text-[#E14942]">
                {userNameError}
              </p>
            )}
          </div>
          <button
            onClick={() => handleButtonClick()}
            className="w64 h-12 bg-[#121316] text-[#FFFFFF] border rounded-sm mt-[100px]"
          >
            Continue 1/3
          </button>
        </div>
      </div>
    </div>
  );
};
