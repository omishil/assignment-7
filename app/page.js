import Image from "next/image";
import Marquee from './components/Marquee'
import { Suspense } from "react";
export default function Home() {
  return (
    <div className="">
      <Suspense fallback='loading'>  <Marquee></Marquee></Suspense>
   
    </div>
  );
}
