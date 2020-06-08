import React from 'react';

import './App.css';

import Dinner from './dinner.js';

function App() {
  return (
    <div className="App">
     {/* <Dinner></Dinner> */}
     <Dinner dishName="Chicken Kharai" sweetDish="Kheer" />
     <hr/>
     <Dinner dishName="Nihari" sweetDish="Jaman" />
     <hr/>
     <Dinner dishName="Chicken Biryani" sweetDish="Gajar Ka Halwa" />
    </div>
  );
}

export default App;
