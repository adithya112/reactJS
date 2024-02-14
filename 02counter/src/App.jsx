import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  let [counter, setCounter] = useState(15);

  // let counter = 5;

  const addValue = () => {
    // counter++;
    // console.log("clicked", counter);
    if (counter <= 20) {
      setCounter(counter++);
    } else {
      console.log("Reached the upper limit");
    }
  };

  const removeValue = () => {
    if (counter >= 0) {
      setCounter(counter--);
    } else {
      console.log("Reached the lower limit");
    }
  };

  return (
    <>
      <h1>Counter Project</h1>
      <h2>Counter value : {counter}</h2>

      <button onClick={addValue}>Add Value</button>
      <br />
      <button onClick={removeValue}>Remove Value</button>
    </>
  );
}

export default App;
