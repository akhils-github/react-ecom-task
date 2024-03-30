import React, { useContext } from "react";
import Product from "../components/Product";
import Hero from "../components/Hero";
import { useQuery } from "@tanstack/react-query";
import { PRODUCTS, newRequest } from "../api";

const Home = () => {
  // get products from product context

  //
  const { data: productListing, isLoading } = useQuery({
    queryKey: ["productListing"],
    queryFn: () =>
      newRequest.get(PRODUCTS).then((res) => {
        console.log(res);
        return res.data;
      }),
  });

  console.log(productListing);



  return (
    <div>
      <Hero />
      <section className="py-20">
        <div className="container mx-auto">
          <h1 className="text-3xl font-semibold mb-10 text-center">
            Explore Our Products
          </h1>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 lg:mx-8 gap-[30px] max-w-sm mx-auto md:max-w-none md:mx-0">
            {productListing &&
              productListing?.map((product) => (
                <Product product={product} key={product.id} />
              ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
