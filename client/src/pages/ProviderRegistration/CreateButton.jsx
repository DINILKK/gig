import React from 'react';

function CreateButton() {
  return (
    <button
      type="submit"
      className="self-center px-16 py-9 w-48 max-w-full font-semibold leading-tight text-white whitespace-nowrap bg-teal-600 rounded-[30px] max-md:px-5"
      style={{ marginTop: '1cm' }}  // Moving the button down by 2cm
    >
      CREATE
    </button>
  );
}

export default CreateButton;
