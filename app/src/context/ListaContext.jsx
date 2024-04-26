import { createContext, useReducer } from "react";

export const ListaContext = createContext();

export const listaReducer = (state, action) => {
  switch (action.type) {
    case "SET_LISTAS":
      return {
        listas: action.payload
      };
    case "CREATE_LISTA":
      return {
        listas: [action.payload, ...state.listas]
      };
    case "REMOVE_LISTA":
      return {
        ...state,
        listas: state.listas.filter((lista) => lista._id !== action.payload)
      };
    default:
      return state;
  }
};

export const ListaContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(listaReducer, {
    listas: null
  });

  return (
    <ListaContext.Provider value={{...state, dispatch}}>
      { children }
    </ListaContext.Provider>
  )
}