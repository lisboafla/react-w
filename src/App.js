import logo from './logo.svg';
import './App.css';
import Weather from "./Weather.js";
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
         <h1> Weather App </h1>
      <Weather />
      </header>
      <a href="https://github.com/lisboafla/react-w">Open-source code by Flavia Lisboa
</a>
    </div>
  );
}

export default App;
