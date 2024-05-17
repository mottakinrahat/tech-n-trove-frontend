import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

// Define a service using a base URL and expected endpoints
export const baseApi = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://heritage-nest-server.vercel.app/api/v1",
  }),

  endpoints: () => ({}),
  tagTypes: ["properties", "testimonial"],
});
