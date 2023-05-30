import useAuth from "@/hooks/useAuth";
import React from "react";
import { Navigate, Outlet } from "react-router-dom";

interface Props {
  requiredRole: string;
  requiredFeature: string;
}

const Protected: React.FC<Props> = ({ requiredRole, requiredFeature }) => {
  const { roles, features } = useAuth();

  return roles?.includes(requiredRole) &&
    features?.includes(requiredFeature) ? (
    <Outlet />
  ) : (
    <Navigate to="/auth" />
  );
};

export default Protected;
