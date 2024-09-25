import React from 'react';
import { FaUserCircle } from 'react-icons/fa'; // Import Font Awesome user icon

function GigTrackerHeader() {
  return (
    <header className="bg-gray-800 border-b border-gray-700 w-full fixed top-0 left-0 shadow-lg z-50">
      <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <nav className="flex flex-wrap items-center justify-between h-auto lg:h-20 py-4">
          <div className="flex-shrink-0 flex items-center">
            <a href="#" title="Home" className="flex items-center">
            <img 
                className="w-auto h-8 lg:h-10" 
                src="#" // Replace with your logo URL
                alt="Logo" 
              />
              <h1 className="ml-2 text-4xl font-bold text-teal-500">gig</h1>
            </a>
          </div>
          <div className="flex flex-col items-center mt-4 md:mt-0 md:flex-row md:items-center md:space-x-10">
            <a 
              href="#" 
              title="Gig Pool" 
              className="text-sm font-medium text-white transition-all duration-200 lg:text-base hover:text-opacity-70 focus:text-opacity-70"
            >
              gig pool
            </a>

            <a 
              href="#" 
              title="Gig Tracker" 
              className="text-sm font-medium text-teal-500 transition-all duration-200 lg:text-base hover:text-opacity-70 focus:text-opacity-70"
            >
              gig tracker
            </a>

            <a 
              href="#" 
              title="Gig Journal" 
              className="text-sm font-medium text-white transition-all duration-200 lg:text-base hover:text-opacity-70 focus:text-opacity-70"
            >
              gig journal
            </a>

            {/* Profile Icon */}
            <a 
              href="#" 
              title="Profile" 
              className="text-white text-l ml-4"
            >
              <FaUserCircle className="w-8 h-8" />
            </a>
          </div>
        </nav>
        <div className="text-white text-2xl mt-8 mb-4 text-left">
          <h1>Monitor Your Gig Progress!</h1>
        </div>
        <div className="text-white text-base mt-4 mb-5">
          <p>Stay updated on your job hunt—track pending applications and see which gigs have been approved, all from one convenient dashboard.</p>
        </div>
      </div>
    </header>
  );
}

export default GigTrackerHeader;
