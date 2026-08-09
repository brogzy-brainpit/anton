import Landing from "@/component/Landing";
import Scene from "../../home/Scene";
import { useEffect, useState } from "react";
import Land from "@/component/Land";


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
    <Land preloaderOut={preLoaderOut}/>
    <Landing preloaderOut={preLoaderOut}/>
    </main>
  );
}
