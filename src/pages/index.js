import Landing from "@/component/Landing";
import Scene from "../../home/Scene";
import { useEffect, useState } from "react";
import Land from "@/component/Land";
import LocalTime from "@/component/LocalTime";
import Link from "next/link";


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
    <Link href="/contact" className="absolute top-0 left-0 w-full h-full z-50 text-white">contact page</Link>
    <Landing preloaderOut={preLoaderOut}/>
    </main>
  );
}
