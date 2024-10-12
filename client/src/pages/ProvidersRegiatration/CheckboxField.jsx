import React from 'react';

function CheckboxField() {
  return (
    <div className="flex flex-wrap gap-10 mt-12 ml-7 max-w-full w-[488px] max-md:mt-10">
      <input
        type="checkbox"
        id="terms-agreement"
        className="flex shrink-0 self-start mt-1.5 border border-black border-solid bg-zinc-100 h-[42px] w-[42px]"
      />
      <label htmlFor="terms-agreement" className="flex-auto w-[388px]">
        By confirming you have been agreed to our terms
      </label>
    </div>
  );
}

export default CheckboxField;