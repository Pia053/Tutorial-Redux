import { configureStore } from "@reduxjs/toolkit";
import todoListSlice from "../components/TodoList/todoSlice.js";
import filterSlice from "../components/Filters/filterSlice.js";

const store = configureStore({
  reducer: {
    todoList: todoListSlice.reducer,
    filters: filterSlice.reducer,
  },
});

export default store;
