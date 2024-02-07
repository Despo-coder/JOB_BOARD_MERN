import {configureStore} from '@reduxjs/toolkit'
import {apiSlice} from './slices/apiSlice'
import authenticationSliceReducer from './slices/authenticationSlice'

const store = configureStore({
    reducer:{
        [apiSlice.reducerPath]: apiSlice.reducer,
        authenticate: authenticationSliceReducer
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(apiSlice.middleware),
    devTools: process.env.NODE_ENV !== 'production'
})

export default store;