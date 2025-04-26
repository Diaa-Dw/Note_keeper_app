import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { AUthGuard } from "./AuthGuard.type";
import Cookies from "js-cookie";
import CircularProgress from "../CirculareProgress";

const AuthGuard = ({ requireAuth, children }: AUthGuard) => {
  const [checking, setChecking] = useState(true);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const token = Cookies.get("jwt");
    if (requireAuth && !token) {
      navigate("/login", { replace: true });
    } else if (!requireAuth && token) {
      navigate("/", { replace: true });
    } else {
      setChecking(false);
    }
  }, [requireAuth, navigate, location.pathname]);

  if (checking) return <CircularProgress />;

  return <>{children}</>;
};

export default AuthGuard;
