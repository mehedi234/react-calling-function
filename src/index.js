import React from "react";
import ReactDOM from "react-dom";

import "./styles.css";
import Call_Fun from "./componets/call_fun";

function App() {
  return (
    <div className="App">
      <Call_Fun />
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
