import { useState } from 'react';
import Tour from './components/Tour';
import data from './data';

function App() {

  const [tours , setTours] = useState(data);

  if(tours.length === 0) {
    return (
        <div className="refresh">
          <h2>No Tours Left</h2>
          <button className="btn-white" onClick={() => setTours(data)}>
            Refresh
          </button>
        </div>
    );
  }
  return (
    <div className="App">

      <Tour tours={tours}></Tour>

    </div>
  );
}

export default App;
