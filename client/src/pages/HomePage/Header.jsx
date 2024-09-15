import React from 'react';

function Header() {
  return (
    <header className="flex flex-col pt-5 pb-3.5 pl-2 bg-gray-800 max-md:max-w-full">
      <nav className="flex flex-col items-center self-center px-16 pt-2 pb-5 max-w-full leading-tight text-white bg-slate-600 rounded-[50px] w-[1585px] max-md:px-5">
        <div className="flex flex-wrap gap-5 justify-between max-w-full w-[1075px]">
          <h1 className="text-5xl text-center max-md:text-4xl">gig</h1>
          <a href="#about" className="self-start text-4xl">
            <span className="text-2xl">about</span>{" "}
            <span className="text-2xl">us</span>
          </a>
        </div>
      </nav>
    </header>
  );
}

export default Header;