import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react"

export const shazamCoreApi = createApi({
  reducerPath: "shazamCoreApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://shazam-core.p.rapidapi.com/v1",
    prepareHeaders: (headers) => {
      headers.set(
        "X-RapidAPI-KEY",
        "6240728001msh1941b45774cc2dbp163e4ajsn19ae93f3d5f7"
      )

      return headers
    },
  }),
  endpoints: (builder) => ({
    getTopCharts: builder.query({ query: () => "/charts/world" }),
  }),
})

export const { useGetTopChartsQuery } = shazamCoreApi
