import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import products from "./assets/products";
import FilterableProductTable from "./components/filterableProductTable.services";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <FilterableProductTable products={products} />
  </React.StrictMode>
);
