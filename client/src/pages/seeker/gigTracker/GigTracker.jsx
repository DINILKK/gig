import React from 'react';
import GigTrackerHeader from './GigTrackerHeader';
import ApplicationStatus from './ApplicationStatus';
import JobCard from './JobCard';
import ApprovedJobCard from './ApprovedJobCard';

const pendingJobs = [
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
];

const approvedJobs = [
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
];

function GigTracker() {
  return (
    <div className="flex flex-col items-center bg-white">
      <GigTrackerHeader />
      <main className="w-full max-w-[1279px] mt-[200px]">
        {/* Pending and Approved Jobs Section */}
        <section className="flex justify-between gap-5 mt-9 w-full max-w-[1279px] mx-auto mr-[100px]">
          {/* Pending Jobs */}
          <aside className="w-1/2 bg-white p-4 fixed top-[200px] bottom-0 overflow-auto">
            <div className="flex flex-col gap-4 w-[500px] ">
              <ApplicationStatus
                status="Pending"
                count={4}
                iconSrc="https://cdn.builder.io/api/v1/image/assets/TEMP/26ced1833dca9cc0765ba02e194eb98eca00a60a7a57c806f7829e954b45e7b8?apiKey=b1b7c46b698f4e75aa8360aa33741bab"
              />
              {pendingJobs.map((job) => (
                <JobCard key={job.id} {...job}/>
              ))}
            </div>
          </aside>

          {/* Approved Jobs */}
          <div className="w-1/2 bg-white p-4 fixed top-[200px] bottom-0 right-0 overflow-auto">
           
            <div className="flex flex-col gap-4 w-[500px] ml-[100px]">
              <ApplicationStatus
                status="Approved"
                count={4}
                iconSrc="https://cdn.builder.io/api/v1/image/assets/TEMP/6cc4294013bfc02cebabadb6757b1f61ba87eedd5a510593bbb9635ebab02aa0?apiKey=b1b7c46b698f4e75aa8360aa33741bab"
              />
              {approvedJobs.map((job) => (
                <ApprovedJobCard
                  key={job.id}{...job}
                />
              ))}
            </div>
            {/* Background decoration images */}
            {/* <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/8c839d93b9c51bc4e1f804db55e761c6330211c55e9e23656067de7ef0ac1f4f?apiKey=b1b7c46b698f4e75aa8360aa33741bab"
              alt="decorative circle"
              className="absolute w-12 h-12 right-[30px] top-[30px]"
            /> */}
          </div>
        </section>
      </main>
    </div>
  );
}

export default GigTracker;
