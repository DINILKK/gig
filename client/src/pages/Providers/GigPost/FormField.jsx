import React from "react";

function FormField({ label, type }) {
  const inputId = label.toLowerCase().replace(/\s+/g, '-');

  let inputElement;
  if (type === "textarea") {
    inputElement = (
      <textarea
        id={inputId}
        className="flex shrink-0 bg-white rounded-lg h-[110px] w-full"
        aria-label={label}
      />
    );
  } else if(type==="text") {
    inputElement = (
      <input
        type={type}
        id={inputId}
        className="flex shrink-0 bg-white rounded-lg h-[40px] w-full"
        aria-label={label}
      />
    );
  } else {
    inputElement = (
      <input
        type={type}
        id={inputId}
        className="flex shrink-0 bg-white rounded-lg "
        aria-label={label}
      />
    );
  }

  return (
    <div className="flex gap-5 justify-between items-center max-w-full w-[400px] mt-9 first:mt-0">
      <label 
        htmlFor={inputId} 
        className="flex flex-col text-2xl leading-tight whitespace-nowrap text-zinc-50 min-w-[120px] text-right">
        {label}
      </label>
      <div className="flex-grow">
        {inputElement}
      </div>
    </div>
  );
}

export default FormField;
