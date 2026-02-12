import { MaterialReactTable } from "material-react-table";
import { useCreatNewProductMutation, useDeleteProductByIdMutation, useGetAllProductQuery, useUpdateProductByIdMutation } from "./redux/services/productApi/productApi"
import { useState } from "react";
import { useNavigate } from "react-router-dom";


export default function App() {

  const { data } = useGetAllProductQuery();
   const [productId, setProductId] = useState(0);
   console.log(productId);
   const[handleUpdateProduct, {data:UpdateResponse}] = useUpdateProductByIdMutation();
   const [handleDelteProduct] = useDeleteProductByIdMutation();
   const navigation = useNavigate();

  //  create new product 
  const [handleCreateProduct, {
    data:Data
  }] = useCreatNewProductMutation();


// handle preview product by id

function handlePreviewProductById(row){
  console.log('id of product: ', row.id)
   setProductId(row.id)
   navigation(`/product/${row.id}`)
}


// handle create new product 
function handleCreateNewProduct(){
  // define value what we need to create
  // const product = { title: 'New Product03456789', price: 29.99 };
  handleCreateProduct({
    title: "New Pro", 
    price: 37454.00
  })

  if(Data){
    alert("Product create successfully")
  }
}

// udpate product by id 
function handleUpdateProductById(row){
    handleUpdateProduct({
      id: row.id, 
      updateProduct: {
        title: "Meooowwww",
        price: 120.97
      }
    })

}

// delete product by id

function handleDeleteProductById(row){
  handleDelteProduct(row.id)
}
  const columns = [
    {
      accessorKey: 'id',
      header: "Product ID"
    },
    {
      accessorKey: 'title',
      header: "Product Title"
    },
    {
      accessorKey: 'price',
      header: "Product Price",
      Cell: ({ cell }) => `$${cell.getValue()}`
    },
    {
      accessorKey: "image",
      header: "Product Image",
      Cell: ({ cell }) => (
        <img src={cell.getValue()} alt={cell.getValue()} className="w-[70px] h-[70px]" />
      )
    },
    {
      accessorKey: "Action", 
      header: "Action",
      Cell: ({row}) => (
        <div className="flex gap-4">
           <div onClick={() => handlePreviewProductById(row.original)}>View</div>
           <div onClick={() => handleCreateNewProduct()}>Add</div>
           <div onClick={() => handleUpdateProductById(row.original)}>Edit</div>
           <div onClick={() => handleDeleteProductById(row.original)}>Delete</div>
        </div>
      )
    }
  ]
  return (
    <div>
      {/* display single product popup */}
          {/* <SingleProductPopUp
      title={SingleProduct?.title}
      image={SingleProduct?.image}
      price={SingleProduct?.price}
      /> */}
  
     
      <MaterialReactTable
        columns={columns}
        data={data || []}
      />

    </div>
  )
}
