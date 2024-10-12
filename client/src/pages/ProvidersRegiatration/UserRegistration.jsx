import React, { useState } from 'react';
import InputField from './InputField';
import CheckboxField from './CheckboxField';

const inputFields = [
  { label: 'NAME', type: 'text' },
  { label: 'EMAIL ID', type: 'email' },
  { label: 'UserId', type: 'text' },
  { label: 'Company', type: 'text' },
  { label: 'Industry', type: 'text' },
  { label: 'Location', type: 'text' },
  { label: 'Address', type: 'text' },
  { label: 'ph-No', type: 'tel' },
  { label: 'Password', type: 'password' },
  { label: 'Confirm Password', type: 'password' }
];

function UserRegistration() {
  const [formData, setFormData] = useState({});

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission, e.g., send data to backend or perform validations
    console.log(formData);
  };

  return (
    <main className="flex flex-col rounded-none bg-gray-800 min-h-screen">
      <header className="z-10 -mt-3 text-4xl font-semibold text-white max-md:max-w-full">
        Create your account today and unlock endless opportunities!
      </header>
      <section className="flex flex-col self-center py-16 pr-20 pl-9 mt-16 max-w-full text-xl font-medium text-black bg-white rounded-[30px] shadow-[0px_4px_4px_rgba(0,0,0,0.25)] w-[656px] max-md:px-5 max-md:mt-10">
        <h1 className="text-2xl font-semibold text-center text-teal-600 w-[518px] max-md:max-w-full mb-[20px]">
          USER DETAILS
        </h1>
        <form className="text-left flex flex-wrap gap-0.5 items-start max-md:max-w-full mb-[10px]" onSubmit={handleSubmit}>
          {inputFields.map((field, index) => (
            <InputField 
              key={index} 
              label={field.label} 
              type={field.type} 
              name={field.label.replace(/\s+/g, '').toLowerCase()}
              onChange={handleInputChange}
            />
          ))}
          <CheckboxField />
          <div className="w-full flex justify-center">
            <button
              type="submit"
              className="self-center px-16 py-9 mt-10 font-semibold leading-tight text-white bg-teal-600 rounded-[30px] max-md:px-5 max-md:mt-10"
            >
              CREATE
            </button>
          </div>
        </form>
      </section>
    </main>
  );
}

export default UserRegistration;
