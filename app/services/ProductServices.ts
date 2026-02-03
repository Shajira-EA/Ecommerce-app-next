// 
// ProductServices.ts
import { ServiceBase } from "./serviceBase";

export class ProductServices extends ServiceBase {
  
  static getProducts = async () => {
    const res = await fetch(`${this.API_URL}/products`, {
      headers: {
        "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 Chrome/114.0.0.0 Safari/537.36",
        "Accept": "application/json",
      },
      cache: "no-store",
    });

    if (!res.ok) {
      console.error("API ERROR:", res.status, await res.text());
      throw new Error("Products fetch failed");
    }

    const data = await res.json();
    return data;
  };

  static getProductById = async (id: number) => {
    const res = await fetch(`${this.API_URL}/products/${id}`, {
      headers: {
        "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 Chrome/114.0.0.0 Safari/537.36",
        "Accept": "application/json",
      },
      cache: "no-store",
    });

    if (!res.ok) {
      console.error("API ERROR:", res.status, await res.text());
      throw new Error("Product fetch failed");
    }

    const data = await res.json();
    return data;
  };
}
