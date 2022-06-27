import logo from './logo.svg';
import './App.scss';
import Component from './exampie/Component.js';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          lam cai gi do hay ho voi Linhdsad:))
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <Component />
      </header>
    </div>
  );
}

export default App;
