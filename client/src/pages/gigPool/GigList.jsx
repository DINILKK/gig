import React from 'react';
import GigCard from './GigCard';

const GigList = () => {
  const gigs = [
    {
      id: '1',
      title: 'Sales Associate',
      company: 'Puma, Lulu Mall',
      shift: 'Day shift',
      duration: '6 hrs',
      pay: '150 / hr',
      time: '6 AM - 12 PM',
      role: 'Retail Sales Associate',
      description: 'Assist customers with product inquiries, manage transactions, and ensure store organization.',
      imageUrl: 'https://cdn.builder.io/api/v1/image/assets/TEMP/01671af37411bebd76c59af087af0b1a5486c86c2f6f9ad5cd72d342e3dc3e93?placeholderIfAbsent=true&apiKey=b1b7c46b698f4e75aa8360aa33741bab',
      type: 'Daily Wage',
      location: 'Lulu Mall, Kochi',
    },
    {
      id: '2',
      title: 'Waiter',
      company: 'Starbucks, Central Mall',
      shift: 'Evening shift',
      duration: '5 hrs',
      pay: '200 / hr',
      time: '4 PM - 9 PM',
      role: 'Food and Beverage Server',
      description: 'Take customer orders, serve food and drinks, and ensure a pleasant dining experience.',
      imageUrl: 'https://cdn.builder.io/api/v1/image/assets/TEMP/01671af37411bebd76c59af087af0b1a5486c86c2f6f9ad5cd72d342e3dc3e93?placeholderIfAbsent=true&apiKey=b1b7c46b698f4e75aa8360aa33741bab',
      type: 'Daily Wage',
      location: 'Central Mall, Mumbai',
    },
    {
      id: '3',
      title: 'Event Coordinator',
      company: 'EventCo, City Hall',
      shift: 'Day shift',
      duration: '8 hrs',
      pay: '300 / hr',
      time: '10 AM - 6 PM',
      role: 'Event Planner',
      description: 'Plan and manage event logistics, coordinate with vendors, and ensure smooth execution.',
      imageUrl: 'https://cdn.builder.io/api/v1/image/assets/TEMP/01671af37411bebd76c59af087af0b1a5486c86c2f6f9ad5cd72d342e3dc3e93?placeholderIfAbsent=true&apiKey=b1b7c46b698f4e75aa8360aa33741bab',
      type: 'Event Planning',
      location: 'City Hall, Delhi',
    },
    {
      id: '4',
      title: 'Delivery Driver',
      company: 'Amazon, Warehouse',
      shift: 'Morning shift',
      duration: '4 hrs',
      pay: '180 / hr',
      time: '8 AM - 12 PM',
      role: 'Package Delivery Driver',
      description: 'Deliver packages to customers, ensure timely delivery, and handle returns as needed.',
      imageUrl: 'https://cdn.builder.io/api/v1/image/assets/TEMP/01671af37411bebd76c59af087af0b1a5486c86c2f6f9ad5cd72d342e3dc3e93?placeholderIfAbsent=true&apiKey=b1b7c46b698f4e75aa8360aa33741bab',
      type: 'Daily Wage',
      location: 'Amazon Warehouse, Hyderabad',
    },
    {
      id: '5',
      title: 'Cashier',
      company: 'Walmart, Downtown',
      shift: 'Afternoon shift',
      duration: '7 hrs',
      pay: '160 / hr',
      time: '1 PM - 8 PM',
      role: 'Store Cashier',
      description: 'Handle transactions, process payments, and provide excellent customer service.',
      imageUrl: 'https://cdn.builder.io/api/v1/image/assets/TEMP/01671af37411bebd76c59af087af0b1a5486c86c2f6f9ad5cd72d342e3dc3e93?placeholderIfAbsent=true&apiKey=b1b7c46b698f4e75aa8360aa33741bab',
      type: 'Retail',
      location: 'Walmart Downtown, Bengaluru',
    },
    {
      id: '6',
      title: 'Bartender',
      company: 'The Pub, City Center',
      shift: 'Night shift',
      duration: '6 hrs',
      pay: '250 / hr',
      time: '6 PM - 12 AM',
      role: 'Bartender',
      description: 'Mix and serve drinks, manage bar inventory, and maintain a lively atmosphere for guests.',
      imageUrl: 'https://cdn.builder.io/api/v1/image/assets/TEMP/01671af37411bebd76c59af087af0b1a5486c86c2f6f9ad5cd72d342e3dc3e93?placeholderIfAbsent=true&apiKey=b1b7c46b698f4e75aa8360aa33741bab',
      type: 'Food and Beverage',
      location: 'City Center, Chennai',
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
