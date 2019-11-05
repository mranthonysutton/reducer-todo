import React from "react";
import "./App.css";
import RenderToDo from "./components/RenderToDo";
import AddToDo from "./components/AddToDo";

function App() {
  return (
    <div className="App">
      <AddToDo />
      <RenderToDo />
    </div>
  );
}

export default App;
