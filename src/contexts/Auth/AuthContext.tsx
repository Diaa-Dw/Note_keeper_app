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

  //check if user loged in and if then load data to auth-context

  return (
    <AuthStateContext.Provider value={state}>
      <AuthDispatchContext.Provider value={dispatch}>
        {children}
      </AuthDispatchContext.Provider>
    </AuthStateContext.Provider>
  );
};
