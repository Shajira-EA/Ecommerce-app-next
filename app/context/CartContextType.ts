import { CartItemType } from "./CartItemTypes";
import { ProductType } from "./ProductType";

export interface CartContextType {
    cart: CartItemType[];
    addToCart: (product: ProductType) => void;
    incrementCart: (id: number) => void;
    decrementCart: (id: number) => void;
    clearCart: () => void;
}
