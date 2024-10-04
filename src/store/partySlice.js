import api from "./api";

const partyApi = api.injectEndpoints({
  endpoints: (build) => ({
    getParties: build.query({
      query: () => "events",
      transformResponse: (response) => response.data,
      transformErrorResponse: (response) => response.error,
      providesTags: ["Events"],
    }),
    getParty: build.query({
      query: (id) => "events/" + id,
      transformResponse: (response) => response.data,
      transformErrorResponse: (response) => response.error,
      providesTags: ["Events"],
    }),
    addParty: build.mutation({
      query: (party) => ({
        url: "events",
        method: "POST",
        body: party,
      }),
      invalidatesTags: ["Events"],
      transformResponse: (response) => response.data,
    }),
    deleteParty: build.mutation({
      query: (id) => ({
        url: "events/" + id,
        method: "DELETE",
      }),
      invalidatesTags: ["Events"],
    }),
  }),
});

export const {
  useGetPartiesQuery,
  useGetPartyQuery,
  useAddPartyMutation,
  useDeletePartyMutation,
} = partyApi;
