import React from "react";
import FormField from "./FormField";

function GigForm() {
  const formFields = [
    { label: "Position", type: "text" },
    { label: "Duration", type: "text" },
    { label: "Pay", type: "text" },
    { label: "Date", type: "date" },
    { label: "No of Vacancy", type: "number" },
    { label: "Shift", type: "text" },
    { label: "Description", type: "textarea" }
  ];

  return (
    <form className="flex flex-col w-9/12 max-md:ml-0 max-md:w-full">
      <div className="flex overflow-hidden flex-col items-start px-20 py-16 mx-auto w-full bg-gray-800 rounded-[30px] max-md:px-5 max-md:mt-10 max-md:max-w-full">
        {formFields.map((field, index) => (
          <FormField key={index} {...field} />
        ))}
      </div>
    </form>
  );
}

export default GigForm;