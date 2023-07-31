import { createContext, useContext, useEffect, useReducer, useRef } from "react";

const initialTodos = [
  {
    id: new Date().getTime(),
    text: "테스트용",
    done: false,
  },
];

function todoReducer(state, action) {
  switch (action.type) {
    case "CREATE":
      return state.concat(action.todo);
    case "TOGGLE":
      return state.map((todo) => (todo.id === action.id ? { ...todo, done: !todo.done } : todo));
    case "REMOVE":
      return state.filter((todo) => todo.id !== action.id);
    case "LOCAL_SAVE":
      return localStorage.setItem("todoList", state);
    case "LOCAL_DELETE":
      return localStorage.removeItem("todoList");
    default:
      throw new Error(`undefined action : ${action.type}`);
  }
}

const TodoStateContext = createContext();
const TodoDispatchContext = createContext();
const TodoIdValueContext = createContext();

export function TodoProvider({ children }) {
  const [state, dispatch] = useReducer(todoReducer, initialTodos);
  let idValue = useRef(new Date().getTime());
  useEffect(() => {
    if (localStorage.getItem("todoList")) {
      dispatch({ type: "CREATE", todo: localStorage.getItem("todoList") });
    }
  }, []);
  return (
    <TodoStateContext.Provider value={state}>
      <TodoDispatchContext.Provider value={dispatch}>
        <TodoIdValueContext.Provider value={idValue}>{children}</TodoIdValueContext.Provider>
      </TodoDispatchContext.Provider>
    </TodoStateContext.Provider>
  );
}

export function useTodoState() {
  return useContext(TodoStateContext);
}

export function useTodoDispatch() {
  return useContext(TodoDispatchContext);
}

export function useTodoIdValue() {
  return useContext(TodoIdValueContext);
}
