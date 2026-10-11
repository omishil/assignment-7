import Image from "next/image";
import Marquee from './components/Marquee'
import { Suspense } from "react";
import Banner from "./components/banner";
import PriceINcreateSection from "./components/PriceINcreateSection";
import PriceDecreaseSection from "./components/PrcDecreSection";
import AllProductsSection from "./components/AllProductShow";
import ProductSectionSkeleton from "./components/ProductSectionSkeleton";
export default function Home() {
  return (
    <div className="">
      <Suspense >  
        
        {/* <Marquee></Marquee> */}
           <Banner></Banner>

        
        
        </Suspense>
   <Suspense   fallback={<ProductSectionSkeleton />
  }> 
    <PriceINcreateSection></PriceINcreateSection>
    </Suspense>
    <Suspense   fallback={<ProductSectionSkeleton />
  }>     <PriceDecreaseSection></PriceDecreaseSection>
</Suspense>
    
    <Suspense   fallback={<ProductSectionSkeleton count={33}/>
  }>     <AllProductsSection ></AllProductsSection>
</Suspense>
    
    
  
    </div>
  );
}
