import React from 'react';
import GigCard from './GigCard';

const gigData = [
  {
    title: "Attendee",
    location: "Lulu mall",
    address: "Edapalli",
    amount: "500.00",
    rating: "4.4",
    date: "29, May 2024"
  },
  {
    title: "Attendee",
    location: "Lulu mall",
    address: "Edapalli",
    amount: "500.00",
    rating: "4.4",
    date: "29, May 2024"
  },
  {
    title: "Attendee",
    location: "Lulu mall",
    address: "Edapalli",
    amount: "500.00",
    rating: "4.4",
    date: "29, May 2024"
  }
];

function GigHistorySection() {
  return (
    <section className="flex overflow-hidden flex-col mt-12 min-h-[603px] max-md:mt-10 max-md:max-w-full">
      {gigData.map((gig, index) => (
        <GigCard key={index} {...gig} />
      ))}
    </section>
  );
}

export default GigHistorySection;