import { CartItemType } from "./CartItemTypes";
import { ProductType } from "./ProductType";

type Action = | {type: "ADD"; payload: ProductType} | {type: "INCREMENT"; payload: number} | {type: "DECREMENT"; payload: number} | {type: "CLEAR"};

export function cartReducer(state: CartItemType[], action: Action){
    switch(action.type){
        case "ADD": {
            
            const existingProduct = state.find(product => product.id === action.payload.id);

            if(existingProduct){
                return state.map(product => product.id === action.payload.id? {...product, quantity: product.quantity +1} : product);
            }
            return [...state, {...action.payload, quantity: 1}];
        }
        case "INCREMENT": {

                return state.map(product => product.id === action.payload? {...product, quantity: product.quantity + 1} : product);
        }
        case "DECREMENT": {

                return state.map(product => product.id === action.payload? {...product, quantity: product.quantity - 1} : product).filter(product => product.quantity > 0);
        }
       
        case "CLEAR": {
            return [];
        }
        default:
            return state;
    }
}