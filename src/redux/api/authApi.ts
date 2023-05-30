import getEnv from "@/utils/getEnv";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const authApi = createApi({
  reducerPath: "authApi",
  baseQuery: fetchBaseQuery({ baseUrl: getEnv("VITE_API_URL") }),
  endpoints: (builder) => ({
    login: builder.query<LoginResponse | ErrorResponse, LoginParams>({
      query: (credentials) => ({
        url: "/auth/login",
        method: "POST",
        body: credentials,
      }),
    }),
  }),
});

export const { useLazyLoginQuery } = authApi;

export default authApi;
