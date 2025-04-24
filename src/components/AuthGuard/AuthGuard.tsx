import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { AUthGuard } from "./AuthGuard.type";
import Cookies from "js-cookie";
import { StyledCircularProgress } from "./AuthGurad.style";

const AuthGuard = ({ requireAuth, children }: AUthGuard) => {
  const [checking, setChecking] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    const token = Cookies.get("jwt");
    if (requireAuth && !token) {
      navigate("/login");
    } else if (!requireAuth && token) {
      navigate("/");
    } else {
      setChecking(false);
    }
  }, [requireAuth, navigate]);

  if (checking) return <StyledCircularProgress />;

  return <>{children}</>;
};

export default AuthGuard;
