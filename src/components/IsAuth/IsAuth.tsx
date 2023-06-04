import useAuth from "@/hooks/useAuth";
import { useEffect } from "react";
import { Outlet, useNavigate } from "react-router-dom";

const IsAuth = () => {
  const navigate = useNavigate();

  const { isLoggedIn, logout } = useAuth();

  useEffect(() => {
    if (!isLoggedIn) {
      logout();
      navigate("/auth");
    }
  }, [isLoggedIn]);

  return <Outlet />;
};

export default IsAuth;
