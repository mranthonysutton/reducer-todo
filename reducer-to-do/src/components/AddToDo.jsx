import React, { useState } from "react";
import { Button, TextField } from "@material-ui/core";

const AddToDo = ({ dispatch }) => {
  const [todo, setToDo] = useState("");

  const handleChanges = e => {
    setToDo(e.target.value);
  };

  const addItem = e => {
    e.preventDefault();
    dispatch({ type: "ADD_TODO", payload: todo });
  };

  const clearCompleted = () => {
    dispatch({ type: "CLEAR_COMPLETED" });
  };

  return (
    <div className="form-container">
      <TextField
        className="todo-input-field"
        id="outlined-with-placeholder"
        variant="outlined"
        placeholder="Add To-Do"
        margin="normal"
        label="Add To-Do"
        type="text"
        name="item"
        onChange={handleChanges}
        value={todo}
      />
      <Button
        variant="contained"
        color="primary"
        type="submit"
        size="large"
        onClick={addItem}
      >
        Add To-Do
      </Button>
      <Button
        variant="contained"
        color="secondary"
        type="submit"
        size="large"
        onClick={clearCompleted}
      >
        Clear Completed
      </Button>
    </div>
  );
};

export default AddToDo;
