"use client"
import { FlipWords } from '@/components/ui/flip-words'
import { UserButton } from '@clerk/nextjs'
import { Cog, History, Home, Receipt } from 'lucide-react'
import Image from 'next/image'
import { usePathname, useRouter } from 'next/navigation'

import React from 'react'

function SideNav() {
  const words=['Hey!','You','Found Me!']
  const path=usePathname()
  const p1='/dashboard'
   const p2='/dashboard/history'
   const p3='/dashboard/billing'
   const p4='/dashboard/setting'
  

 
  console.log(path)
  const router=useRouter()
  return (
    <div className='h-screen p-5 shadow-md flex flex-col justify-between'>
        <div className='flex flex-col justify-center bg-[#7fff00] rounded-full items-center'>
        <Image src={'/logo.png'} className= ' z-40 p-2 rounded-full cursor-pointer hover:animate-bounce transition-all duration-1000' alt='logo' width={120} height={50}></Image>
        <h1 className='absolute mt-20 text-xs'><FlipWords words={words}></FlipWords></h1>
        </div>
        <div>
            <ul className='flex flex-col gap-2'>
                <li onClick={()=>router.push('/dashboard')} className={`flex gap-2 items-center font-bold bg-white p-2 rounded-2xl text-[#7fff00] hover:text-white hover:bg-[#7fff00] cursor-pointer border-gray-200 border ${path==p1&&'bg-black'}`}><Home></Home>Home</li>
                <li className={`flex gap-2 items-center font-bold bg-white p-2 rounded-2xl text-[#7fff00] hover:text-white hover:bg-[#7fff00]  cursor-pointer border-gray-200 border ${path==p2&&'text-black'} `}><History></History>History</li>
                <li className={`flex gap-2 items-center font-bold bg-white p-2 rounded-2xl text-[#7fff00] hover:text-white hover:bg-[#7fff00]  cursor-pointer border-gray-200 border ${path==p3&&'bg-black text-white'}`}><Receipt></Receipt>Billing</li>
                <li className={`flex gap-2 items-center font-bold bg-white p-2 rounded-2xl text-[#7fff00] hover:text-white hover:bg-[#7fff00]  cursor-pointer border-gray-200 border ${path==p4&&'bg-black text-white'}`}><Cog></Cog>Setting</li>
            </ul>
        </div>
        <div className='flex justify-start'>
            <UserButton></UserButton>
        </div>
    </div>
  )
}

export default SideNav