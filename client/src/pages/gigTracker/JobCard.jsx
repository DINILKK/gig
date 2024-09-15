import React from 'react';

function JobCard({ title, location }) {
  return (
    <div className="flex flex-col w-auto mt-5">
      <div className="py-5 px-6 bg-white border border-pink-800 rounded-2xl shadow-md">
        <div className="flex gap-5 items-center max-md:flex-col">
          {/* Job Info Section */}
          <div className="flex flex-col w-4/5 max-md:w-full">
            <div className="flex items-center gap-5 max-md:flex-col">
              {/* Placeholder for Image/Icon */}
              <div
                className="flex-shrink-0 rounded-full bg-zinc-300 h-[72px] w-[72px]"
                aria-hidden="true"
              />
              {/* Job Title */}
              <div className="flex flex-col">
                <h3 className="text-2xl font-semibold text-black">{title}</h3>
              </div>
            </div>
          </div>

          {/* Location Info Section */}
          <div className="flex flex-col items-center w-1/5 max-md:w-full">
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/26899e10f6eb1aa28da1feb369e8d123473c4340bfebab069395ee171eeed509?placeholderIfAbsent=true&apiKey=b1b7c46b698f4e75aa8360aa33741bab"
              alt="Location icon"
              className="w-7 h-7 object-contain"
            />
            <div className="mt-2 text-base text-black text-opacity-90">
              {location}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default JobCard;
