import React from 'react';
import GigCard from './GigCard';

const GigList = () => {
  const gigs = [
    {
      id: '1',
      title: 'Sales person',
      company: 'Puma, Lulu mall',
      type: 'Day shift',
      duration: '6 hrs',
      pay: '150 / hr',
      imageUrl: 'https://cdn.builder.io/api/v1/image/assets/TEMP/01671af37411bebd76c59af087af0b1a5486c86c2f6f9ad5cd72d342e3dc3e93?placeholderIfAbsent=true&apiKey=b1b7c46b698f4e75aa8360aa33741bab',
    },
    {
      id: '2',
      title: 'Sales person',
      company: 'Puma, Lulu mall',
      type: 'Day shift',
      duration: '6 hrs',
      pay: '150 / hr',
      imageUrl: 'https://cdn.builder.io/api/v1/image/assets/TEMP/01671af37411bebd76c59af087af0b1a5486c86c2f6f9ad5cd72d342e3dc3e93?placeholderIfAbsent=true&apiKey=b1b7c46b698f4e75aa8360aa33741bab',
    },
    {
      id: '3',
      title: 'Sales person',
      company: 'Puma, Lulu mall',
      type: 'Day shift',
      duration: '6 hrs',
      pay: '150 / hr',
      imageUrl: 'https://cdn.builder.io/api/v1/image/assets/TEMP/01671af37411bebd76c59af087af0b1a5486c86c2f6f9ad5cd72d342e3dc3e93?placeholderIfAbsent=true&apiKey=b1b7c46b698f4e75aa8360aa33741bab',
    },
    {
      id: '4',
      title: 'Sales person',
      company: 'Puma, Lulu mall',
      type: 'Day shift',
      duration: '6 hrs',
      pay: '150 / hr',
      imageUrl: 'https://cdn.builder.io/api/v1/image/assets/TEMP/01671af37411bebd76c59af087af0b1a5486c86c2f6f9ad5cd72d342e3dc3e93?placeholderIfAbsent=true&apiKey=b1b7c46b698f4e75aa8360aa33741bab',
    },
    {
      id: '5',
      title: 'Sales person',
      company: 'Puma, Lulu mall',
      type: 'Day shift',
      duration: '6 hrs',
      pay: '150 / hr',
      imageUrl: 'https://cdn.builder.io/api/v1/image/assets/TEMP/01671af37411bebd76c59af087af0b1a5486c86c2f6f9ad5cd72d342e3dc3e93?placeholderIfAbsent=true&apiKey=b1b7c46b698f4e75aa8360aa33741bab',
    },
    {
      id: '6',
      title: 'Sales person',
      company: 'Puma, Lulu mall',
      type: 'Day shift',
      duration: '6 hrs',
      pay: '150 / hr',
      imageUrl: 'https://cdn.builder.io/api/v1/image/assets/TEMP/01671af37411bebd76c59af087af0b1a5486c86c2f6f9ad5cd72d342e3dc3e93?placeholderIfAbsent=true&apiKey=b1b7c46b698f4e75aa8360aa33741bab',
    },
  ];

  return (
    <section className="flex flex-col ml-5 w-[100%] max-md:ml-0 max-md:w-full">
      <div className="flex overflow-hidden flex-wrap grow gap-12 items-center leading-tight text-black min-h-[652px] border-l-10 max-md:mt-10 max-md:max-w-full">
        {gigs.map((gig) => (
          <GigCard key={gig.id} {...gig} />
        ))}
      </div>
    </section>
  );
};

export default GigList;
