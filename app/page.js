import Image from "next/image";
import Marquee from './components/Marquee'
import { Suspense } from "react";
import Banner from "./components/banner";
import PriceINcreateSection from "./components/PriceINcreateSection";
export default function Home() {
  return (
    <div className="">
      <Suspense fallback='loading'>  
        
        <Marquee></Marquee>
        
        
        
        </Suspense>
   <Banner></Banner>
   <Suspense fallback='loading'> 
    <PriceINcreateSection></PriceINcreateSection>
    </Suspense>
  
    </div>
  );
}
