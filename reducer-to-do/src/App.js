import React, { useReducer } from "react";
import "./App.css";
import RenderToDo from "./components/RenderToDo";
import AddToDo from "./components/AddToDo";
import Reducer, { initialState } from "./reducers/Reducer";

function App() {
  const [state, dispatch] = useReducer(Reducer, initialState);
  return (
    <div className="App">
      <AddToDo dispatch={dispatch} state={state} />
      <RenderToDo dispatch={dispatch} state={state} />
    </div>
  );
}

export default App;
