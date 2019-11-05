export const initialState = {
  todos: [
    { item: "Learn about reducers", completed: false, id: 1 },
    { item: "Prepare for Redux", completed: false, id: 2 },
    { item: "Plan Christmas Party", completed: true, id: 3 }
  ]
};

const Reducer = (state, action) => {
  switch (action.type) {
    case "ADD_TODO":
      return { todos: [...state.todos, action.payload] };

    default:
      throw new Error("No action completed");
  }
};

export default Reducer;
