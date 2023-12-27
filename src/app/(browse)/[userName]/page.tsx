import { isFollowingUser } from '@/lib/follow-service'
import { getUserByUserName } from '@/lib/user-service'
import { notFound } from 'next/navigation'
import React from 'react'
import Actions from './_components/actions'

interface UserPageProps{
    params:{
        userName:string
    }
}


const UserPage = async ({params}: UserPageProps) => {

  const user = await getUserByUserName(params.userName)

  if(!user)
  {
    notFound()
  }

  const isFollowing = await isFollowingUser(user.id)

  return (
    <div className='flex flex-col  gap-y-4 '>
        <p>
          username: {user.userName}
        </p>
        <p>
          user ID: {user.id}
        </p>

        <p>
          is Following: {`${isFollowing}`}
        </p>
        
        <Actions userId={user.id} isFollowing={isFollowing} />
    </div>
  )
}

export default UserPage