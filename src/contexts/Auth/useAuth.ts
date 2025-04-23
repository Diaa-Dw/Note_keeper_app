import { createContext, Dispatch, useContext } from "react";
import { AuthAction, AuthState } from "./auth.type";

export const AuthStateContext = createContext<AuthState | undefined>(undefined);
export const AuthDispatchContext = createContext<
  Dispatch<AuthAction> | undefined
>(undefined);

export const useAuthState = () => {
  const context = useContext(AuthStateContext);
  if (!context)
    throw new Error("useAuthState must be used within an AuthProvider");
  return context;
};

export const useAuthDispatch = () => {
  const context = useContext(AuthDispatchContext);
  if (!context)
    throw new Error("useAuthDispatch must be used within an AuthProvider");
  return context;
};
