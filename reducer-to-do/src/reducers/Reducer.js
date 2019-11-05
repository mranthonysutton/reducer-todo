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
      const todo = {
        item: action.payload,
        completed: false,
        id: Date.now()
      };

      if (todo.item !== "") {
        return {
          ...state,
          todos: [...state.todos, todo]
        };
      } else {
        return state;
      }

    case "CLEAR_COMPLETED":
      return { todos: state.todos.filter(todo => !todo.completed) };

    case "TOGGLE_COMPLETED":
      return {
        ...state,
        todos: state.todos.map(todo => {
          if (todo.id === action.payload.id) {
            return { ...todo, completed: !todo.completed };
          } else {
            return todo;
          }
        })
      };

    default:
      return state;
  }
};

export default Reducer;
