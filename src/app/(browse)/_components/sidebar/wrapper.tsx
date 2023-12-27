"use client"

import { cn } from "@/lib/utils"
import { useSidebar } from "../../../../../store/use-sidebar"
import { useEffect, useState } from "react"
import {useIsClient} from "usehooks-ts"
import { ToogleSkeleton } from "./toogle"
import { RecommededSkeleton } from "./recommended"
import { FollowingSkeleton } from "./following"


interface WrapperProps{
    children: React.ReactNode
}


const Wrapper = ({children}:WrapperProps) => {

    const isClient = useIsClient()

    const {collapsed} = useSidebar((state) => state)


    // useEffect(()=>{

    //   setIsClient(true)

    // },[])

    if(!isClient) return (
      <aside 
      className={cn("fixed left-0 flex flex-col w-[70px] lg:w-60 bg-background h-full border-r  border-[#2D2E35] z-50")}>

          <ToogleSkeleton />

          <FollowingSkeleton />

          <RecommededSkeleton />

      </aside>
    )

  return (
   
   <aside
    className={cn("fixed left-0 flex flex-col w-60 bg-background h-full border-r  border-[#2D2E35] z-50",collapsed && "w-[70px]")}
   >
        {children}
   </aside>
  )
}

export default Wrapper