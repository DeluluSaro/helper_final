"use client"
import { db } from '@/Backend/db'
import { AIResult } from '@/Backend/schema'
import { useUser } from '@clerk/nextjs'
import { eq } from 'drizzle-orm'

import React, { useEffect, useState } from 'react'

function HistoryTable() {
const {user}=useUser()
const email=user?.primaryEmailAddress?.emailAddress



 
  return (
  <div>
      <div className='grid lg:grid-cols-10 p-2 '>
        <div className='col-span-4'>
            <h1 className='font-bold'>Template</h1>
        </div>
        <div className='col-span-4'>
            <h1 className='font-bold'>Ai Resp</h1>
        </div>
        <div className='col-span-1'>
            <h1 className='font-bold'>Date</h1>
        </div>
        <div className='col-span-1'>
            <h1 className='font-bold'>Created By</h1>
        </div>
        
        

    </div>
   
  </div>
  )
}

export default HistoryTable