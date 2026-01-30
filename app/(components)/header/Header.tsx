"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { useCart } from "@/app/context/CartContext";
import { useRouter } from "next/navigation";

function Header() {

  const router = useRouter();
  const [ isOpen, setIsOpen] = useState(false);
  const [input,setInput] = useState("");
  const cartItems = useCart();

  const handleSearch = () => {
    if(!input.trim()) return;
    router.push(`/?q=${encodeURIComponent(input)}`);
    setInput("");
  }
  
  return (  

<nav className=" bg-[#0b1e3f] w-full z-20  top-0 start-0 relative">
  <div className="max-w-screen-xl mx-auto ">


    {/* ----mobile view--- */}

    <div className="md:hidden  flex items-center justify-between h-14 gap-2">
          <Image src="/images/Weblogo.png" height={30} width={30} alt="Logo" /> 
  <input className="w-80 px-4 py-2 rounded-lg text-sm outline-none focus:ring-2 focus:ring-blue-500"
   type="text"
    placeholder="Search products..."/>
      {/* ---mobile collapse menu--- */}
      <button
            onClick={() => setIsOpen(!isOpen)}
            className=" md:flex  inline-flex items-center justify-center h-10 w-10 rounded hover:bg-[#081730]"
          >
            <svg
              className="w-6 h-6 text-white"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeWidth="2"
                strokeLinecap="round"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>  
    {(isOpen) && (
  <ul className="md:flex absolute top-full left-0 w-full bg-[#0b1e3f] px-4 py-3 space-y-2 text-white text-center text-sm">
      <li>
<Link href="/"   className=" border-b-2 border-b-transparent active:border-b-white block py-2 "
  onClick={() => setIsOpen(false)}>
  HOME
</Link>
      </li>
      <li>
         <Link href="/" onClick={() => setIsOpen(false)} className=" border-b-2 border-b-transparent active:border-b-white block py-2 ">ABOUT</Link>
      </li>
      <li>
         <Link href="/products" onClick={() => setIsOpen(false)} className=" border-b-2 border-b-transparent active:border-b-white block py-2 ">PRODUCTS</Link>  
         
      </li>
     <li>
         <Link href="/" onClick={() => setIsOpen(false)} className=" border-b-2 border-b-transparent active:border-b-white block py-2 ">CONTACT</Link>      </li>
     <li>
         <Link href="/" onClick={() => setIsOpen(false)} className=" border-b-2 border-b-transparent active:border-b-white block py-2 ">CART </Link>
      </li>
    </ul>
  
    )}

</div>

</div>


      <div className="flex items-center justify-around md:h-16 gap-10">

    <div className="flex-shrink-1 hidden md:flex ">
    <Image src="/images/logo.png" height={30} width={180} alt="Logo" /> 
    </div>

  {/* Search goes here---- */}

    <div className="relative hidden md:flex flex-1 max-w-md">
  <input
    type="text"
    placeholder="Search products..."
    className="w-full pl-10 pr-4 py-2 rounded-lg text-sm outline-none focus:ring-2 focus:ring-blue-500"
    value={input}
    onChange={(e) => setInput(e.target.value)}
    onKeyDown={(e) => e.key == "Enter" && handleSearch()}
  />
  <svg
    className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400"
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
    onClick={handleSearch}
  >
    <path strokeWidth="2" strokeLinecap="round" d="m21 21-4.3-4.3M10 18a8 8 0 1 1 0-16 8 8 0 0 1 0 16Z" />
  </svg>
</div>
  
  {/* ---menu---- */}
 
          <div className="text-white font-bold flex  items-center justify-between  ">
    <ul className="hidden md:hidden lg:flex flex-1 gap-5 text-sm ">
      <li>
<Link
  href="/"
  className="inline-flex items-center  justify-center h-10 px-3 rounded hover:bg-[#081730] transition">
  HOME
</Link>
      </li>
      <li>
         <Link href="/about" className="inline-flex items-center justify-center h-10 px-3 rounded hover:bg-[#081730] transition">ABOUT</Link>
      </li>
      <li>
         <Link href="/products" className="inline-flex items-center justify-center h-10 px-3 rounded hover:bg-[#081730] transition">PRODUCTS</Link>  
         
      </li>
     <li>
         <Link href="/contact" className="inline-flex items-center justify-center h-10 px-3 rounded hover:bg-[#081730] transition">CONTACT</Link>      </li>
     <li>
         <Link href="/cart" className="inline-flex items-center justify-center h-10 px-3 rounded hover:bg-[#081730] transition relative">
                  <svg
         className="w-6 h-6"
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
    
  >
     <path 
      strokeWidth="2" 
      strokeLinecap="round"
      strokeLinejoin="round"
       d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13l-1.5 7h13M7 13L5.4 5M17 21a1 1 0 100-2 1 1 0 000 2ZM9 21a1 1 0 100-2 1 1 0 000 2Z"></path>
  </svg>
         </Link>
        {cartItems.cart.length > 0 && (
          <span className="
            absolute -top-0 
            flex h-4 w-4 items-center justify-center
            rounded-full bg-red-600
            text-xs font-semibold text-white
          ">
            {cartItems.cart.length}
          </span>
        )}
      </li>
    </ul>
  </div>
  

  </div>
</nav>

  );
}

export default Header;