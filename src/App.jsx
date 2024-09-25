import './App.css';
import worldMap from './assets/world_map.png';
import { useState } from 'react';
import axios from 'axios';
import Nations from './component/Nations';
import OpdrachtTwo from './component/opdrachtTwo';


function App() {


  return (
    <div>
    <OpdrachtTwo/>
    <Nations/>

    </div>
  );
}

export default App;



