import React, { useState, useEffect } from 'react';
import GigCard from './GigCard';
import axios from 'axios';

const GigList = ({ selectedCategory, searchTerm, setSearchTerm, resetSelectedCategory }) => {
  const [gigs, setGigs] = useState([]);
  const [filteredGigs, setFilteredGigs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Display jobs
  const fetchGigs = async () => {
    setLoading(true);
    setError(null);
    try {
      const response = await axios.get('/api/details');
      setGigs(response.data.jobs);
      setFilteredGigs(response.data.jobs); 
    } catch (err) {
      setError('Failed to load gigs');
      setFilteredGigs([]);
    } finally {
      setLoading(false);
    }
  };

  // Search logic
  const fetchSearch = async () => {
    if (searchTerm) {
      try {
        const response = await axios.get('/api/search', { params: { searchTerm } });
        setGigs(response.data.jobs);
        setFilteredGigs(response.data.jobs);
        setSearchTerm(''); // Reset searchTerm after fetching results
      } catch (error) {
        setError('Invalid search');
      }
    } else {
      setFilteredGigs(gigs); 
    }
  };

  // Filter logic
  const fetchCategories = async () => {
    if (selectedCategory) {
      try {
        const response = await axios.get('/api/topCategories', { params: { selectedCategory } });
        setGigs(response.data.jobs);
        setFilteredGigs(response.data.jobs);
        resetSelectedCategory(); // Reset selected category after fetching results
      } catch (error) {
        setError('No such categories exist.');
      }
    }
  };

  useEffect(() => {
    fetchGigs(); 
  }, []);

  useEffect(() => {
    fetchSearch(); 
  }, [searchTerm]);

  useEffect(() => {
    fetchCategories();
  }, [selectedCategory]);

  if (loading) {
    return <p>Loading gigs...</p>;
  }

  if (error) {
    return (
      <div className="flex flex-col items-center">
        <p>{error}</p>
        <button
          onClick={fetchGigs} // Retry button to fetch gigs again
          className="mt-2 justify-center bg-teal-800 text-white p-2 rounded"
        >
          Retry
        </button>
      </div>
    );
  }

  return (
    <section className="flex flex-col ml-5 w-[100%] max-md:ml-0 max-md:w-full">
      <div className="flex overflow-hidden flex-wrap grow gap-12 items-center leading-tight text-black min-h-[652px] border-l-10 max-md:mt-10 max-md:max-w-full">
        {filteredGigs.length > 0 ? (
          filteredGigs.map((gig) => <GigCard key={gig._id} {...gig} />)
        ) : (
          <p>No gigs available for this category.</p>
        )}
      </div>
    </section>
  );
};

export default GigList;
