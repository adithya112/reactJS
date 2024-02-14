import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Card from "./cmoponents/Card";

function App() {
  const [count, setCount] = useState(0);
  let myObj = {
    name: "Adi",
    age: 21,
  };
  let newArr = [1, 2, 3];

  return (
    <>
      <h1 className="bg-green-400 text-black p-4 rounded-xl mb-4">
        Tailwind test
      </h1>
      <Card name="Adithya" />
      <Card name="Aman" />
    </>
  );
}

export default App;
