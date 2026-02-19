
import { baseApi } from "../../baseApi";

export const supplierApi = baseApi.injectEndpoints({
    endpoints: (builder) => ({
        createSuuplier: builder.mutation({
            query: (createSupplier) => ({
                url: `/suppliers`,
                method: "POST", 
                body: createSupplier
            })
        }), 
        createProduct: builder.mutation({
            query: (createProduct) => ({
                url: `/products`, 
                method: "POST", 
                body: createProduct
            })
        })
    })
})

export const {
    useCreateSuuplierMutation,
    useCreateProductMutation
} = supplierApi;