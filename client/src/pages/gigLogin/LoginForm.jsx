import React from 'react';
import { Link } from 'react-router-dom';

function LoginForm() {
  return (
    <form className="flex flex-col mt-4 w-full text-sm leading-relaxed">
      <div className="flex flex-col justify-center w-full text-white">
        <div className="flex gap-1 items-center mt-2 w-full bg-gray-800 rounded border border-solid border-slate-600 h-[56px]">
          <label htmlFor="email" className="sr-only">Email</label>
          <input
            id="email"
            type="email"
            className="flex-1 shrink  self-stretch  w-full px-4 bg-transparent h-[56px]"
            placeholder="your em@il"
            required
          />
        </div>
        <div className="flex gap-1 items-center mt-2 w-full bg-gray-800 rounded border border-solid border-slate-600 h-[56px]">
          <label htmlFor="password" className="sr-only">Password</label>
          <input
            id="password"
            type="password"
            className="flex-1 shrink gap-2 px-4 self-stretch px-1 my-auto w-full min-w-[240px] bg-transparent h-[56px]"
            placeholder="P@ssword"
            required
          />
        </div>
      </div>
      <a href="#" className="self-center mt-2 text-zinc-100 hover:opacity-80">Arr! Forgot Yer Secret Code?</a>
      <Link to={'/signin'} className="self-center mt-2 text-zinc-100 hover:opacity-80">Need Sign In?</Link>
      <button type="submit" className="self-center mt-4 p-3.5 bg-green-600 rounded-lg text-base font-bold leading-relaxed text-center text-white whitespace-nowrap w-[130px] hover:opacity-80">
        Login
      </button>
    </form>
  );
}

export default LoginForm;