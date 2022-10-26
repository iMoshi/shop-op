import { createContext, useState } from "react";
// import products from "@data/products";
// import { getServerSideProps } from "./serverProp";

export const ProductsContext = createContext([]);

let products = "";

const ProductsContextProvider = ({ children }) => {
  const [newProduct, useNewProduct] = useState([]);

  fetch(
    `https://meta.omnismart.mn/api/method/moni_store.api.website_item_list`,
    {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    }
  )
    .then((res) => res.json())
    .then((res) => {
      products = res.message;
    });

  return (
    <ProductsContext.Provider value={{ products: [...products] }}>
      {children}
    </ProductsContext.Provider>
  );
};

export default ProductsContextProvider;
