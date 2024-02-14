import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  let [temprature, setTemprature] = useState(14);
  let [color, setColor] = useState("#3939f7");

  const increaseTemprature = () => {
    const newTemprature = temprature + 1;
    if (newTemprature >= 18) {
      setColor("#db7d39");
    } else if (newTemprature > 10 && newTemprature < 18) {
      setColor("#3939f7");
    }

    setTemprature(newTemprature);
  };

  const decreaseTemprature = () => {
    const newTemprature = temprature - 1;

    if (newTemprature <= 10) {
      setColor("#689bed");
    } else if (newTemprature > 10 && newTemprature < 18) {
      setColor("#3939f7");
    }

    setTemprature(newTemprature);
  };

  return (
    <div
      className="flex items-center justify-center mx-auto my-14  px-5 py-6 flex-col rounded-lg text-white"
      style={{
        width: "250px",
        backgroundColor: "#243d74",
      }}
    >
      <div
        className="w-44 h-44 rounded-full flex justify-center items-center text-4xl mb-8 border-2 transition-colors"
        style={{
          backgroundColor: color,
        }}
      >
        {temprature}'C
      </div>
      <div className="flex justify-between w-44">
        <div className="w-16 h-16 flex items-center justify-center rounded-full text-3xl bg-yellow-700 border-2">
          <button onClick={increaseTemprature}>+</button>
        </div>
        <div className="w-16 h-16 flex items-center justify-center rounded-full text-3xl bg-yellow-700 border-2">
          <button onClick={decreaseTemprature}>-</button>
        </div>
      </div>
    </div>
  );
}

export default App;
