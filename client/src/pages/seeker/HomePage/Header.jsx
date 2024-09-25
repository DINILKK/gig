import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

function Header() {
  const [isExpanded, setIsExpanded] = useState(false);
  const [isContentVisible, setIsContentVisible] = useState(false);

  useEffect(() => {
    // Expand the header after a delay
    const timer = setTimeout(() => {
      setIsExpanded(true);
    }, 400); // Adjust delay as needed

    // Show the content after the expansion animation ends
    const contentTimer = setTimeout(() => {
      setIsContentVisible(true);
    }, 1200); // Slight delay to show the content after header expansion

    return () => {
      clearTimeout(timer);
      clearTimeout(contentTimer);
    };
  }, []);

  return (
    <header className="flex flex-col pt-5 pb-3.5 pl-2 bg-gray-800 w-full max-md:max-w-full">
      <nav
        className={`transition-all duration-700 ease-out transform ${
          isExpanded ? 'scale-100 w-[1200px] h-auto rounded-[50px]' : 'scale-100 w-[100px] h-auto rounded-full'
        } flex flex-col items-center self-center px-16 pt-2 pb-5 max-w-full text-white bg-slate-600 max-md:px-5 shadow-lg shadow-slate-900/50`}
        style={{
          transformOrigin: 'center',
        }}
      >
        <div
          className={`flex flex-wrap gap-5 justify-between transition-opacity duration-700 ${
            isContentVisible ? 'opacity-100' : 'opacity-0'
          } w-[1075px] max-md:w-full`}
        >
          <a href="#" title="Home" className="flex items-center">
            <img
              className="w-auto h-8 lg:h-10"
              src="#" // Replace with your logo URL
              alt="Logo"
            />
            <h1 className="ml-2 text-4xl font-bold text-white">gig</h1>
          </a>

          <a href="#about" className="self-start text-4xl text-right">
            <span className="text-2xl">about</span>{" "}
            <span className="text-2xl">us</span>
          </a>
        </div>
      </nav>
    </header>
  );
}

export default Header;
