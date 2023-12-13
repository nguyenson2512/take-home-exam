import { createContext, useContext } from "react";

export const GlobalContext = createContext({
  user: null,
  setUser: () => {},
});

export const useGlobalContext = () => useContext(GlobalContext);
