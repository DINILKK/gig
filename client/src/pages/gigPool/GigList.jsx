import React, { useState, useEffect } from 'react';
import GigCard from './GigCard';
import axios from 'axios';

const GigList = () => {
  const [gigs, setGigs] = useState([]);
  const [loading, setLoading] = useState(true); // To handle loading state
  const [error, setError] = useState(null); // To handle error state

  useEffect(() => {
    const fetchGigs = async () => {
      try {
        const response = await axios.get('/api/details');
        setGigs(response.data);
        setLoading(false);
      } catch (err) {
        setError('Failed to load gigs');
        setLoading(false);
      }
    };

    fetchGigs();
  }, []); // Empty dependency array ensures it runs only once when the component mounts

  if (loading) {
    return <p>Loading gigs...</p>;
  }

  if (error) {
    return <p>{error}</p>;
  }

  return (
    <section className="flex flex-col ml-5 w-[100%] max-md:ml-0 max-md:w-full">
      <div className="flex overflow-hidden flex-wrap grow gap-12 items-center leading-tight text-black min-h-[652px] border-l-10 max-md:mt-10 max-md:max-w-full">
        {gigs.length > 0 ? (
          gigs.map((gig) => <GigCard key={gig._id} {...gig} />)
        ) : (
          <p>No gigs available.</p>
        )}
      </div>
    </section>
  );
};

export default GigList;
