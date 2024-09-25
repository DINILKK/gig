import React from 'react';

function InputField({ label, type }) {
  const id = label.toLowerCase().replace(/\s+/g, '-');
  return (
    <>
      <label htmlFor={id} className="grow shrink w-[134px]">{label}</label>
      <input
        id={id}
        type={type}
        className="flex grow shrink h-14 bg-white border border-black border-solid min-w-[240px] w-[518px] max-md:max-w-full"
        aria-label={label}
      />
    </>
  );
}

export default InputField;