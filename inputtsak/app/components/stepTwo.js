import { use, useState } from "react";

export const StepTwo = ({ handleNext, handlePrev }) => {
  const [email, setEmail] = useState("");
  const [emailError, setEmailError] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [phoneNumberError, setPhoneNumberError] = useState("");
  const [password, setPassword] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [confrirmPassword, setConfirmPassword] = useState("");

  const checkEmail = () => {
    const onlyAt = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const onlyNumber = /^[0-9]{8,12}$/;
    const onlyPassword = /^(?=.*[A-Za-z])(?=.*\d)[^\s]{8,}$/;
    let isValid = true;

    if (email.length == 0) {
      setEmailError("Please provide a valid email address.");
      isValid = false;
    } else if (onlyAt.test(email) == false) {
      setEmailError("Please provide a valid email address.");
      isValid = false;
    } else {
      setEmailError("");
    }

    if (phoneNumber.length == 0) {
      setPhoneNumberError("Please enter a valid phone number.");
      isValid = false;
    } else if (onlyNumber.test(phoneNumber) == false) {
      setPhoneNumberError("Please enter a valid phone number");
      isValid = false;
    } else {
      setPhoneNumberError("");
    }

    if (password.length == 0) {
      setPasswordError("Password must include letters and numbers");
      isValid = false;
    } else if (onlyPassword.test(password) == false) {
      setPasswordError("Password must include letters and numbers");
      isValid = false;
    } else {
      setPasswordError("");
    }

    if (confrirmPassword.length == 0) {
      setConfirmPassword(" Passwords do not match. Please try again.");
      isValid = false;
    } else if (confrirmPassword !== password){
      setConfirmPassword(" Password do not match. Please try again.")
    }
    return isValid;
  };

  const handleButtonClickTwo = () => {
    const isValid = checkEmail();
    if (isValid == true) {
      handleNext();
    }
  };

  return (
    <div className="flex align-center justify-center">
      <div className="w-lg h-[40rem] flex align-center justify-center border rounded-lg my-8">
        <div className="flex flex-col rounded gap-1 py-4 my-4">
          <img className="w-[60px]" src="/logo.svg" alt="" />
          <div className="text-2xl font-semibold">
            <h1>Join Us!</h1>
          </div>
          <div className="text-lg text-[#8E8E8E]">
            <p>Please provide all current information accurately</p>
          </div>
          <div className="flex flex-col">
            <label
              htmlFor="Email Address"
              className="text-lg text-[#334155] font-semibold "
            >
              Email
            </label>
            <input
              type="email"
              placeholder="your@example.com"
              value={email}
              onChange={(event) => setEmail(event.target.value)}
              className="w-64 text-<base> border border-[#0CA5E9] rounded-md px-4 py-2"
            />
            {emailError.length > 0 && (
              <p className="font-normal text-sm text-[#E14942]">{emailError}</p>
            )}
          </div>
          <div className="flex flex-col">
            <label
              htmlFor="Phone number"
              className="text-lg text-[#334155] font-semibold "
            >
              Phone number
            </label>
            <input
              type="text"
              value={phoneNumber}
              onChange={(event) => setPhoneNumber(event.target.value)}
              className="w-64 text-<base> border border-[#0CA5E9] rounded-md px-4 py-2"
            />
            {phoneNumberError.length > 0 && (
              <p className="font-normal text-sm text-[#E14942]">
                {phoneNumberError}
              </p>
            )}
          </div>
          <div className="flex flex-col">
            <label
              htmlFor="Password"
              className="text-lg text-[#334155] font-semibold "
            >
              Password
            </label>
            <input
              type="password"
              value={password}
              onChange={(event) => setPassword(event.target.value)}
              className="w-64 text-<base> border border-[#0CA5E9] rounded-md px-4 py-2"
            />
            {passwordError.length > 0 && (
              <p className="font-normal text-sm text-[#E14942]">
                {passwordError}
              </p>
            )}
          </div>
          <div className="flex flex-col">
            <label
              htmlFor="Password"
              className="text-lg text-[#334155] font-semibold "
            >
              Confirm Password
            </label>
            <input
              type="password"
              value={confrirmPassword}
              onChange={(event) => setConfirmPassword(event.target.value)}
              className="w-64 text-<base> border border-[#0CA5E9] rounded-md px-4 py-2"
            />
            {confrirmPassword.length > 0 && (
              <p className="font-normal text-sm text-[#E14942]">
                {setConfirmPassword}
              </p>
            )}
          </div>
          <div className="flex gap-4 my-10 rounded-sm">
            <button
              onClick={() => handlePrev()}
              className="w-32 h-12 bg-[#ffffff] text-[#202124] border border-[#CBD5E1] "
            >
              Back
            </button>
            <button
              onClick={() => handleButtonClickTwo()}
              className="w-64 h-12 bg-[#121316] text-[#FFFFFF] border "
            >
              Continue 2/3
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
