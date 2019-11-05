import React, { useReducer, useState } from "react";
import Reducer, { initialState } from "../reducers/Reducer";
import AddToDo from "./AddToDo";

const RenderToDo = () => {
  const [state, dispatch] = useReducer(Reducer, initialState);

  const [newToDo, setNewToDo] = useState({
    item: "",
    completed: false,
    id: Date.now()
  });

  const addNewItem = e => {
    e.preventDefault();

    dispatch({ type: "ADD_TODO", payload: newToDo });
  };

  const handleInputChange = e => {
    setNewToDo({
      item: e.target.value,
      completed: false,
      id: Date.now()
    });
  };

  return (
    <>
      <AddToDo
        addNewItem={addNewItem}
        handleInputChange={handleInputChange}
        value={newToDo}
      />
      <div className="to-do-list-container">
        {state.todos.map(item => (
          <div className="to-do-list-item" key={item.id}>
            <h1>{item.item}</h1>
          </div>
        ))}
      </div>
    </>
  );
};
export default RenderToDo;
