"use client";

import { useCart } from "@/app/context/CartContext";
import Link from "next/link";
import { useRouter } from "next/navigation";

function ProductCard({ products }: { products: any[] }) {
  const router = useRouter();
  const { addToCart } = useCart();

  return (
    <div className="grid grid-cols-1 sm:grid-cols-3 md:grid-cols-4 gap-4">
      {products.map(prod => {
        const goToCart = () => {
          addToCart(prod);
          router.push("/cart");
        };

        return (
          <div
            key={prod.id}
            className="flex flex-col items-center p-3 border-2 w-[240px] h-[460px] rounded-md"
          >
            <Link href={`/products/${prod.id}`}>
              <img
                src={prod.image}
                alt={prod.title}
                className="object-contain h-[200px] w-[170px] mt-2 mb-2"
              />
            </Link>

            <div className="font-semibold text-sm text-center px-1 pb-2">
              {prod.title}
            </div>

            <div className="text-xl font-bold pb-2 text-orange-700">
              {prod.rating.rate} {"★".repeat(Math.round(prod.rating.rate))}
            </div>

            <div className="text-sm pb-2 text-red-700">
              {prod.rating.count}+ Bought last month
            </div>

            <div className="text-blue-950 font-extrabold text-lg pb-2">
              ₹{prod.price}
            </div>

            <button
              className="bg-yellow-500 text-sm mb-2 p-2 font-bold rounded-2xl"
              onClick={goToCart}
            >
              ADD TO CART
            </button>
          </div>
        );
      })}
    </div>
  );
}

export default ProductCard;
