import { JOBS_URL } from "../constants";
import { apiSlice } from "./apiSlice";

export const jobsApiSlice = apiSlice.injectEndpoints({

    endpoints: (builder) => ({
        getJobs: builder.query({
            query: () => ({
                url: JOBS_URL,
            }),
            keepUnusedDataFor: 5,
        }),
        getJobById: builder.query({
            query: (id) => `${JOBS_URL}/${id}`,
        }),
    })
})

export const { useGetJobsQuery, useGetJobByIdQuery } = jobsApiSlice;