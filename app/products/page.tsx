"use client";

import { useSearchParams } from "next/navigation";
import { useProduct } from "../context/productContext";
import FilterList from "../(components)/filterList/FilterList";
import ProductCard from "../(components)/productCard/ProductCard";

function ProductList() {
  const searchParams = useSearchParams();
  const { allProducts } = useProduct();

  const category = searchParams.get("category");
  const price = searchParams.get("price");
  const rating = searchParams.get("rating");

  const filteredProducts = allProducts.filter(product => {
    if (category && product.category !== category) return false;

    if (price) {
      const [min, max] = price.split("-").map(Number);
      if (product.price < min || product.price > max) return false;
    }

    if (rating && product.rating.rate < Number(rating)) return false;

    return true;
  });

  return (
    <div className="flex gap-4 px-4">
      <FilterList />
      <div className="flex-1">
        <ProductCard products={filteredProducts} />
      </div>
    </div>
  );
}

export default ProductList;
