import React, { useState, useEffect } from 'react';
import axios from 'axios'; // Make sure to import axios
import {jwtDecode} from 'jwt-decode'; // Import jwtDecode to decode the token
import GigCard from './GigCard';

function GigHistorySection() {
  const [gigData, setGigData] = useState([]);

  useEffect(() => {
    const fetchHistory = async () => {
      try {
        const token = localStorage.getItem('authToken'); 
        if (token) {
          const decodedToken = jwtDecode(token);
          const userId = decodedToken.userid; 
          
          const response = await axios.get(`/api/history`, { params: { userid: userId } });
          
          // Set the received data into the gigData state
          setGigData(response.data.history || []); // Use history from response
          console.log(response.data); 
        }
      } catch (error) {
        console.error('Error fetching gig history:', error); // Log any error
      }
    };

    fetchHistory(); // Call the fetch function
  }, []); // Empty dependency array means it runs once on mount

  return (
    <section className="flex overflow-hidden flex-col mt-12 min-h-[603px] max-md:mt-10 max-md:max-w-full">
      {gigData.map((gig, index) => (
        <GigCard key={index} {...gig} />
      ))}
    </section>
  );
}

export default GigHistorySection;
