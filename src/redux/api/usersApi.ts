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
  }),
});

export const { useLazyGetMeQuery } = usersApi;

export default usersApi;
