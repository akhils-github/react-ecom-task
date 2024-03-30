import React, { useContext } from "react";
import { useParams } from "react-router-dom";
import { CartContext } from "../contexts/CartContext";
import { useQuery } from "@tanstack/react-query";
import { PRODUCTS, newRequest } from "../api";

const ProductDetails = () => {
  // get the product id from url
  const { id } = useParams();
  console.log(id)
  const { addToCart } = useContext(CartContext);

    const { data: productDetails,isLoading} = useQuery({
      queryKey: ["productDetails",id],
      queryFn: () =>
        newRequest.get(`${PRODUCTS}/${id}`).then((res) => {
          return res.data;
        }),
        enabled:!!id
    });
    console.log(productDetails)

  //get the single product based on id
  const product = products.find((item) => {
    return item.id === parseInt(id);
  });

  // if product is not found
  if (isLoading) {
    return (
      <section className="h-screen flex justify-center items-center">
        Loading...
      </section>
    );
  }

  // destructure product
  const { title, price, description, images } = productDetails;
  console.log(title,images)
  return (
    <section className="pt-[450px] md:pt-32 pb-[400px] md:pb-12 lg:py-32 h-screen flex items-center">
      <div className="container mx-auto">
        {/* image and text wrapper */}
        <div className="flex flex-col lg:flex-row items-center">
          {/* image */}
          <div className="flex flex-1 justify-center items-center mb-8 lg:mb-0">
            <img className="max-w-[200px] lg:max-w-xs" src={images[0]} alt="" />
          </div>
          {/* text */}
          <div className="flex-1 text-center lg:text-left">
            <h1 className="text-[26px] font-medium mb-2 max-w-[450px] mx-auto lg:mx-0">{title}</h1>
            <div className="text-2xl text-red-500 font-medium mb-6">$ {price}</div>
            <p className="mb-8">{description}</p>
            <button onClick={()=>addToCart(productDetails,productDetails?.id)} className='bg-primary py-4 px-8 text-white'>Add to cart</button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductDetails;
