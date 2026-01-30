"use client";

import { useSearchParams } from "next/navigation";
import Link from "next/link";
import { useProduct } from "./context/productContext";
import { useEffect, Suspense } from "react";
import Loading from "./loading";
import HomeCarousel from "./(components)/header/HomeCarousel";

export default  function Home() {
  const searchParams = useSearchParams();
  
  const { allProducts} = useProduct(); 
  
  var query = searchParams.get("q") || "";
  
      const filteredProducts = query? allProducts.filter((product) => 
          product.title.toLowerCase().includes(query.toLowerCase())
      ) : [];

  useEffect(() => {
    if(query){
      const searchArea = document.getElementById("search");
      if(searchArea){
        searchArea.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
      }
    }
  },[query]);

  return (
    <div>
      <HomeCarousel />
      <div id="search" className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8 py-8">{
       query && filteredProducts.length > 0 ? (
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {filteredProducts.map(prod => (
                <div
                            key={prod.id}
                            className="flex items-center flex-col p-3 border-2 w-[300px] h-[400px] rounded-md"
                          >
                              <img
                                src={prod.image}
                                alt={prod.title}
                                className="object-contain h-[200px] w-[170px] mt-2 mb-4"
                              />
                              <div className="font-semibold text-center px-4 pb-3">
                              {prod.title}
                            </div>
                
                            <div className="text-xl font-bold pb-3 text-orange-700">
                              {prod.rating.rate} {"★".repeat(Math.round(prod.rating.rate))}
                            </div>
                
                            <div className="text-blue-950 font-extrabold text-lg pb-4">
                              ₹{prod.price}
                            </div>
                
                          </div>
              ))}
                          </div>
                  ) : (
            <></>
      )}
      <Link href={'/products'}>
        <button className="bg-orange-500 text-center text-xl p-3 mt-2 rounded-md">Explore Now</button>
      </Link>
       </div>
    </div>
  );
}
