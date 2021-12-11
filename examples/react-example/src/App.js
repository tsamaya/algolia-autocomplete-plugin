import logo from './logo.svg';
import { Autocomplete } from './Autocomplete';
import { TestPlugin } from 'test-plugin-core';

import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <Autocomplete
          openOnFocus={true}
          plugins={[TestPlugin]}
          onSubmit={() => {
            console.log('--autocomplete.OnSubmit()');
          }}
        />
      </header>
    </div>
  );
}

export default App;
