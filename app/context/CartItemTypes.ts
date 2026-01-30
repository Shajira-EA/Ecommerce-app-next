import { ProductType } from "./ProductType";

export interface CartItemType extends ProductType{
    quantity: number;
}