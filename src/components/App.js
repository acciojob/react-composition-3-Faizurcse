

import React from 'react';
import Tooltip from './Tooltip';
import './App.css';

function App() {
  return (
    <div className="App">
      <h1>Tooltip Example</h1>
      <p>
        Hover over the text to see the tooltip: <Tooltip text="Hello, I'm a tooltip">Hover here</Tooltip>
      </p>
      <Tooltip text="Another tooltip">
        <button>Hover me</button>
      </Tooltip>
    </div>
  );
}


export default App;
