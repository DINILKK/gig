import React from 'react';
import GigTrackerHeader from './GigTrackerHeader';
import ApplicationStatus from './ApplicationStatus';
import JobCard from './JobCard';
import ApprovedJobCard from './ApprovedJobCard';

const pendingJobs = [
  { title: 'Tutor', location: 'Kalamassery', company: 'LULU MALL' },
  { title: 'Waiter', location: 'Kalamassery', company: 'LULU MALL' },
  { title: 'Sales', location: 'Kalamassery', company: 'LULU MALL' },
  { title: 'Tutor', location: 'Kalamassery', company: 'LULU MALL' },
];

const approvedJobs = [
  { title: 'Attendee', company: 'LULU MALL, Kochi', location: 'Edapally' },
  { title: 'Attendee', company: 'LULU MALL, Kochi', location: 'Edapally' },
  { title: 'Attendee', company: 'LULU MALL, Kochi', location: 'Edapally' },
  { title: 'Attendee', company: 'LULU MALL, Kochi', location: 'Edapally' },
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
              {pendingJobs.map((job, index) => (
                <JobCard key={index} title={job.title} location={job.location} company={job.company} />
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
              {approvedJobs.map((job, index) => (
                <ApprovedJobCard
                  key={index}
                  title={job.title}
                  company={job.company}
                  location={job.location}
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
