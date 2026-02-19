import { baseApi } from "../../baseApi";

export const brandApi = baseApi.injectEndpoints({
    endpoints: (builder) => ({
        createBrand : builder.mutation({
            query: (createApi) => ({
                url: `/brands`,
                method: "POST", 
                body: createApi
            })
        })
    })
})

export const {
    useCreateBrandMutation
} = brandApi;