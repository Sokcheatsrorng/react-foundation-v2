import { fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { createApi } from "@reduxjs/toolkit/query/react";

export const productApi = createApi({
    reducerPath: 'productApi', 
    baseQuery: fetchBaseQuery({baseUrl: import.meta.env.VITE_BASE_FAKESTORE_API}),
    endpoints: (builder) => ({
        // getallproducts
        getAllProduct: builder.query({
            query: () => `/products`
        }),
        // get single product
        getProductById: builder.query({
            query: (id)=> `/products/${id}`
        }),
        // creat new product 
        creatNewProduct: builder.mutation({
            query: ({createNewProduct})=> ({
             url: `/products`,
             method: "POST", 
             headers: {
                'Content-Type': 'application/json'
             },
             body: createNewProduct
            })
        }),
        updateProductById: builder.mutation({
            query: ({id, updateProduct})=> ({
              url: `/products/${id}`,
              method: "PUT",
              body: updateProduct
            })
        }),
        deleteProductById: builder.mutation({
            query: (id) => ({
                url: `/products/${id}`,
                method: "DELETE"
            })
        })

    })
})

// export hook
export const {
  useGetAllProductQuery, 
  useGetProductByIdQuery,
  useCreatNewProductMutation,
  useUpdateProductByIdMutation,
  useDeleteProductByIdMutation
} = productApi;