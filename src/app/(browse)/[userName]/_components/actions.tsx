"use client"

import { Button } from '@/components/ui/button'
import React, { useTransition } from 'react'
import { onFollow, onUnFollow } from '../../../../../actions/follow'
import { toast } from 'sonner'

interface ActionsProps{
    isFollowing: boolean
    userId: string
}

const Actions = ({isFollowing,userId} : ActionsProps) => {

    const [isPending,startTransition] = useTransition()

    const handleFollow = () => {

        startTransition(() => {
            onFollow(userId).then((data) => toast.success(`You are now following ${data.following.userName}`))
            .catch(() => toast.error("Something went wrong"))
        })

       
    }

    const handleIUnFollow = () => {

        startTransition(() => {
            onUnFollow(userId).then((data) => toast.success(`You have unfollow ${data.following.userName}`))
            .catch(() => toast.error("Something went wrong"))
        })

       
    }

    const onClick = () => {
        if(isFollowing)
        {
            handleIUnFollow()
        }else{
            handleFollow()
        }
    }

  return (

    <>
            <Button disabled={ isPending} onClick={onClick} variant={'primary'}>
                {isFollowing ? "Unfollow" : "Follow"} 
            </Button>
        

    </>
    
  )
}

export default Actions