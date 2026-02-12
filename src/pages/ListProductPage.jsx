import { useParams } from "react-router-dom";
import FooterComponent from "../components/NavFooter/FooterComponent";
import NavbarComponent from "../components/NavFooter/NavbarComponent";
import ProductDetailComponent from "../components/Products/ProductDetailComponent";
// import { useEffect, useState } from "react";
import { useGetProductByIdQuery } from "../redux/services/productApi/productApi";

export default function ListProductPage() {
  const {proId} = useParams();
  console.log("The product id: ", proId)
  // create state to handle data
  const {data} = useGetProductByIdQuery(proId);
  
  // useEffect(()=>{
  //     // create function to perform fetching single data of product
  //     async function fetchSingleProduct(){
  //         console.log("the product id: ", proId);
  //         const response = await fetch(`https://api.escuelajs.co/api/v1/products/${proId}`);
  //         const singleProduct = await response.json(); 
  //         setProductById(singleProduct);
  //     }
  //     fetchSingleProduct();
  // },[])

  // var imageProduct = product?.images[0] ? product?.images[0]: 'https://img.freepik.com/free-vector/illustration-gallery-icon_53876-27002.jpg';


  return (
    <div>
      
        {/* <h1>Product Id: {proId}</h1> */}
        {/* render detail product by id */}
        <ProductDetailComponent
          slug={data?.id || ''}
          title={data?.title || ''}
          description={data?.description || ''}
          // image={imageProduct}
          image={data?.image}
        />
     
    </div>
  )
}
