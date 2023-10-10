import './App.css';
import Bar from './Appbar/Bar.js';
import { useState } from 'react';
import Hom from './Home/Home.js';
import Presentatio from './Presentation/Presentation.js';
import Trace from './Traces/Traces.js';

function App() {
  const [Home, setHome] = useState(true);
  const [Presentation, setPresentation] = useState(false);
  const [Traces, setTraces] = useState(false);

  console.log(Home);
  return (
    <div className="App">
      <header className="App-header">
        <Bar 
          Home={Home} setHome={setHome}
          Presentation={Presentation} setPresentation={setPresentation}
          Traces={Traces} setTraces={setTraces}
        />
      </header>
      <body>
        {Home && <Hom />}
        {Presentation && <Presentatio />}
        {Traces && <Trace />}
      </body>
    </div>
  );
}

export default App;
