import React from 'react';

function SocialLogin() {
  return (
    <button className="flex gap-3 justify-center items-center px-2 py-4 mt-4 w-full text-sm leading-relaxed text-center rounded-lg border border-solid bg-zinc-700 border-slate-600 text-zinc-100 hover:opacity-80">
      <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/68074a4a9e60ebd5c9a9c51dffe765570a6775d25d563c1d8364da5ecf41ad79?placeholderIfAbsent=true&apiKey=b1b7c46b698f4e75aa8360aa33741bab" alt="" className="object-contain shrink-0 self-stretch my-auto w-6 aspect-square" />
      <span className="self-stretch my-auto">Sign in with Google</span>
    </button>
  );
}

export default SocialLogin;