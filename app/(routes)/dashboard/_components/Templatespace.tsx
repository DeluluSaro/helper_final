import Template from '@/app/(data)/Template'
import Image from 'next/image'
import { useRouter } from 'next/navigation'
import React, { useEffect, useState } from 'react'


export interface TEMPLATE{
    name:string,
    desc:string,
    icon:string,
    category:string,
    aiprompt:string,
    gibberish:string,
    form?:FORM[]
    
}

export interface FORM{
    label:string,
    field:string,
    name:string,
    required:boolean
}
function Templatespace({onSearchInput}:any) {
  const router =useRouter()
  const [templateList,setTemplateList]=useState(Template)
  useEffect(()=>{
 if(onSearchInput){
  const filter=Template.filter(item=>item.name.toLowerCase().includes(onSearchInput.toLowerCase()))
  setTemplateList(filter)
 }else{
  setTemplateList(Template)
 }
  },[onSearchInput])
  return (
    <div className='grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 mt-4 '>{templateList.map((item:TEMPLATE|any,index:number)=>(
            <div onClick={()=>router.push('/dashboard/content/'+item?.gibberish)} className='flex flex-col border p-5 bg-white shadow-md gap-3 hover:scale-105 cursor-pointer rounded-md hover:shadow-md hover:shadow-[#7fff00]   transition-all duration-700'>
            <Image src={item.icon} alt='img' width={50} height={50}></Image>
            <h1 className='font-bold'>{item.name}</h1>
            <p className='text-xs'>{item.desc}</p>
        </div>
    ))}</div>
  )
}

export default Templatespace