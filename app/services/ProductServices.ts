import { ServiceBase } from "./serviceBase";

export class ProductServices extends ServiceBase {
    static getProducts = async () => {
        var response = await fetch(`${this.API_URL}/products`,{
            cache: 'no-store',
        });
        var data = await response.json();
        return data;
    }

    static getProductById = async (id: number) => {
        var responses = await fetch(`${this.API_URL}/products/${id}`);
        var data =  await responses.json();
        
        return data;
    }
}