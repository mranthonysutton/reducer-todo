import React from "react";
import { Button, TextField } from "@material-ui/core";
// import { Reducer, initialState } from "../reducers/Reducer";

const AddToDo = props => {
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
        onChange={props.handleInputChange}
      />
      <Button
        variant="contained"
        color="primary"
        type="submit"
        size="large"
        onClick={props.addNewItem}
      >
        Add To-Do
      </Button>
    </div>
  );
};

export default AddToDo;
