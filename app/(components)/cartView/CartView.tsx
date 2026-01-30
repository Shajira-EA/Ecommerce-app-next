"use client";

import { useCart } from "@/app/context/CartContext";
import { toast} from "react-hot-toast";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";

function Cart() {
  const { cart, incrementCart,decrementCart, clearCart } = useCart();
  const router = useRouter();

  const handleSuccess = () => {
    toast.success("Order placed successfully!!")
    clearCart();
    setTimeout(() => {
      router.push('/');
    }, 3000);
  }

  
  const totalAmount = cart.reduce(
    (sum, product) => sum + product.price * product.quantity,
    0
  );

  if (cart.length === 0) {
    return (
      <div className="max-w-screen-xl mx-auto mt-9 px-4 py-8">
        <h3 className="text-blue-900 font-semibold text-2xl">
          The Cart is Empty.
        </h3>

        <Link href="/products">
          <button className="bg-yellow-500 text-lg mt-4 p-3 font-bold rounded-2xl">
            Products
          </button>
        </Link>
      </div>
    );
  }

  return (
    <>
      {cart.map((product) => (
        <div
          key={product.id}
          className="mb-2 border rounded-xl p-4 px-24 space-y-4 "
        >
          <div className="flex flex-col lg:flex-row gap-8 item:center">
            <img
              src={product.image}
              alt={product.title}
              className="object-contain h-[150px] w-[150px]"
            />

            <div className="flex flex-col space-y-2">
              <div className="flex items-center gap-2">
                <Image
                  src="/images/tickmark.png"
                  alt="success"
                  width={20}
                  height={20}
                />
                <span className="font-semibold text-sm text-green-600">
                  Product added to cart
                </span>
              </div>

              <div className="font-semibold text-xl">
                {product.title}
              </div>

              <div className="text-blue-950 font-extrabold text-xl">
                ₹{product.price * product.quantity}
              </div>
                <div className="flex gap-2">
                    <button 
                        type="button" 
                        className="border border-black rounded-full px-1.5 "
                        onClick={() => decrementCart(product.id)}
                        
                     >
                        -
                    </button>

                     <div className="text-sm font-medium">
                        {product.quantity}
                    </div> 
                    <button 
                        type="button" 
                        className="border border-black rounded-full px-1 "
                        onClick={() => incrementCart(product.id)} >
                        +
                    </button>
                </div>
            </div>
          </div>
        </div>
        
      ))}

      <div className="flex flex-col items-center gap-4 mt-6">
        <div className="text-xl font-bold">
          Total Amount to Pay: ₹{totalAmount}
        </div>

        <div className="flex gap-4">
          <button
            className="bg-orange-500 text-sm px-4 py-2 font-bold rounded-2xl"
            onClick={() => router.push("/products")}
          >
            PRODUCTS
          </button>

          <button
            className="bg-green-600 text-white text-sm px-4 py-2 font-bold rounded-2xl"
            onClick={handleSuccess}
          >
            BUY NOW
          </button>
        </div>
      </div>
    </>
  );
}

export default Cart;
