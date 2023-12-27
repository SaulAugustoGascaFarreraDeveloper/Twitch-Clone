"use client"
import React from 'react'
import { useSidebar } from '../../../../../store/use-sidebar'
import { Button } from '@/components/ui/button'
import { ArrowLeftFromLine, ArrowRightFromLine } from 'lucide-react'
import { Hint } from '@/components/hint'
import { Skeleton } from '@/components/ui/skeleton'

export const Toogle = () => {

    const {collapsed,onCollapse,onExpand} = useSidebar((state) => state)

    const label = collapsed ? "Expand" : "Collapse"

  return (
    <>
        {collapsed && (
            <div className="hidden lg:flex w-full items-center justify-center pt-4 mb-4">
                <Hint asChild side='right' label={label}>

                    <Button 
                    onClick={onExpand}
                    className='h-auto p-2'
                    variant={'ghost'}>
                            <ArrowRightFromLine className='h-4 w-4' />
                    </Button>

                </Hint>
               
            </div>
        )}

        {!collapsed && (
            <div className="p-3 pl-6 flex items-center w-full">
                <p className='font-semibold text-primary'>
                    For You
                </p>
                <Hint label={label} side={"right"} asChild >
                
                    <Button 
                        className='h-auto p-2 ml-auto' variant={'ghost'}
                        onClick={onCollapse}
                    >
                        <ArrowLeftFromLine className='h-4 w-4' />
                    </Button>

                </Hint>
            </div>
        )}
    
    </>
  )
}

export const ToogleSkeleton = () => {
    return(
        <div className='p-3 pl-6 mb-2 lg:flex hidden items-center justify-between w-full'>
            <Skeleton className='h-6 w-[100px]' />
            <Skeleton className='w-6 h-6'  />
        </div>
    )
}