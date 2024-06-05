import { createContext, useReducer } from "react";

export const TaskContext = createContext();

export const taskReducer = (state, action) => {
  switch (action.type) {
    case "SET_TASKS":
      return {
        tasks: action.payload
      };
    case "CREATE_TASK":
      return {
        tasks: [...state.tasks]
      };
    case "REMOVE_TASK":
      return {
        ...state,
        tasks: state.tasks.filter((task) => task._id !== action.payload)
      };
    case "UPDATE_TASK":
      return {
        ...state,
        tasks: state.tasks.map((task) =>
          task._id === action.payload._id ? action.payload : task
        )
      };
    default:
      return state;
  }
}

export const TaskContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(taskReducer, {
    tasks: null
  });

  return (
    <TaskContext.Provider value={{...state, dispatch}}>
      { children }
    </TaskContext.Provider>
  )
}