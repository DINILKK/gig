import React from 'react';

function Divider() {
  return (
    <div className="flex gap-6 justify-center items-center mt-4 w-full text-xs leading-relaxed text-center text-white whitespace-nowrap">
      <div className="flex flex-1 shrink self-stretch my-auto h-px basis-0 bg-slate-600 w-[178px]" />
      <div className="self-stretch my-auto">or</div>
      <div className="flex flex-1 shrink self-stretch my-auto h-px basis-0 bg-slate-600 w-[177px]" />
    </div>
  );
}

export default Divider;