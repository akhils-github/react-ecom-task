import axios from "axios";

// Axios instances
const baseConfig = {
  baseURL: "https://api.escuelajs.co/api/v1",
};

export const newRequest = axios.create({
  ...baseConfig,
  headers: {
    "Access-Control-Allow-Origin": "*",
    "Content-Type": "application/json",
  },
});

// ALL THE API CALLS

//PRODUCTS
export const PRODUCTS = "products";
export const CATEGORY = "categories";
export const USERS = "users";
