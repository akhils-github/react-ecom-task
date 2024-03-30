import React from "react";
import "./index.css";

import AppRoute from "./routes";
import SidebarProvider from "./contexts/SidebarContext";
import CartProvider from "./contexts/CartContext";
import QueryProvider from "./provider/QueryProvider";

const App = () => {
  return (
    <QueryProvider>
      <SidebarProvider>
        <CartProvider>
          <AppRoute />
        </CartProvider>
      </SidebarProvider>
    </QueryProvider>
  );
};

export default App;
