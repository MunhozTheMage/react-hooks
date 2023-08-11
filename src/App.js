import logo from "./logo.svg";
import "./App.css";
import { useCounter } from "./hooks";

const Counter = ({ name }) => {
  const { counter, increaseCounter, decreaseCounter } = useCounter(name);

  return (
    <>
      <a
        className="App-link"
        href="https://reactjs.org"
        target="_blank"
        rel="noopener noreferrer"
      >
        {`${name} Counter: ${counter}`}
      </a>
      <button onClick={increaseCounter}>+</button>
      <button onClick={decreaseCounter}>-</button>
    </>
  );
};

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>

        <Counter name="Matheus" />
        <Counter name="Munhoz" />
        <Counter name="Gustavo" />
        <Counter name="França" />
      </header>
    </div>
  );
}

export default App;
