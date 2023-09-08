import CompoOne from "./HOC";
import PureCompo from "./PureCompo";

function App() {
  return (
    <div className="App">
      <div className="pure">
        <h1>Pure Component</h1>
        <PureCompo />
      </div>

      <div className="hoc">
        <h1>HOC</h1>
        <CompoOne />
      </div>
    </div>
  );
}

export default App;
