import React, { useState } from "react";
import { Button, TextField } from "@material-ui/core";

const AddToDo = ({ dispatch }) => {
  const [todo, setToDo] = useState("");

  const handleChanges = e => {
    setToDo(e.target.value);
  };

  const addItem = e => {
    e.preventDefault();
    // the type has to match the case in the reducer, while the payload is set to whatever has been changed due to the handleChange function
    dispatch({ type: "ADD_TODO", payload: todo });
  };

  // Just clears the completed items since it does not need a payload to render anything
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
      <div className="button-container">
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
    </div>
  );
};

export default AddToDo;
