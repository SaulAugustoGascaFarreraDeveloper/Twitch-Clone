import { cva,type VariantProps } from 'class-variance-authority'
import React from 'react'
import { Avatar, AvatarFallback, AvatarImage } from './ui/avatar'
import { cn } from '@/lib/utils'
import { LiveBadge } from './live-badge'
import { Skeleton } from './ui/skeleton'


const avatarSizes = cva(
    "",
    {
        variants:{
            size:{
                default: "",
                lg: "h-14 w-14",
                
            }
        },
        defaultVariants:{
            size: "default"
        }
    }
)

interface UserAvatarProps 
extends VariantProps<typeof avatarSizes>{
    imageUrl: string
    userName: string
    isLive?: boolean
    showBadge?: boolean
}

export const UserAvatar = ({imageUrl,userName,isLive,showBadge,size}:UserAvatarProps) => {

    const canShowBadge = showBadge && isLive
    

  return (
    <div className='relative'>
        <Avatar className={cn(isLive && "ring-2 ring-rose-600 border border-background",
        avatarSizes({size}))}>
            <AvatarImage src={imageUrl} className='object-cover' />
            <AvatarFallback>
                {userName[0]}
                {userName[userName.length -1]}
            </AvatarFallback>
        </Avatar>
        {canShowBadge && (
            <div className="absolute -bottom-3 left-1/2 transform -translate-x-1/2 ">
                <LiveBadge />
            </div>
        )}
    </div>
  )
}


interface UserAvatarSkeletonProps extends VariantProps<typeof avatarSizes> {

}


export const UserAvatarSkeleton = ({size} : UserAvatarSkeletonProps) => {
    return(
        <Skeleton className={cn("rounded-full",avatarSizes({size}))} />
    )
}


