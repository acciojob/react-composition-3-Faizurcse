
// import React from "react";
// import './../styles/App.css';

// const App = () => {
//   return (
//     <div>
//         {/* Do not remove the main div */}
//     </div>
//   )
// }

// export default App
import React from 'react';
import Tooltip from './Tooltip';
import './../styles/App.css';

function App() {
  return (
    <div className="App">
      <h1>Tooltip Example</h1>
      <p>
        Hover over the text to see the tooltip: <span><Tooltip text="Hello, I'm a tooltip">Hover here</Tooltip></span>
      </p>
      <span><Tooltip text="Another tooltip"><button>Hover me</button></Tooltip></span>
    </div>
  );
}

export default App;
