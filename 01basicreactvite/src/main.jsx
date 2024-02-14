import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";

const anotherElement = (
  <a href="https://google.com" target="_blank">
    Visit Google.com
  </a>
);

const anotherUser = "User";

const reactElement = React.createElement(
  "a",
  { href: "https://google.com", target: "_blank" },
  "Click me to visit google",
  anotherUser
);

ReactDOM.createRoot(document.getElementById("root")).render(
  // <React.StrictMode>
  //   <App />
  // </React.StrictMode>
  reactElement
);
