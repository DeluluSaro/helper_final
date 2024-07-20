"use client"
import { db } from '@/Backend/db'
import { AIResult } from '@/Backend/schema'
import { Button } from '@/components/ui/button'
import { useUser } from '@clerk/nextjs'
import { eq } from 'drizzle-orm'
import React, { useEffect, useState } from 'react'
import { HISTORY } from '../history/page'

function CreditTracker() {
    const[totWords,setTotalWords]=useState<number>(0)
 const {user}=useUser()
    const GetData=async()=>{
        {/*  @ts-ignore */}
        const result:HISTORY[]=await db.select().from(AIResult).where(eq(user?.primaryEmailAddress?.emailAddress,AIResult.createdBy))
        getTotalUsage(result)
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
    },[user])


   

 
  return (
    <div className=''>
        <div className='bg-[#7fff10] p-2 rounded-lg'>
            <h1 className='font-bold'>Credits</h1>

            <div className='h-2 bg-[#00000062] w-full rounded-lg '>
       <div className='h-2 bg-white rounded-lg' style={{width:(totWords/10000)*100+"%   "}}></div>
            </div>
            <h2 className='text-xs my-2'>{totWords}/10,000 words used</h2>
        </div>
      <Button variant={'outline'} className='w-full mt-2 text-[#7fff01]'>Upgrade</Button>
    </div>
    
  )
}

export default CreditTracker