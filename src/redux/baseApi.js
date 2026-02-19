

// splitting the code with fetchbase query 

import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { getDecryptedAccessToken } from "../utils/tokenUtil";

// create customBaseQuery
const customBaseQuery = fetchBaseQuery({
    baseUrl: import.meta.env.VITE_BASE_ISHOP_API,
    prepareHeaders: (headers) =>{

        // accessToken 
        const accessToken = getDecryptedAccessToken();

        if(accessToken){
            headers.set(
                'Authorization', `Bearer ${accessToken}`
            )
        }
        return headers;
    }
})

export const baseApi = createApi({
    reducerPath: 'baseApi',
    baseQuery:customBaseQuery, 
    endpoints:() => ({})
})
