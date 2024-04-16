import { createSelector } from "@reduxjs/toolkit";

// it connect to the "STORE" get state of todoList
export const todoListSelector = (state) => state.todoList;
export const filterSearchSelector = (state) => state.filters.search;
export const filterStatusSelector = (state) => state.filters.status;
export const filterPrioritySelector = (state) => state.filters.priority;

export const todoRemainingSelector = createSelector(
  todoListSelector,
  filterSearchSelector,
  filterStatusSelector,
  filterPrioritySelector,
  (todoList, searchText, status, priority) => {
    return todoList.filter((todo) => {
      if (status === "All") {
        return priority.length
          ? todo.name.includes(searchText) && priority.includes(todo.priority)
          : todo.name.includes(searchText);
      }

      return (
        todo.name.includes(searchText) &&
        (status === "Completed" ? todo.completed : !todo.completed) &&
        (priority.length
          ? todo.name.includes(searchText) && priority.includes(todo.priority)
          : true)
      );
    });
  }
);
