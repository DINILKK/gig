import React from 'react';

const GigCard = ({ title, company, type, duration, pay, imageUrl }) => {
  return (
    <article className="flex flex-col grow shrink-0 my-auto min-w-[140px] max-w-[180px] shadow-md mt-[10px] rounded-[30px] ml-[50px] mb-[30px]" >
      <div className="flex flex-col items-start px-[20px] py-[20px] w-full bg-neutral-100 rounded-[30px] md:pl-2">
        <div className="flex gap-[1px]">
          <div className="flex-shrink-0 h-[40px] w-[40px] rounded-full border border-black bg-zinc-300" />
          <div className="flex flex-col justify-center">
            <h3 className="text-base font-semibold">{title}</h3>
            <p className="mt-1 text-sm text-gray-700">{company}</p>
          </div>
        </div>
        <p className="mt-6 text-sm">
          Type: <span className="font-medium">{type}</span>
        </p>
        <p className="mt-4 text-sm">
          Duration: <span className="font-semibold">{duration}</span>
        </p>
        <p className="mt-4 text-sm">
          Pay: <span className="font-semibold">{pay}</span>
        </p>
        {imageUrl && (
          <img
            loading="lazy"
            src={imageUrl}
            alt={`${title} gig`}
            className="object-contain w-full h-auto mt-4 aspect-ratio"
          />
        )}
        <button
          aria-label="View details"
          className="self-center px-6 py-2 mt-6 text-sm font-semibold text-white bg-gray-800 rounded-full"
        >
          Details
        </button>
      </div>
    </article>
  );
};

export default GigCard;
