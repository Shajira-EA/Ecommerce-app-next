import ProductDetail from "@/app/(components)/productDetail/ProductDetail";
import { ProductServices } from "@/app/services/ProductServices";
import { notFound } from "next/navigation";

export  async function generateMetadata(props: any) {
        const params = await props.params;
const id = Number(params?.productId);
if (!id || Number.isNaN(id)) {
    return { title: "Product Not Found" };
}

const productById = await ProductServices.getProductById(id);

return {
    title: productById.title
};
}
async function DetailedView(props: any) {

    const params = await props.params;
const id = Number(params?.productId);

if (!id || Number.isNaN(id)) {
    notFound();
}

    
    var productById;
    if(id){
        productById = await ProductServices.getProductById(id);
    }    
    if (!productById) {
    notFound();
}


    return ( 
      <div className="max-w-screen-xl mx-auto mt-9 px-4 sm:px-6 lg:px-8 py-8">
      <div className="grid grid-cols-1 lg:grid-cols-3   items-start">
                  {
                 
                       <ProductDetail key = {productById.id} productDetail={productById} />
                  }
              </div>
              </div>
     );
}

export default DetailedView;