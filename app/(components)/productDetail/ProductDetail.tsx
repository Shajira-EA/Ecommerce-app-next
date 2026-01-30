"use client";
import { useCart } from "@/app/context/CartContext";
import { useRouter } from "next/navigation";

function ProductDetail(props: any) {

    const router = useRouter();
    const { addToCart} = useCart();
    const prod = props.productDetail;
    const handleGoToCart = () => {
                addToCart(prod);
                router.push('/cart');
    }
    return ( 
    <>
        <div className="flex items-center justify-center flex-col lg:border-r-2 h-[350px]  ">
            
            <img src={prod.image} alt="products"  className="object-contain h-[300px] w-[240px] mt-2 "/>
        </div>
        < div className="flex items-center justify-center flex-col px-5 space-y-3 lg:border-r-2  h-[350px] ">  
                <div className="font-semibold  text-2xl ">{prod.title}</div>

                <div className="font-semibold text-justify  text-sm line-clamp-4 ">{prod.description}</div>
                {
                  (<div className="text-xl font-bold  text-orange-700 ">{prod.rating['rate'] } { "★".repeat(Math.round(prod.rating.rate))}</div>)
     }
                <div className="text-sm  text-red-700"><b>{prod.rating['count']}+ </b> Bought last month</div>
                <div className="text-blue-950 font-extrabold text-2xl pb-4">₹{prod.price}</div>
        </div>
        <div className="flex flex-col items-center justify-center space-y-3 px-5 h-[350px] ">
            <div className="text-blue-950 font-extrabold text-4xl pb-4">₹{prod.price}</div>
            <div className="font-semibold text-justify  text-sm  ">FREE scheduled delivery as soon as <b>Tuesday, 27 January, 7 am - 9 pm. </b><span className="underline text-blue-800">Details</span> </div>
            <div className="text-sm font-bold text-left text-red-700 ">Limited Stock Only</div>
            <div className="font-semibold text-left  text-sm  ">Delivering to Mumbai 400001 -</div>
            <span className="underline text-blue-800 text-sm "> Update location</span>
            <button className="border-1 bg-yellow-500 text-sm p-2 font-bold rounded-2xl" onClick={handleGoToCart} >ADD TO CART</button>
            <button className="border-1 bg-orange-500 text-sm  px-4 py-2 font-bold rounded-2xl" onClick={() => router.push('/products')}>PRODUCTS</button>

        </div>
    </>
       
     );
}

export default ProductDetail;