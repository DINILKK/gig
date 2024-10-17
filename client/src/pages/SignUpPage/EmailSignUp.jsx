import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom"; // Import useNavigate

function EmailSignUp() {
  const [role, setRole] = useState("");
  const navigate = useNavigate(); // Initialize useNavigate

  const handleRoleChange = (e) => {
    setRole(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault(); // Prevent default form submission behavior

    // Navigate based on the selected role
    if (role === "seeker") {
      navigate("/seekerRegistration"); // Navigate to seekerRegistration
    } else if (role === "provider") {
      navigate("/providerRegistration"); // Navigate to providerRegistration
    } else {
      alert("Please select a role."); // Alert if no role is selected
    }
  };

  return (
    <form className="flex flex-col mt-4 w-full text-sm leading-relaxed text-white" onSubmit={handleSubmit}>
      <div className="flex flex-col justify-center w-full">
        <div className="flex gap-1 items-center w-full bg-gray-800 rounded border border-solid border-slate-600 min-h-[56px]">
          <label htmlFor="email" className="sr-only">Enter your email</label>
          <input
            id="email"
            type="email"
            className="flex-1 shrink gap-2 self-stretch px-1 my-auto w-full min-w-[240px] bg-transparent text-white h-[56px] px-4"
            placeholder="Enter your email"
          />
        </div>
        {/* Role Selection */}
        <div className="flex gap-1 items-center mt-2 w-full bg-gray-800 rounded border border-solid border-slate-600 min-h-[56px]">
          <label htmlFor="role" className="sr-only">Select your role</label>
          <select
            id="role"
            value={role}
            onChange={handleRoleChange}
            className="flex-1 shrink gap-2 self-stretch px-1 my-auto w-full min-w-[240px] bg-transparent text-white h-[56px] px-4"
          >
            <option value="" disabled>Select your role</option>
            <option value="seeker" className="text-black">Seeker</option>
            <option value="provider" className="text-black">Provider</option>
          </select>
        </div>
      </div>
      <button type="submit" className="flex gap-1 justify-center items-center px-6 py-4 mt-2 w-full text-center bg-teal-600 rounded-lg max-md:px-5 hover:opacity-80">
        <span className="flex-1 shrink gap-2 self-stretch px-1 my-auto w-full min-h-[22px] min-w-[240px]">
          Sign up
        </span>
      </button>
      <Link to={'/login'} className="self-center mt-2 text-zinc-100 hover:opacity-80">
        Already have an account? Login
      </Link>
    </form>
  );
}

export default EmailSignUp;
