import getEnv from "@/utils/getEnv";
import {
  BaseQueryApi,
  FetchArgs,
  fetchBaseQuery,
} from "@reduxjs/toolkit/query/react";
import { RootState } from "../store";
import { reset, setTokens } from "../features/AuthSlice";

const baseQuery = fetchBaseQuery({
  baseUrl: getEnv("VITE_API_URL"),
  prepareHeaders: (headers, { getState }) => {
    const token = (getState() as RootState).auth.tokens?.access_token;
    headers.set("authorization", `Bearer ${token}`);
    return headers;
  },
});

const queryWithReauth = async (
  args: string | FetchArgs,
  api: BaseQueryApi,
  extraOptions: {}
) => {
  let result = await baseQuery(args, api, extraOptions);
  if (result?.error?.status === 401) {
    const token = (api.getState() as RootState).auth.tokens?.refresh_token;
    const refreshResult = await baseQuery(
      {
        url: "/auth/refresh",
        method: "POST",
        body: { token },
      },
      api,
      extraOptions
    );
    if (refreshResult.data) {
      api.dispatch(setTokens(refreshResult.data as LoginResponse));
      result = await baseQuery(args, api, extraOptions);
    } else {
      api.dispatch(reset());
    }
  }
  return result;
};

export default queryWithReauth;
