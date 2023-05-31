import useAuth from "@/hooks/useAuth";
import {
  selectFeature,
  selectFeatures,
  selectRole,
  selectRoles,
  setFeature,
  setRole,
} from "@/redux/features/AuthSlice";
import { useAppDispatch, useAppSelector } from "@/redux/store";
import React, { useEffect } from "react";
import { Outlet, useNavigate } from "react-router-dom";

interface Props {
  requiredRole: string;
  requiredFeature: string;
}

const Protected: React.FC<Props> = ({ requiredRole, requiredFeature }) => {
  const dispatch = useAppDispatch();

  const navigate = useNavigate();

  const { isLoggedIn, logout } = useAuth();

  const features = useAppSelector(selectFeatures);
  const feature = useAppSelector(selectFeature);
  const roles = useAppSelector(selectRoles);
  const role = useAppSelector(selectRole);

  useEffect(() => {
    const checkRole = () => {
      if (roles?.includes(requiredRole)) {
        if (requiredRole !== role) {
          dispatch(setRole(requiredRole));
        }
        return true;
      }
      return false;
    };

    const checkFeature = () => {
      if (features[requiredRole]?.includes(requiredFeature)) {
        if (requiredFeature !== feature) {
          dispatch(setFeature(requiredFeature));
        }
        return true;
      }
      return false;
    };

    const isAllowed = isLoggedIn && checkRole() && checkFeature();

    if (!isAllowed) {
      logout();
      navigate("/auth");
    }
  }, [isLoggedIn]);

  return <Outlet />;
};

export default Protected;
