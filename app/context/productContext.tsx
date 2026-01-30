"use client";

import { createContext,useContext, useEffect, useState } from "react";
import { ProductType } from "./ProductType";
import { ProductContextType } from "./ProductContextType";
import { ProductServices } from "../services/ProductServices";

const ProductContext = createContext<ProductContextType | null>(null);

export function ProductProvider({children}: {children : React.ReactNode}) {
    const [ allProducts, setAllProducts] = useState<ProductType[]>([]);

useEffect(() =>{
    async function fetchProducts() {
         var products = await ProductServices.getProducts();
                 console.log("products:",products);
        setAllProducts(products);
    }
   fetchProducts();
    },[]);
    
    return (
        <ProductContext.Provider value = {{ allProducts, setAllProducts}}>
            {children}
        </ProductContext.Provider>
    );
}

export const useProduct = () => {
    const context = useContext(ProductContext);
if (!context) {
    throw new Error("useProduct must be used within ProductProvider");
  }
  return context;
}