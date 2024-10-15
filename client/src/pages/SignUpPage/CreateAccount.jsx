import React from "react";
import SocialSignUp from "./SocialSignUp";
import EmailSignUp from  "./EmailSignUp";
import OrDivider from "./OrDivider";
import TermsAgreement from "./TermsAgreement";

function CreateAccount() {
  return (
    <main className="flex flex-col bg-white min-h-screen">
      <section className="flex flex-wrap justify-between items-center w-full bg-gray-800 max-md:max-w-full min-h-screen">
        <div className="flex flex-1 shrink gap-2 justify-center items-center self-stretch px-4 py-20 my-auto w-full basis-0 min-h-[803px] min-w-[322px] max-md:max-w-full">
          <div className="flex flex-col flex-1 shrink justify-center self-stretch p-8 my-auto bg-gray-800 basis-0 max-w-[480px] min-w-[240px] rounded-[32px] w-[480px] max-md:px-5 max-md:max-w-full">
            <header className="flex flex-col justify-center w-full text-center">
              <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/3db8c7ff7e6184b520b886508a06dc990e8fb0086d07c4df7619d39849de1f7a?placeholderIfAbsent=true&apiKey=b1b7c46b698f4e75aa8360aa33741bab" className="object-contain self-center w-24 aspect-square rounded-[200px]" alt="Create Account" />
              <h1 className="mt-2 text-4xl leading-tight text-zinc-100">Create Account</h1>
              <p className="mt-2 text-lg text-white">Come on Board!</p>
            </header>
            <SocialSignUp />
            <OrDivider />
            <EmailSignUp />
            <TermsAgreement />
          </div>
        </div>
      </section>
    </main>
  );
}

export default CreateAccount;