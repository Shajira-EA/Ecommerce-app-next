import { ProductType } from "./ProductType";

export interface ProductContextType{
    allProducts: ProductType[];
    setAllProducts: React.Dispatch<React.SetStateAction<ProductType[]>>;

}