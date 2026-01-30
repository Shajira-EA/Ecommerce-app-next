"use client";
import { useRouter, useSearchParams } from "next/navigation";

function FilterList() {
    const router = useRouter();
    const searchParams = useSearchParams();
const setFilter = (key: string, value: string | null) => {
  const params = new URLSearchParams(searchParams.toString());

  if (value) {
    params.set(key, value);
  } else {
    params.delete(key);
  }

  router.push(`/products?${params.toString()}`);
};

    return (
                  <div className="shrink-0 sticky top-24 w-[270px] h-full">
                            <div className="text-lg font-semibold mb-4">Category</div>
                                        <ol className="text-sm" >
                                            <li className="flex items-center gap-2 cursor-pointer">
                                                <input
  type="radio"
  name="category"
  value="electronics"
  checked = {searchParams.get("category") === "electronics"}
  onChange={() => setFilter("category","electronics")}
/>
<label>Electronics</label>
                                            </li>
                                            <li className="flex items-center gap-2 cursor-pointer">
                                                <input
  type="radio"
  name="category"
  value="Men's Fashion"
    checked = {searchParams.get("category") === "men's clothing"}
  onChange={() => setFilter("category","men's clothing")}
/>
<label>Men's Fashion</label>
                                            </li>
                                            <li className="flex items-center gap-2 cursor-pointer">
                                                <input
  type="radio"
  name="category"
  value="women's Fashion"
  checked = {searchParams.get("category") === "women's clothing"}
  onChange={() => setFilter("category","women's clothing")}
/>
<label>women's Fashion</label>
                                            </li>
                                            <li className="flex items-center gap-2 cursor-pointer">
                                                <input
  type="radio"
  name="category"
  value="jewelery"
    checked = {searchParams.get("category") === "jewelery"}
  onChange={() => setFilter("category","jewelery")}
/>
<label>Jewelery</label>
                                            </li>
                                        </ol>
                                         <div className="text-lg font-semibold mb-4">Price</div>
                                        <ol className="text-sm" >
                                         <li> <input
  type="radio"
  name="price"
  checked={searchParams.get("price") === "301-1000"}
  onChange={() => setFilter("price", "301-1000")}
/>
<label>₹301 – ₹1000</label>
</li><li>
<input
  type="radio"
  name="price"
  checked={searchParams.get("price") === "201-300"}
  onChange={() => setFilter("price", "201-300")}
/>
<label>₹201 – ₹300</label></li>
<li>
<input
  type="radio"
  name="price"
  checked={searchParams.get("price") === "101-200"}
  onChange={() => setFilter("price", "101-200")}
/>
<label>₹101 – ₹200</label></li>
<li>
<input
  type="radio"
  name="price"
  checked={searchParams.get("price") === "0-100"}
  onChange={() => setFilter("price", "0-100")}
/>
<label>₹0 – ₹100</label></li>
                                        </ol>
                              <div className="text-lg font-semibold mt-5 mb-4">Rating</div>
                                        <ol className="text-sm" >
                                         <li>
                                             <input
  type="radio"
  name="rating"
  checked={searchParams.get("rating") === "4"}
  onChange={() => setFilter("rating", "4")}
/>
<label>4★ & above</label>
                                            </li> 
<li>
<input
  type="radio"
  name="rating"
  checked={searchParams.get("rating") === "3"}
  onChange={() => setFilter("rating", "3")}
/>
<label>3★ & above</label>

</li>
<li>
<input
  type="radio"
  name="rating"
  checked={searchParams.get("rating") === "2"}
  onChange={() => setFilter("rating", "2")}
/>
<label>2★ & above</label>

</li>
<li>
<input
  type="radio"
  name="rating"
  checked={searchParams.get("rating") === "1"}
  onChange={() => setFilter("rating", "1")}
/>
<label>1★ & above</label>

</li>

                                        </ol>
                               
                    </div>      
);
}
export default FilterList;