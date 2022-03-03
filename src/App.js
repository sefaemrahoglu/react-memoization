import "./App.css";
import Header from "./components/header";
import { useState, useMemo, useCallback } from "react";
function App() {
  const [number, setNumber] = useState(0);
  const data = useMemo(() => {
    return { name: "Sefa" };
  }, []);

  const increment = useCallback(() => {
    setNumber((prevState) => prevState + 1);
  }, []);
  return (
    <div className="App">
      <Header
        number={number <= 5 ? 0 : number}
        data={data}
        increment={increment}
      />
      <hr />
      <h4>{number}</h4>
      <button onClick={() => setNumber(number + 1)}>Number +</button>
      <button onClick={() => setNumber(number - 1)}>Number -</button>
    </div>
  );
}

export default App;
