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
  setTokens,
  setUserAndRoles,
} from "@/redux/features/AuthSlice";
import { useAppDispatch, useAppSelector } from "@/redux/store";
import processRoles from "@/utils/processRoles";

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

    const processedRoles = processRoles(unprocessedRoles);

    const processedRole = processedRoles[0];

    const { data: featuresResponse, error: featuresError } =
      await triggerGetFeaturesQuery(processedRole, false);

    if (featuresError) {
      throw new Error((featuresError as RTKQueryError).data.error_description);
    }

    dispatch(setUserAndRoles({ roles: processedRoles, ...rest }));

    dispatch(setFeatures(featuresResponse as FeaturesResponse));
  };

  const logout = () => {
    dispatch(reset());
  };

  return {
    isLoggedIn,
    user,
    role,
    roles,
    feature,
    features,
    login,
    logout,
  };
};

export default useAuth;
