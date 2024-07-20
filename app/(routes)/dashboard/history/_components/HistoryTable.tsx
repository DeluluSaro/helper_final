"use client"
import { db } from '@/Backend/db'
import { AIResult } from '@/Backend/schema'
import { useUser } from '@clerk/nextjs'
import { eq } from 'drizzle-orm'

import React, { useEffect, useState } from 'react'
import { HISTORY } from '../page'
import { SplitIcon } from 'lucide-react'

function HistoryTable() {
const {user}=useUser()
const [datum,setDatum]=useState<any>([])
const [selectedTemplate,setSelectedTemplate]=useState([])
const [loading,setLoading]=useState(false)
useEffect(()=>{
user&&getData()
},[user])
const getData=async()=>{
    setLoading(true)
 {/*  @ts-ignore */}

    const result:HISTORY[]=await db.select().from(AIResult).where(eq(user?.primaryEmailAddress?.emailAddress,AIResult.createdBy))
     setDatum(result)
     console.log(result)
     setLoading(false)

}





 
  return (
  <div className=''>
     
        
        

    
    {loading?<div className='flex justify-center text-center items-center'>Loading please Wait..<SplitIcon className='animate-spin'></SplitIcon></div>:<div className='grid  gap-5'>
  <div className='flex gap-36 font-bold text-[#7fff10]'>
    <h1>Template</h1>
    <h1 className='ml-16'>Response</h1>
    <h1 className='ml-20'>Data</h1>
    <h1 className='-ml-6'>To Use</h1>
  </div>
        {datum.map((item:HISTORY,index:number)=>(
            <div className=''>
                <div className='flex gap-20 ml-3 shadow-lg items-center'>
                    <h1 className='text-xs w-full'>{item?.formData.replace('{','').replace('}','').replace('"',"").replace('"','').replace('topic:','')}</h1>
                    <p className='line-clamp-4 w-[250px] -ml-[700px]'>{item?.result.replace('##','').replace('```','').replace('```','').replace("**",'').replace('**','')}</p>
                    <h1>{item?.createdAt}</h1>
                    <h1 onClick={()=>{navigator.clipboard.writeText(item?.result)}} className='cursor-pointer hover:text-black text-[#7fff01]'>copy</h1>
                    
                </div>
            </div>
        
        ))}
    </div>}
   
  </div>
  )
}

export default HistoryTable