import { baseApi } from "../../baseApi";

export const categoryApi = baseApi.injectEndpoints({
    endpoints: (builder) =>({
        // create category
         createCategory: builder.mutation({
            query: (createCategpory) =>({
                url:`/categories`,
                method: "POST", 
                body: createCategpory
            })
         })
    })
})

export const {
    useCreateCategoryMutation
} = categoryApi;