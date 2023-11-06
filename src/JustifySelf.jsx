import React from 'react';

const JustifySelf = () => {
  return (
    <div class="grid grid-cols-3 justify-items-center gap-5">
        <div class="bg-violet-500 w-12 h-7">01</div>
        <div class="bg-violet-500 w-12 h-7 justify-self-start">02</div>
        <div class="bg-violet-500 w-12 h-7">03</div>
        <div class="bg-violet-500 w-12 h-7">04</div>
        <div class="bg-violet-500 justify-self-stretch">05</div>
        <div class="bg-violet-500 w-12 h-7">06</div>
        <div class="bg-violet-500 w-12 h-7">07</div>
    </div>
  );
}

export default JustifySelf;
