
import { baseApi } from "../../baseApi";

export const productApi = baseApi.injectEndpoints({
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
            query: (createNewProduct)=> ({
             url: `/products`,
             method: "POST", 
            //  headers: {
            //     'Content-Type': 'application/json'
            //  },
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
        }),

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