import Image from "next/image";
import Marquee from './components/Marquee'
import { Suspense } from "react";
import Banner from "./components/banner";
import PriceINcreateSection from "./components/PriceINcreateSection";
import PriceDecreaseSection from "./components/PrcDecreSection";
import AllProductsSection from "./components/AllProductShow";
export default function Home() {
  return (
    <div className="">
      <Suspense fallback='loading'>  
        
        {/* <Marquee></Marquee> */}
        
        
        
        </Suspense>
   <Banner></Banner>
   <Suspense fallback='loading'> 
    <PriceINcreateSection></PriceINcreateSection>
    <PriceDecreaseSection></PriceDecreaseSection>
    <AllProductsSection></AllProductsSection>
    </Suspense>
  
    </div>
  );
}
