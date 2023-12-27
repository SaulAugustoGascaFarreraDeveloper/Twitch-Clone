import React from 'react'
import Wrapper from './wrapper'
import {Toogle, ToogleSkeleton} from './toogle'
import {RecommededSkeleton, Recommended} from './recommended'
import { getRecommended } from '@/lib/recommended-service'
import { getFollowedUser } from '@/lib/follow-service'
import {Following, FollowingSkeleton} from './following'

export const SideBar = async () => {

  const recommended = await getRecommended()

  const following = await getFollowedUser()

  return (
    <Wrapper>
        <Toogle />
        <div className='space-y-4 pt-4 lg:pt-0'>

          <Following data={following} />

          <Recommended data={recommended} />
          
        </div>
    </Wrapper>
  )
}


export const  SidebarSkeleton = () =>{
  return(
    <aside className='fixed flex flex-col w-[70px] lg:w-60 h-full bg-background border-r border-[#2D2E35] z-50'>
      <ToogleSkeleton />
      <FollowingSkeleton />
      <RecommededSkeleton />
    </aside>
  )
}

