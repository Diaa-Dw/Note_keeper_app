import { AuthAction, AuthState } from "./auth.type";

const authReducer = (state: AuthState, action: AuthAction) => {
  const { type } = action;
  switch (type) {
    case "LOGIN":
      return {
        ...state,
        user: action.payload,
        isAuthenticated: true,
      };
    case "LOGOUT":
      return {
        ...state,
        user: null,
        isAuthenticated: false,
      };
    default:
      return state;
  }
};

export default authReducer;
