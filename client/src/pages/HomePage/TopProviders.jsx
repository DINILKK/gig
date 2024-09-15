import React from 'react';

function TopProviders() {
  return (
    <section className="flex flex-col ml-5 w-[55%] max-md:ml-0 max-md:w-full">
      <div className="flex flex-col w-full max-md:mt-10 max-md:max-w-full">
        <div className="ml-5 max-md:max-w-full">
          <div className="flex gap-5 max-md:flex-col">
            <div className="flex flex-col w-[41%] max-md:ml-0 max-md:w-full">
              <h3 className="self-stretch my-auto text-5xl tracking-tight text-white leading-[52px] max-md:mt-10 max-md:text-4xl max-md:leading-10">
                Our top gig providers
              </h3>
            </div>
            <div className="flex flex-col ml-5 w-[59%] max-md:ml-0 max-md:w-full">
              <img 
                loading="lazy" 
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/17a270e478aaf375ec167ca7c7100a3b56d8987e642fc9ac740439bc0c080efd?placeholderIfAbsent=true&apiKey=b1b7c46b698f4e75aa8360aa33741bab" 
                alt="Top gig provider showcase" 
                className="object-contain grow w-full aspect-[1.4] rounded-[80px] max-md:mt-7" 
              />
            </div>
          </div>
        </div>
        <img 
          loading="lazy" 
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/839d7b6a91eb82203482c68f8f738affdbe0f59fc67f909bd4e0639232a61259?placeholderIfAbsent=true&apiKey=b1b7c46b698f4e75aa8360aa33741bab" 
          alt="Additional gig provider information" 
          className="object-contain mt-2 max-w-full aspect-[2.02] rounded-[100px] w-[472px]" 
        />
      </div>
    </section>
  );
}

export default TopProviders;