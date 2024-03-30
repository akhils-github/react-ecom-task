import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Home from "../pages/Home";
import ProductDetails from "../pages/ProductDetails";

import Sidebar from "../components/Sidebar";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { Categories } from "../pages/Categories";
import ProductCategory from "../pages/productCategory";
import UserLists from "../pages/UserLists";

const AppRoute = () => {
  return (
    <div className="h-screen">
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/product/:id" element={<ProductDetails />}></Route>
          <Route path="/categories" element={<Categories />}></Route>
          <Route
            path="/categorory/:params/products"
            element={<ProductCategory />}
          ></Route>
          <Route path="/users" element={<UserLists />}></Route>
        </Routes>
        <Sidebar />
        {/* <Footer /> */}
      </Router>
    </div>
  );
};

export default AppRoute;
