import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const COHORT = "2408-BRANDON";
const API_URL = `https://fsa-crud-2aa9294fe819.herokuapp.com/api/${COHORT}/`;

const api = createApi({
  baseQuery: fetchBaseQuery({
    baseUrl: API_URL,
  }),
  endpoints: () => ({}),
  tagTypes: ["Events"],
});

export default api;
