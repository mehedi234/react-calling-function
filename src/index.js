import React from "react";
import ReactDOM from "react-dom";

// COMPONENTS
import "./styles.css";
import Call_Fun from "./componets/call_fun";
import React_dom from "./componets/virtualDOM";
import Props from "./componets/props";

function App() {
  return (
    <div className="App">
      <Call_Fun />
      <React_dom />
      <Props />
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
