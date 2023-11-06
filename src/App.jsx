import React from 'react';
import JustifyContent from './JustifyContent';
import JustifyItems from './JustifyItems';
import JustifySelf from './JustifySelf';
import AlignContent from './AlignContent';
import AlignItems from './AlignItems';
import AlignSelf from './AlignSelf';



const App = () => {
  return (
    <div class="flex flex-col gap-y-20">
      <JustifyContent/>
      <JustifyItems/>
      <JustifySelf/>
      <AlignContent/>
      <AlignItems/>
      <AlignSelf/>
    </div>
  );
}

export default App;
