import React from 'react';
import GigItem from './GigItem';
import Header from './Header';

const gigs = [
  { title: 'waiter', applicants: 17, status: 'live' },
  { title: 'waiter', applicants: 17, status: 'live' },
  { title: 'waiter', applicants: 17, status: 'pending' }
];

function GigList() {
  return (
    <section className="flex overflow-hidden flex-col items-center pb-11 bg-white">
      {/* Header positioned at the top */}
      <div className="w-full fixed top-0 left-0 z-10">
        <Header />
      </div>
      
      {/* Add padding to account for the fixed header */}
      <main className="pt-[200px] max-md:pt-[120px] w-full">
        {gigs.map((gig, index) => (
          <GigItem key={index} {...gig} />
        ))}
      </main>
    </section>
  );
}

export default GigList;
