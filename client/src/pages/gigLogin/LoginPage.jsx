import React from 'react';
import LoginForm from './LoginForm';
import SocialLogin from './SocialLogin';
import Divider from './Divider';

function LoginPage() {
  return (
    <main className="flex flex-col bg-white">
      <section className="flex flex-wrap justify-between items-center w-full bg-gray-800 max-md:max-w-full">
        <div className="flex flex-1 shrink gap-2 justify-center items-center self-stretch px-4 py-24 my-auto w-full basis-0 min-h-[803px] min-w-[322px] max-md:max-w-full">
          <div className="flex flex-col flex-1 shrink justify-center self-stretch px-8 pb-8 my-auto bg-gray-800 basis-0 max-w-[480px] min-h-[607px] min-w-[240px] rounded-[32px] w-[480px] max-md:px-5 max-md:max-w-full">
            <header className="flex flex-col justify-center w-full text-center">
              <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/4230a8172d733f38d2181aa9d1dd2e5597342790ae0365486f7974fbd516a695?placeholderIfAbsent=true&apiKey=b1b7c46b698f4e75aa8360aa33741bab" alt="Login avatar" className="object-contain self-center w-24 aspect-square rounded-[200px]" />
              <h1 className="mt-2 text-4xl leading-tight text-zinc-100">Login Quick!</h1>
              <p className="mt-2 text-lg text-white">Log In and Set Sail!</p>
            </header>
            <SocialLogin />
            <Divider />
            <LoginForm />
          </div>
        </div>
      </section>
    </main>
  );
}

export default LoginPage;