import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { useAuthState } from "../../contexts/Auth/useAuth";
import CircularProgress from "../CirculareProgress";
import { AUthGuard } from "./AuthGuard.type";

const AuthGuard = ({ requireAuth, children }: AUthGuard) => {
  const [checking, setChecking] = useState(true);
  const { isAuthenticated } = useAuthState();
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    if (requireAuth && !isAuthenticated) {
      navigate("/login", { replace: true });
    } else if (!requireAuth && isAuthenticated) {
      navigate("/", { replace: true });
    } else {
      setChecking(false);
    }
  }, [requireAuth, isAuthenticated, navigate, location.pathname]);

  if (checking) return <CircularProgress />;

  return <>{children}</>;
};

export default AuthGuard;
