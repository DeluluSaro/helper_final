"use client"
import { db } from '@/Backend/db'
import { AIResult, UserSubscription } from '@/Backend/schema'
import { Button } from '@/components/ui/button'
import { useUser } from '@clerk/nextjs'
import { eq } from 'drizzle-orm'
import React, { useContext, useEffect, useState } from 'react'
import { HISTORY } from '../history/page'
import { TotalUsageContext } from '@/app/(context)/TotalUsageContext'
import { UserSubscriptContext } from '@/app/(context)/UserSubscriptionContext'

function CreditTracker() {
    const{totWords,setTotalWords}=useContext(TotalUsageContext)
    const{subscription,setSubscription}=useContext(UserSubscriptContext)
    const[Wordstobeused,setWordstobeused]=useState(10000)
 const {user}=useUser()
    const GetData=async()=>{
        {/*  @ts-ignore */}
        const result:HISTORY[]=await db.select().from(AIResult).where(eq(user?.primaryEmailAddress?.emailAddress,AIResult.createdBy))
        getTotalUsage(result)
    }

    const IsSubscribed=async()=>{
// @ts-ignore
      const result=await db.select().from(UserSubscription).where(eq(user?.primaryEmailAddress?.emailAddress,UserSubscription.email))
      if(result){
        setSubscription(true)
        setWordstobeused(100000)
      }
      
    }

    const getTotalUsage=(result:HISTORY[])=>{
        let total:number=0
        result.forEach(element => {
            total=total+Number(element.result?.length)
            setTotalWords(total)
            
            
        });
    }
    useEffect(()=>{
user&&GetData()
user&&IsSubscribed()
    },[user])


   

 
  return (
    <div className=''>
        <div className='bg-[#7fff10] p-2 rounded-lg'>
            <h1 className='font-bold'>Credits</h1>

            <div className='h-2 bg-[#00000062] w-full rounded-lg '>
       <div className='h-2 bg-white rounded-lg' style={{width:(totWords/Wordstobeused)*100+"%   "}}></div>
            </div>
            <h2 className='text-xs my-2'>{totWords}/{Wordstobeused} words used</h2>
        </div>
      <Button variant={'outline'} className='w-full mt-2 text-[#7fff01]'>Upgrade</Button>
    </div>
    
  )
}

export default CreditTracker