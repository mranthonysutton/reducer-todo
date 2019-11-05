import React from "react";

const RenderToDo = ({ state, dispatch }) => {
  // If the list item is set, it will allow the class to change
  const toggleTodo = todo => {
    dispatch({ type: "TOGGLE_COMPLETED", payload: todo });
  };

  return (
    <div className="list-items-container">
      {state.todos.map(item => (
        <div className={`task${item.completed ? " completed" : ""}`}>
          <h1 onClick={() => toggleTodo(item)}>{item.item}</h1>
        </div>
      ))}
    </div>
  );
};

export default RenderToDo;
