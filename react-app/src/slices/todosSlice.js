import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState = [
  { id: "1", title: "Learn Redux Toolkit", completed: false },
  { id: "2", title: "Learn Redux Toolkit - Slices", completed: true },
];

const todosSlice = createSlice({
  name: "todos",
  initialState: initialState,
  reducers: {
    add: {
      reducer(state, action) {
        state.push(action.payload);
      },
      prepare({ title }) {
        return {
          payload: {
            id: nanoid(),
            title,
            completed: false,
          },
        };
      },
    },
    remove(state, action) {
      /*
      One way
      
      const index = state.findIndex((todo) => todo.id === action.payload);
      state.splice(index, 1);
      */
      // Other way
      return state.filter((todo) => todo.id !== action.payload);
    },
    toggleCompleted(state, action) {
      const todo = state.find((todo) => todo.id === action.payload);
      todo.completed = !todo.completed;
    },
  },
});

export const { add, remove, toggleCompleted } = todosSlice.actions;
export default todosSlice.reducer;
