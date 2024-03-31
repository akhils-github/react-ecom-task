import React from "react";
import { CATEGORY, newRequest } from "../api";
import { useQuery } from "@tanstack/react-query";
import { Link } from "react-router-dom";
import Loader from "../components/Loader";

export const Categories = () => {
  const categories = [
    {
      id: 1,
      name: "Fast Food",
      image:
        "https://duyt4h9nfnj50.cloudfront.net/new_search_home_eats_icon/FastFood_BrowseHome@3x.png",
    },
    {
      id: 2,
      name: "Pizza",
      image:
        "https://duyt4h9nfnj50.cloudfront.net/new_search_home_eats_icon/Pizza_BrowseHome@3x.png",
    },
    {
      id: 3,
      name: "Wings",
      image:
        "https://duyt4h9nfnj50.cloudfront.net/new_search_home_eats_icon/Wings_BrowseHome@3x.png",
    },
    {
      id: 4,
      name: "Indian",
      image:
        "https://duyt4h9nfnj50.cloudfront.net/new_search_home_eats_icon/Indian_BrowseHome@3x.png",
    },
    {
      id: 5,
      name: "Latest Deals",
      image:
        "https://duyt4h9nfnj50.cloudfront.net/new_search_home_eats_icon/Deals_BrowseHome@3x.png",
    },
    {
      id: 6,
      name: "Restaurant Rewards",
      image:
        "https://duyt4h9nfnj50.cloudfront.net/new_search_home_eats_icon/RestoRewards_BrowseHome@3x.png",
    },
  ];
  const { data: categoryListing, isLoading } = useQuery({
    queryKey: ["categoryListing"],
    queryFn: () =>
      newRequest.get(CATEGORY).then((res) => {
        console.log(res);
        return res.data;
      }),
  });
  console.log(categoryListing);
  return (
    <div className="max-w-[1640px]  px-4 py-28  ">
      <h1 className="text-orange-600 font-bold text-2xl text-center">
        Category Lists
      </h1>
      {/* Categories */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6 py-6">
        {isLoading ? (
          <Loader />
        ) : (
          <>
            {categoryListing &&
              categoryListing.map((item, index) => (
                <Link
                  to={`/categorory/${item?.id}/products`}
                  key={item?.id}
                  className="bg-gray-100 hover:bg-white cursor-pointer duration-500 rounded-lg p-4 flex justify-between items-center"
                >
                  <h2 className="font-bold sm:text-lg">{item.name}</h2>
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-16 rounded"
                  />
                </Link>
              ))}
          </>
        )}
      </div>
    </div>
  );
};
