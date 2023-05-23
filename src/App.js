import logo from "./logo.svg";
import "./App.css";
import { DateTimeCustom } from "./components/dateTime";
import { InputValues } from "./pages/inputValues";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <InputValues></InputValues>
      </header>
    </div>
  );
}

export default App;
