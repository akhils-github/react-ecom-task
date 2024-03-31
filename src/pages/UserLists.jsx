import { useQuery } from "@tanstack/react-query";
import React from "react";
import { USERS, newRequest } from "../api";
import Loader from "../components/Loader";

export default function UserLists() {
  const { data: userListing, isLoading } = useQuery({
    queryKey: ["userListing"],
    queryFn: () =>
      newRequest.get(USERS).then((res) => {
        console.log(res);
        return res.data;
      }),
  });
  console.log(userListing);
  return (
    <div class="flex flex-col container relative  mx-auto w-full items-center justify-center   rounded-lg shadow">
      <ul class="flex flex-col gap-4 w-full text-black">
        {isLoading ? (
          <Loader />
        ) : (
          <>
            {userListing &&
              userListing?.map((user) => (
                <li class="flex flex-row bg-gray-200 rounded" key={user?.id}>
                  <div class="select-none cursor-pointer hover:bg-gray-50 flex flex-1 items-center p-4 ">
                    <div class="flex flex-col w-10 h-10 justify-center items-center mr-4">
                      <a href="#" class="block relative">
                        <img
                          alt="profil"
                          src={user?.avatar}
                          class="mx-auto object-cover rounded-full h-10 w-10"
                        />
                      </a>
                    </div>
                    <div class="flex-1 pl-1 mr-16">
                      <div class="font-medium">{user?.name}</div>
                      <div class="text-black  text-sm">{user?.email}</div>
                    </div>
                  </div>
                </li>
              ))}
          </>
        )}
      </ul>
    </div>
  );
}
