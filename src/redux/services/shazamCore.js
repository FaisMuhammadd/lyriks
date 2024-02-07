import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react"

const options = {
  method: "GET",
  headers: {
    "X-RapidAPI-Key": "6240728001msh1941b45774cc2dbp163e4ajsn19ae93f3d5f7",
    "X-RapidAPI-Host": "shazam-core.p.rapidapi.com",
  },
}

fetch("https://shazam-core.p.rapidapi.com/v1/charts/world", options)
  .then((response) => response.json())
  .then((response) => console.log(response))
  .catch((err) => console.error(err))

export const shazamCoreApi = createApi({
  reducerPath: "shazamCoreApi",
})
