import { createApi } from "@reduxjs/toolkit/query/react";
import queryWithReauth from "./queryWithReauth";

const usersApi = createApi({
  reducerPath: "usersApi",
  baseQuery: queryWithReauth,
  endpoints: (builder) => ({
    getMe: builder.query<UsersMeResponse | ErrorResponse, void>({
      query: () => ({
        url: "/users/me?include=person",
        method: "GET",
      }),
    }),
    changePassword: builder.query<{} | ErrorResponse, ChangePasswordParams>({
      query: (credentials) => ({
        url: "/users/change-password",
        method: "POST",
        body: credentials,
      }),
    }),
  }),
});

export const { useLazyGetMeQuery, useLazyChangePasswordQuery } = usersApi;

export default usersApi;
