import "./App.css";
import Weather from "./weather";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div className="container">
          <h1 className="Main-Text">My React Weather App</h1>
          <br />
          <Weather defaultCity="Pretoria" />
        </div>
      </header>
    </div>
  );
}

export default App;
