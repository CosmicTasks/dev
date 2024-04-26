import { ListaContext } from "../context/ListaContext";
import { useContext } from "react";

export const useListaContext = () => {
  const context = useContext(ListaContext);
  if (!context) {
    throw new Error(
      "useListaContext must be used within a ListaContextProvider"
    );
  }
  return context;
};
