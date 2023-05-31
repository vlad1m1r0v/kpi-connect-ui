import { useLazyLoginQuery } from "@/redux/api/authApi";
import { useLazyGetFeaturesQuery } from "@/redux/api/featuresApi";
import { useLazyGetMeQuery } from "@/redux/api/usersApi";
import {
  reset,
  selectFeature,
  selectRole,
  selectUser,
  setFeature,
  setFeatures,
  setRole,
  setRoles,
  setTokens,
  setUser,
} from "@/redux/features/AuthSlice";
import { useAppDispatch, useAppSelector } from "@/redux/store";
import processRoles from "@/utils/processRoles";

const useAuth = () => {
  const dispatch = useAppDispatch();

  const user = useAppSelector(selectUser);
  const role = useAppSelector(selectRole);
  const feature = useAppSelector(selectFeature);

  const isLoggedIn = Boolean(user) && Boolean(role) && Boolean(feature);

  const [triggerLoginQuery] = useLazyLoginQuery();
  const [triggerGetMeQuery] = useLazyGetMeQuery();
  const [triggerGetFeaturesQuery] = useLazyGetFeaturesQuery();

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

    const { roles: unprocessedRoles, ...rest } = meResponse as UsersMeResponse;
    dispatch(setUser(rest));

    const features: Record<string, FeaturesResponse | null> = {};
    const roles = processRoles(unprocessedRoles);

    for (const role of roles) {
      const { data: featuresResponse, error: featuresError } =
        await triggerGetFeaturesQuery(role, false);

      features[role] = (featuresResponse as FeaturesResponse) ?? [];
    }

    dispatch(setRole(roles[0]));
    dispatch(setRoles(roles));
    dispatch(setFeature(features[roles[0]]![0]!));
    dispatch(setFeatures(features));
  };

  const logout = () => {
    dispatch(reset());
  };

  return {
    login,
    logout,
    isLoggedIn,
  };
};

export default useAuth;
