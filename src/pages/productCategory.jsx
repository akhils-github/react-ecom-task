import React, { useContext } from "react";
import Product from "../components/Product";
import { useQuery } from "@tanstack/react-query";
import { CATEGORY, PRODUCTS, newRequest } from "../api";
import { useParams } from "react-router-dom";

const ProductCategory = () => {
  const { params } = useParams();
  // get products from product context
console.log(params)
  //
  const { data: categoryProductListing, isLoading } = useQuery({
    queryKey: ["categoryProductListing"],
    queryFn: () =>
      newRequest.get(`${CATEGORY}/${params}/products`).then((res) => {
        console.log(res);
        return res.data;
      }),
  });

  console.log(categoryProductListing);

  return (
    <section className="py-20">
      <div className="container mx-auto">
        <h1 className="text-3xl font-semibold mb-10 text-center">
         Products
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 lg:mx-8 gap-[30px] max-w-sm mx-auto md:max-w-none md:mx-0">
          {categoryProductListing &&
            categoryProductListing?.map((product) => (
              <Product product={product} key={product.id} />
            ))}
        </div>
      </div>
    </section>
  );
};

export default ProductCategory;
