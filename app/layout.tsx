import type { Metadata } from "next";
import Header from "./(components)/header/Header";
import Footer from "./footer/Footer";
import { Toaster} from "react-hot-toast";
import { CartProvider } from "./context/CartContext";
import { ProductProvider } from "./context/productContext";
import "./globals.css";

export const metadata: Metadata = {
  title: "Ecommerce App",
  description: "To practice Next.js",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="min-h-screen flex flex-col">
        <ProductProvider>
        <CartProvider>
          <Header/>
          <main className="flex-1">
             {children}
          </main>
          <Toaster containerStyle={{top: 200}} position="top-center" toastOptions={{duration: 3000}}/>
                <Footer/>
        </CartProvider>  
        </ProductProvider>  
      </body>
    </html>
  );
}
