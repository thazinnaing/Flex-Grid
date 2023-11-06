import React from 'react';

const AlignSelf = () => {
  return ( // align self for aligned items
    <div class="flex flex-row justify-between items-start h-60 bg-pink-300 gap-7">
            <div class="bg-violet-500 w-12 h-7">01</div>
            <div class="bg-violet-500 w-12 h-7">02</div>
            <div class="bg-violet-500 w-12 h-7 self-center">03</div>
            <div class="bg-violet-500 w-12 h-7">04</div>
            <div class="bg-violet-500 w-12 h-7 self-end">05</div>
            <div class="bg-violet-500 w-12 h-7">06</div>
        </div>
  );
}

export default AlignSelf;
