import React from "react";

function SocialSignUp() {
  return (
    <button className="flex gap-3 justify-center items-center px-2 py-4 mt-4 w-full text-sm leading-relaxed text-center rounded-lg border border-solid bg-zinc-700 border-slate-600 text-zinc-100 hover:opacity-80">
      <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/b3e08436dfc4ae1a1da3394a06a80d208e25a0ae0c756b89e4349aa6ae099cf7?placeholderIfAbsent=true&apiKey=b1b7c46b698f4e75aa8360aa33741bab" className="object-contain shrink-0 self-stretch my-auto w-6 aspect-square" alt="" />
      <span className="self-stretch my-auto">Sign up with Google</span>
    </button>
  );
}

export default SocialSignUp;