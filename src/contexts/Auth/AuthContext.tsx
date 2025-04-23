import { useReducer } from "react";
import { AuthDispatchContext, AuthStateContext } from "./useAuth";
import authReducer from "./authReducer";

const initialState = {
  user: null,
  isAuthenticated: false,
  token: null,
};

export const AuthProvider = ({ children }: WithChildren) => {
  const [state, dispatch] = useReducer(authReducer, initialState);

  return (
    <AuthStateContext.Provider value={state}>
      <AuthDispatchContext.Provider value={dispatch}>
        {children}
      </AuthDispatchContext.Provider>
    </AuthStateContext.Provider>
  );
};
