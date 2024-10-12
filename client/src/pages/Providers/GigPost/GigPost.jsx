import React from "react";
import Header from "./Header";
import GigForm from "./GigForm";
import ActionButtons from "./ActionButtons";

function ShareOpportunities() {
  return (
    <div className="flex overflow-hidden flex-col pb-20 bg-white">
      <Header />
      <main className="self-center mt-12 ml-16 max-w-full w-[876px] max-md:mt-10">
        <div className="flex gap-5 max-md:flex-col">
          <GigForm />
          <ActionButtons />
        </div>
      </main>
    </div>
  );
}

export default ShareOpportunities;