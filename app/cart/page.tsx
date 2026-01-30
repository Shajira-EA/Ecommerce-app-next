
import CartView from "@/app/(components)/cartView/CartView";

function DetailedView() {
    return ( 
      <div className="max-w-screen-xl mx-auto mt-9 px-4 sm:px-6 lg:px-8 py-8">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2  items-start">
          <div className="md:col-span-2 ">
               <CartView  />
          </div>
      </div>
      </div>
     );
}

export default DetailedView;