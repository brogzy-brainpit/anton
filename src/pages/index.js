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
    <Landing preloaderOut={preLoaderOut}/>
    <Link href="/contact" className="h-screen flex items-center justify-center text-black bg-white text-heading1">contact page</Link>
    </main>
  );
}
