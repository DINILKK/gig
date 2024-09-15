import React from 'react';
import Header from './Header.jsx'; 
import TopCategories from './TopCategories.jsx'; 
import GigList from './GigList.jsx'; 

const GigPool = () => {
  return (
    <div className="flex flex-col h-screen">
      <Header />
      <div className="flex flex-row h-full">
        <aside className="fixed top-0 left-0 w-[250px] h-full bg-white  z-10 mt-[250px]">
          <TopCategories />
        </aside>
        <main className="flex-1 ml-[250px] mt-8 max-w-[1382px] max-md:max-w-full">
          <div className='mt-[80px]'>
          <div className="flex gap-5 max-md:flex-col mt-[200px]">
            <GigList />
          </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default GigPool;
