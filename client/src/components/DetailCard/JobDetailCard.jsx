import React from 'react';

const JobDetailsCard = ({ job, onClose }) => {
  if (!job) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-gray-800 bg-opacity-50 z-50">
      <div className="bg-white p-6 rounded-lg shadow-lg w-96 relative">
        {/* Close Button */}
        <button className="absolute top-2 right-2 text-gray-500 hover:text-gray-800" onClick={onClose}>
          &times;
        </button>
        {/* Job Title */}
        <h2 className="text-2xl font-semibold mb-4">{job.title}</h2>
        {/* Job Description */}
        <p className=" mb-2 text-gray-700"><strong>Role : </strong>{job.role}</p>
        {/* Additional Details */}
        <p className="mb-2"><strong>Location:</strong> {job.location}</p>
        <p className="mb-2"><strong>Shift:</strong> {job.shift}</p>
        <p className="mb-2"><strong>Time:</strong> {job.time}</p>
        <p className="mb-2"><strong>Salary:</strong> {job.salary}</p>
        <p className="mb-4"><strong>Contact:</strong> {job.contact}</p>
        <p className='mb-2'><strong>Job Description:</strong></p>
        <p className='mb-4'>{job.description}</p>
        {/* Apply Button */}
        <button className="w-full py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600">
          Apply
        </button>
      </div>
    </div>
  );
};

export default JobDetailsCard;
