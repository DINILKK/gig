import React from "react";

function ActionButtons() {
  return (
    <div className="flex flex-col ml-5 w-3/12 max-md:ml-0 max-md:w-full">
      <div className="flex flex-col self-stretch my-auto text-xl leading-tight max-md:mt-10">
        <button type="submit" className="px-14 py-6 font-bold text-white bg-teal-600 rounded-[30px] max-md:px-5">
          post it!
        </button>
        <button type="button" className="px-14 py-7 mt-4 text-black whitespace-nowrap bg-white border border-black border-solid font-[275] rounded-[30px] max-md:px-5">
          Cancel
        </button>
      </div>
    </div>
  );
}

export default ActionButtons;