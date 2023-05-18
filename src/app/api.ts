import {
  BaseQueryApi,
  FetchArgs,
  createApi,
  fetchBaseQuery,
} from "@reduxjs/toolkit/query/react";
import { setCredentials, logOut } from "@/modules/auth/slice";
import getEnv from "@/shared/utils/getEnv";
import { RootState } from "@/app/store";

const baseQuery = fetchBaseQuery({
  baseUrl: getEnv("VITE_API_URL"),
  prepareHeaders: (headers, { getState }) => {
    const access_token = (getState() as RootState).rootReducer.auth
      .access_token;
    if (access_token) {
      headers.set("authorization", `Bearer ${access_token}`);
    }
    return headers;
  },
});

const baseQueryWithReauth = async (
  args: string | FetchArgs,
  api: BaseQueryApi,
  extraOptions: {}
) => {
  let result = await baseQuery(args, api, extraOptions);
  const statusCode = result?.error?.status as number;
  if (statusCode && statusCode >= 400 && statusCode < 500) {
    const refreshResult = await baseQuery("/auth/refresh", api, extraOptions);
    if (refreshResult?.data) {
      api.dispatch(setCredentials({ ...refreshResult.data }));
      result = await baseQuery(args, api, extraOptions);
    } else {
      api.dispatch(logOut());
    }
  }

  return result;
};

export const appApi = createApi({
  baseQuery: baseQueryWithReauth,
  endpoints: (builder) => ({}),
});
