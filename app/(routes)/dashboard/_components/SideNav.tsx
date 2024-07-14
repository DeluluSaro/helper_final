import { UserButton } from '@clerk/nextjs'
import { Cog, History, Home, Receipt } from 'lucide-react'
import Image from 'next/image'
import React from 'react'

function SideNav() {
  return (
    <div className='h-screen p-5 shadow-md flex flex-col justify-between'>
        <div className='flex flex-col justify-center bg-orange-500 rounded-full items-center'>
        <Image src={'/logo.png'} className= ' z-40 p-2 rounded-full cursor-pointer hover:animate-bounce transition-all duration-1000' alt='logo' width={120} height={50}></Image>
        <h1 className='absolute mt-20'>Help!</h1>
        </div>
        <div>
            <ul className='flex flex-col gap-2'>
                <li className='flex gap-2 items-center font-bold bg-white p-2 rounded-2xl text-orange-400 hover:text-white hover:bg-orange-400 cursor-pointer border-gray-200 border'><Home></Home>Home</li>
                <li className='flex gap-2 items-center font-bold bg-white p-2 rounded-2xl text-orange-400 hover:text-white hover:bg-orange-400  cursor-pointer border-gray-200 border'><History></History>History</li>
                <li className='flex gap-2 items-center font-bold bg-white p-2 rounded-2xl text-orange-400 hover:text-white hover:bg-orange-400  cursor-pointer border-gray-200 border'><Receipt></Receipt>Billing</li>
                <li className='flex gap-2 items-center font-bold bg-white p-2 rounded-2xl text-orange-400 hover:text-white hover:bg-orange-400  cursor-pointer border-gray-200 border'><Cog></Cog>Setting</li>
            </ul>
        </div>
        <div className='flex justify-start'>
            <UserButton></UserButton>
        </div>
    </div>
  )
}

export default SideNav