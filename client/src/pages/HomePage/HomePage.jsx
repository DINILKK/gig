import React from 'react';
import Header from './Header';
import WelcomeSection from './WelcomeSection';
import TopProviders from './TopProviders.jsx';

function GigPlatform() {
  return (
    <div className="flex flex-col bg-gray-800">
      <Header />
      <main className="flex flex-col items-end px-16 pt-32 pb-56  w-full bg-gray-800 max-md:px-5 max-md:py-24 max-md:mr-0 max-md:max-w-full">
        <div className="mb-0 w-full max-w-[1474px] max-md:mb-2.5 max-md:max-w-full">
          <div className="flex gap-5 max-md:flex-col">
            <WelcomeSection />
            <TopProviders />
          </div>
        </div>
      </main>
    </div>
  );
}

export default GigPlatform;