import React from 'react';
import FormInput from './FormInput';
import TermsAgreement from './TermsAgreement';
import CreateButton from './CreateButton';

const formFields = [
  { label: 'NAME', type: 'text' },
  { label: 'Email ID', type: 'email' },
  { label: 'User ID', type: 'text' },
  { label: 'Company', type: 'text' },
  { label: 'Industry', type: 'text' },
  { label: 'Location', type: 'text' },
  { label: 'Address', type: 'text' },
  { label: 'phone-No', type: 'tel' },
  { label: 'Password', type: 'password' },
  { label: 'Confirm Password', type: 'password' },
];

function UserRegistration() {
  return (
    <main className="flex overflow-hidden flex-col items-center px-20 pt-16 pb-40 bg-gray-800 max-md:px-5 max-md:pb-24">
      <div className="flex flex-col ml-7 w-full max-w-[1120px] max-md:max-w-full">
        <h1 className="text-4xl font-semibold text-white max-md:max-w-full">
          Create your account today and unlock endless opportunities!
        </h1>
        <form className="flex flex-col self-center py-16 pr-20 pl-9 mt-16 max-w-full text-xl font-medium text-black bg-white rounded-[30px] shadow-[0px_4px_4px_rgba(0,0,0,0.25)] w-[656px] max-md:px-5 max-md:mt-10">
          <div className="flex flex-wrap gap-0.5 items-start h-[988px] max-md:max-w-full">
            <h2 className="grow shrink text-2xl font-semibold text-center text-teal-600 w-[518px] max-md:max-w-full">
              USER DETAILS
            </h2>
            {formFields.map((field) => (
              <FormInput key={field.label} label={field.label} type={field.type} />
            ))}
          </div>
          <TermsAgreement />
          <CreateButton />
        </form>
      </div>
    </main>
  );
}

export default UserRegistration;