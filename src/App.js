import logo from "./logo.svg";
import "./App.css";

function throwError() {
  throw new Error("what is happening here?");
}

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>Welcome to this amazing test app!</h1>
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
        <button onClick={throwError}>Break the world</button>
      </header>
    </div>
  );
}

export default App;
