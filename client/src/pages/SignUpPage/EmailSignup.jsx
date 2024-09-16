import React, { useState } from "react";

function EmailSignup() {
  const [role, setRole] = useState("");

  const handleRoleChange = (e) => {
    setRole(e.target.value);
  };

  return (
    <form className="flex flex-col mt-4 w-full text-sm leading-relaxed text-white">
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
        <div className="flex gap-1 items-center mt-1 w-full bg-gray-800 rounded border border-solid border-slate-600 min-h-[56px]">
          <label htmlFor="password" className="sr-only">Create your password</label>
          <input
            id="password"
            type="password"
            className="flex-1 shrink gap-2 self-stretch px-1 my-auto w-full min-w-[240px] bg-transparent text-white h-[56px] px-4"
            placeholder="Create your password"
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
            <option value="" disabled >Select your role</option>
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
      <a href="#" className="self-center mt-2 text-zinc-100 hover:opacity-80">
  Already have an account? Login
</a>

    </form>
  );
}

export default EmailSignup;
