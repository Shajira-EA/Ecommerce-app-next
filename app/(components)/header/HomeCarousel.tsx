"use client";

import Image from "next/image";
import { useRouter} from "next/navigation";
import { useState, useEffect} from "react";

 function HomeCarousel() {
    const imageArray = ['/images/banner1.png','/images/banner2.png','/images/banner3.png',];

    const router = useRouter();

    const [index,setIndex] = useState(0);

    useEffect(() => {

        const interval = setInterval(() => {
            setIndex((prev) => (prev + 1) % imageArray.length);
        },3000);
        return () => {
            
clearInterval(interval);}
    },[]);

    return (  
    <div className="relative  min-h-[220px] sm:min-h-[300px] md:min-h-[400px] lg:min-h-[500px] overflow-hidden object-contain m-1">
  <Image
  key={imageArray[index]}
    src={imageArray[index]}
    alt="Banner"
    fill
    unoptimized
    sizes="100vw"
    className="object-cover"
  />
</div>

    );
}

export default HomeCarousel;