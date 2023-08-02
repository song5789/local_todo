import { createContext, useContext, useEffect, useReducer, useRef, useState } from "react";

const initialTodos = [];

function todoReducer(state, action) {
  switch (action.type) {
    case "CREATE":
      return state.concat(action.todo);
    case "TOGGLE":
      return state.map((todo) => (todo.id === action.id ? { ...todo, done: !todo.done } : todo));
    case "REMOVE":
      return state.filter((todo) => todo.id !== action.id);
    case "UPDATE":
      return state.map((todo) => (todo.id === action.id ? { ...todo, ...action.update } : todo));
    default:
      throw new Error(`undefined action : ${action.type}`);
  }
}

const TodoStateContext = createContext();
const TodoDispatchContext = createContext();
const TodoLocalStateContext = createContext();

export function TodoProvider({ children }) {
  const [state, dispatch] = useReducer(todoReducer, initialTodos);
  useEffect(() => {
    if (localStorage.getItem("todoList")) {
      dispatch({ type: "CREATE", todo: JSON.parse(localStorage.getItem("todoList")) });
    }
  }, []);
  return (
    <TodoStateContext.Provider value={state}>
      <TodoDispatchContext.Provider value={dispatch}>{children}</TodoDispatchContext.Provider>
    </TodoStateContext.Provider>
  );
}

export function useTodoState() {
  return useContext(TodoStateContext);
}

export function useTodoDispatch() {
  return useContext(TodoDispatchContext);
}

export function useTodoLocalState() {
  return useContext(TodoLocalStateContext);
}
