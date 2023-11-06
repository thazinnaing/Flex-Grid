import React from 'react';
import JustifyContent from './JustifyContent';
import JustifyItems from './JustifyItems';
import JustifySelf from './JustifySelf';


const App = () => {
  return (
    <div class="flex flex-col gap-y-10">
      <JustifyContent/>
      <JustifyItems/>
      <JustifySelf/>

      
    </div>
  );
}

export default App;
