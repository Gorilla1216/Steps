import { useState } from "react";

export const StepThree = ({ handleNext, handlePrev }) => {
  const [date, setDate] = useState("");
  const [imgUrl, setImgUrl] = useState("");
  const [fileError, setFileError] = useState("");

  const handleImgUpload = (event) => {
    const file = event.target.files?.[0];
    if (!file) return;
    setImgUrl(URL.createObjectURL(file));
    setDate("");
  };

  const validateInput = () => {
    if (!imgUrl) {
      setFileError("Please upload profile picture");
      return false;
    }
    setFileError("");
    return true;
  };

  const handleButtonClickTwo = () => {
    if (validateInput()) {
      handleNext() && handlePrev();
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
              htmlFor="Date"
              className="text-lg text-[#334155] font-semibold "
            >Date of birth</label>
            <input
              type="date"
              name="date"
              value={date}
              onChange={(event) => setDate(event.target.value)}
              className="w-64 text-<base> border border-[#0CA5E9] rounded-md px-4 py-2"
            />
         
          </div>
          <div className="flex flex-col">
            <label
              htmlFor="image"
              className="text-lg text-[#334155] font-semibold "
            >
              Profile image
            </label>
            <input
              type="file"
              accept="image/*"
              onChange={handleImgUpload}
              className="w-64 text-<base> border border-[#0CA5E9] rounded-md px-4 py-2"
            />
            {imgUrl && (<img src={imgUrl} className="w-50"/>)}
            {fileError.length > 0 && <p className="font-normal text-sm text-[#E14942]">{fileError}</p>}
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
              Continue 3/3
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
