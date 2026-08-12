import { useEffect, useState } from "react";
import Land from "@/component/Land";
import LocalTime from "@/component/LocalTime";
import Section1 from "@/component/Section1";
import Cta from "@/component/Cta";
import Test from "@/component/TextMarqueOnScroll";
import Foot from "@/component/Foot";
import Services from "@/component/Services";


export default function Home() {
  const [preLoaderOut,setPreLoaderOut]=useState(false)

  useEffect(()=>{

   const timer=  setTimeout(() => {
    setPreLoaderOut(true)
    document.body.style.cursor="default"
    window.scrollTo({top:0})
    }, 1400);
    return ()=>clearTimeout(timer)
  },[])
  return (
    <main
      className={`h-full w-full`}
    >
      {/* <LocalTime/> */}
    <Land preloaderOut={preLoaderOut}/>
<Section1/>
<Test/>
<Services/>
<Cta/>
<Foot/>
    </main>
  );
}
