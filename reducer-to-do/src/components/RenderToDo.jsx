import React, { useReducer, useState } from "react";
import Reducer, { initialState } from "../reducers/Reducer";

const RenderToDo = () => {
  const [state, dispatch] = useReducer(Reducer, initialState);
  const [newToDo, setNewToDo] = useState({
    item: "",
    completed: false,
    id: Date.now()
  });
  return (
    <div className="to-do-list-container">
      {state.map(item => (
        <div className="to-do-list-item" key={item.id}>
          <h1>{item.item}</h1>
        </div>
      ))}
    </div>
  );
};

export default RenderToDo;
