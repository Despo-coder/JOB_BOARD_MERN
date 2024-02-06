import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react'
import { BASE_URL } from '../constants'


export const apiSlice = createApi({
    reducerPath: 'api',
    baseQuery: fetchBaseQuery({ baseUrl: BASE_URL }),
    tagTypes: ['Jobs', 'Users'],
    endpoints: (builder) => ({
        // getJobs: builder.query({
        //     query: () => '/api/jobs',
        // }),
        // getJobById: builder.query({
        //     query: (id) => `/api/jobs/${id}`,
        // }),
    })
})

// export const { useGetJobsQuery, useGetJobByIdQuery } = apiSlice