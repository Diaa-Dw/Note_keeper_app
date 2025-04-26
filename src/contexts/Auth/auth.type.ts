export interface AuthState {
  isAuthenticated: boolean;
  user: User | null;
  token: string | null;
}

export type AuthAction = { type: "LOGIN"; payload: User } | { type: "LOGOUT" };
