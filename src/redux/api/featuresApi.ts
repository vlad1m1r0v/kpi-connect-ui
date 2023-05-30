import { createApi } from "@reduxjs/toolkit/query/react";
import queryWithReauth from "./queryWithReauth";
const featuresApi = createApi({
  reducerPath: "featuresApi",
  baseQuery: queryWithReauth,
  endpoints: (builder) => ({
    getFeatures: builder.query<FeaturesResponse | ErrorResponse, string>({
      query: (role) => ({
        url: `/ui/features/${role}`,
        method: "GET",
      }),
    }),
  }),
});

export const { useLazyGetFeaturesQuery } = featuresApi;

export default featuresApi;
