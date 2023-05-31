import { useLazyLoginQuery } from "@/redux/api/authApi";
import { useLazyGetFeaturesQuery } from "@/redux/api/featuresApi";
import { useLazyGetMeQuery } from "@/redux/api/usersApi";
import {
  reset,
  selectFeature,
  selectFeatures,
  selectRole,
  selectRoles,
  selectUser,
  setFeatures,
  setFeature,
  setTokens,
  setUser,
  setRole,
  setRoles,
} from "@/redux/features/AuthSlice";
import { useAppDispatch, useAppSelector } from "@/redux/store";
import processRoles from "@/utils/processRoles";
import { useState } from "react";

const useAuth = () => {
  const dispatch = useAppDispatch();

  const user = useAppSelector(selectUser);
  const roles = useAppSelector(selectRoles);
  const role = useAppSelector(selectRole);
  const features = useAppSelector(selectFeatures);
  const feature = useAppSelector(selectFeature);

  const [triggerLoginQuery] = useLazyLoginQuery();
  const [triggerGetMeQuery] = useLazyGetMeQuery();
  const [triggerGetFeaturesQuery] = useLazyGetFeaturesQuery();

  const isLoggedIn = Boolean(user) && Boolean(role) && Boolean(feature);

  const changeFeature = async (selectedFeature: string) => {
    dispatch(setFeature(selectedFeature));
  };

  const changeRole = async (selectedRole: string) => {
    dispatch(setRole(selectedRole));

    const { data: featuresResponse, error: featuresError } =
      await triggerGetFeaturesQuery(selectedRole, false);

    if (featuresError) {
      throw new Error((featuresError as RTKQueryError).data.error_description);
    }

    dispatch(setFeatures(featuresResponse as FeaturesResponse));

    const feature = (featuresResponse as FeaturesResponse)[0];

    changeFeature(feature);
  };

  const login = async (values: LoginParams) => {
    const { data: loginResponse, error: loginError } = await triggerLoginQuery(
      values,
      false
    );

    if (loginError) {
      throw new Error((loginError as RTKQueryError).data.error_description);
    }

    dispatch(setTokens(loginResponse as LoginResponse));

    const { data: meResponse, error: meError } = await triggerGetMeQuery(
      undefined,
      false
    );

    if (meError) {
      throw new Error((meError as RTKQueryError).data.error_description);
    }

    const { roles: unprocessedRoles, ...rest } = meResponse as UsersMeResponse;
    dispatch(setUser(rest));

    const processedRoles = processRoles(unprocessedRoles);
    dispatch(setRoles(processedRoles));

    const processedRole = processedRoles[0];
    await changeRole(processedRole);
  };

  const logout = () => {
    dispatch(reset());
  };

  return {
    changeRole,
    changeFeature,
    login,
    logout,
    isLoggedIn,
    user,
    feature,
    features,
    role,
    roles,
  };
};

export default useAuth;
