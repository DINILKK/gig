import React, { useEffect, useState } from 'react';
import GigItem from './GigItem';
import Header from './Header';
import axios from 'axios';
import {useParams}  from "react-router-dom"; // Or fetch API if you prefer

function GigList() {
  const { id: userId } = useParams();
  // const userId = localStorage.getItem('userId')
  const [gigs, setGigs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Fetch data from backend API
    const fetchGigs = async () => {
      try {
        const response = await axios.get('/api/yourgigs',{params:{userId}}); // Update with your API endpoint
        setGigs(response.data);
      } catch (err) {
        setError('Failed to fetch gigs');
      } finally {
        setLoading(false);
      }
    };

    fetchGigs();
  }, []);

  return (
    <section className="flex overflow-hidden flex-col items-center pb-11 bg-white">
      {/* Header positioned at the top */}
      <div className="w-full fixed top-0 left-0 z-10">
        <Header />
      </div>

      {/* Add padding to account for the fixed header */}
      <main className="pt-[200px] max-md:pt-[120px] w-full">
        {loading && <p>Loading gigs...</p>}
        {error && <p>{error}</p>}
        {!loading && !error && gigs.map((gig, index) => (
          <GigItem key={index} {...gig} />
        ))}
      </main>
    </section>
  );
}

export default GigList;
