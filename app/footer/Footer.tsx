import Image from "next/image";

function Footer() {
    return ( 
        <div className="bg-gray-900 text-gray-200">
            <div className="grid grid-cols-1 md:grid-cols-3 text-center p-3 gap-8">
                <div>
                     <div className="text-lg font-semibold mb-4">Customer Support</div>
                        <ol className="text-sm" >
                            <li>Help Center</li>
                            <li>FAQs</li>
                            <li>Shipping & Returns</li>
                            <li>Privacy Policy</li>
                            <li>Terms & Conditions</li>
                        </ol>
                </div>
                <div>
<div className="text-lg font-semibold mb-4">Contact Information</div>
                     <ol className="text-sm" >
                        <li>Email: support@demoestore.com</li>
                        <li>Phone: +91 90000 00000</li>
                    </ol>
                </div>
                <div>
                    <div className="text-lg font-semibold mb-4">Follow us</div>
                    <div className="text-sm flex gap-5 justify-center">
                                        <Image src="/images/facebook.png" alt="facebook" unoptimized width={20} height={20}/> 
                                        <Image src="/images/instagram.png" alt='instagram'  width={20}  height={20}/>
                                        <Image src="/images/twitter.png" alt='Twitter' unoptimized width={20}  height={20}/>
                                        <Image src="/images/linkedin.png" alt='LinkedIn' width={20}  height={20}/>
                                    </div>
                </div>
            </div>
             <div className="text-center text-xs bg-slate-400 text-black h-[25px] py-1 text-gray" >
                © 2025 | Demo E-commerce Application | All Rights Reserved
            </div>
            </div>
     );
}

export default Footer;