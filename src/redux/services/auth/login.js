

import { baseApi } from "../../baseApi";

export const login = baseApi.injectEndpoints({
    endpoints: (builder)=> ({
        userLogin: builder.mutation({
            query: (createUser) => ({
                url: "/auth/login",
                method:"POST",
                // headers: {
                //     'Content-Type': 'application/json'
                // },
                body: createUser
            })
        })
    })

})

export const { useUserLoginMutation} = login;