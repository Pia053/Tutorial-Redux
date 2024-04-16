import { createSlice } from "@reduxjs/toolkit";

export default createSlice({
  name: "todoList",
  initialState: [
    { id: 1, name: "learn yoga", completed: false, priority: "Medium" },
    { id: 2, name: "learn redux", completed: true, priority: "High" },
    { id: 3, name: "learn java", completed: false, priority: "Low" },
  ],
  // sate = initialState
  reducers: {
    addTodo: (state, action) => {
      state.push(action.payload);
    },
    toggleCheckBoxStatus: (state, action) => {
      const currentTodo = state.find((todo) => todo.id === action.payload);
      if (currentTodo) {
        currentTodo.completed = !currentTodo.completed;
      }
    },
  },
});
