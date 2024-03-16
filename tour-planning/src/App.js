import { useState } from 'react';
import './App.css';
import Tour from './components/Tour';
import data from './data';

function App() {
  const [tours , setTours] = useState(data);
  return (
    <div className="App">

      <Tour tour={tours}></Tour>

    </div>
  );
}

export default App;
