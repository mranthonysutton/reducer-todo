import React from "react";
import { Button, TextField } from "@material-ui/core";
// import { Reducer, initialState } from "../reducers/Reducer";

const AddToDo = () => {
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
      />
      <Button variant="contained" color="primary" type="submit" size="large">
        Add To-Do
      </Button>
    </div>
  );
};

export default AddToDo;
