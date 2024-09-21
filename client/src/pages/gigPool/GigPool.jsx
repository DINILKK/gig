import React, { useState } from 'react';
import Header from './Header.jsx'; 
import TopCategories from './TopCategories.jsx'; 
import GigList from './GigList.jsx'; 

const GigPool = () => {
  const [selectedCategory, setSelectedCategory] = useState(''); // State to hold selected category
  const [searchTerm, setSearchTerm] = useState(''); // State for the search term

  const handleSearch = (term) => {
    setSearchTerm(term); // Update search term state
  };

  const resetSelectedCategory = () => {
    setSelectedCategory(''); // Reset the selected category
  };

  return (
    <div className="flex flex-col h-screen">
      <Header onSearch={handleSearch} /> {/* Pass search handler */}
      <div className="flex flex-row h-full">
        <aside className="fixed top-0 left-0 w-[250px] h-full bg-white z-10 mt-[250px]">
          {/* Pass setSelectedCategory to TopCategories */}
          <TopCategories setSelectedCategory={setSelectedCategory} />
        </aside>
        <main className="flex-1 ml-[250px] mt-8 max-w-[1382px] max-md:max-w-full">
          <div className="mt-[80px]">
            <div className="flex gap-5 max-md:flex-col mt-[90px]">
              {/* Pass selectedCategory, searchTerm, and resetSelectedCategory to GigList */}
              <GigList selectedCategory={selectedCategory} searchTerm={searchTerm} setSearchTerm={setSearchTerm} resetSelectedCategory={resetSelectedCategory} />
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default GigPool;
