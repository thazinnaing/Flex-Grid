import React from 'react';

const AlignItems = () => {
    return ( // For flex and grid items, Cross axis
        <div class="flex flex-row justify-between items-end h-60 bg-green-300 gap-7">
            <div class="bg-violet-500 w-12 h-7">01</div>
            <div class="bg-violet-500 w-12 h-7">02</div>
            <div class="bg-violet-500 w-12 h-7">03</div>
            <div class="bg-violet-500 w-12 h-7">04</div>
            <div class="bg-violet-500 w-12 h-7">05</div>
            <div class="bg-violet-500 w-12 h-7">06</div>
        </div>
  );
}

export default AlignItems;
