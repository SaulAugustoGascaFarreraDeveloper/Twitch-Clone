"use client"
import { User } from '@prisma/client'
import React from 'react'
import { useSidebar } from '../../../../../store/use-sidebar'
import { UserItem, UserItemSkeleton } from './user-item'


interface RecommendedProps{
    data: User[]
}

export const Recommended = ({data}:RecommendedProps) => {

    const {collapsed} = useSidebar()

    const showLabel = !collapsed && data.length > 0

  return (
    <div>
        {showLabel && (
            <div className="pl-6 mb-4">
                <p className='text-sm text-muted-foreground'>
                    Rcommended
                </p>
            </div>
        )}
        <ul className='space-y-2 px-2'>
            {data.map((user) => (
                <UserItem
                    key={user.id}
                    userName={user.userName}
                    imageUrl={user.imageUrl}
                    isLive={false}
                />
            ))}
        </ul>
    </div>
  )
}

export const RecommededSkeleton = () => {
    return(
        <ul className='px-2'>
            {[...Array(3)].map((_,index) => (
                <UserItemSkeleton key={index} />
            ))}
        </ul>
    )
}

