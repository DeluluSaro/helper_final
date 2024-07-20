"use client"
import { Button } from '@/components/ui/button'
import { Meteors } from '@/components/ui/meteors'
import { Loader2Icon, TicketCheck } from 'lucide-react'
import React,{useState} from 'react'
import axio from 'axios'
import { error } from 'console'
import { db } from '@/Backend/db'
import { UserSubscription } from '@/Backend/schema'
import { useUser } from '@clerk/nextjs'
import moment from 'moment'
function Billing() {
  const [loading,setLoading]=useState(false)
  const CreateSubscription=()=>{
    setLoading(true)
    axio.post('/api/create-subscription',{})
    .then(resp=>{
      console.log(resp.data)
      Onpayment(resp.data.id)
    },(error)=>{
      setLoading(false)
    })

  }
  const  {user}=useUser()
  const Onpayment=(subId:string)=>{
    const options={
      "key":process.env.NEXT_PUBLIC_RAZORPAY_KEY_ID,
      "subscription_id":subId,
      "name":"Helper.ai",
      description:'Monthly Subscription',
      handler:async(resp:any)=>{
        console.log(resp)
        if(resp){
          saveSubscription(resp?.razorpay_payment_id)
        }
        setLoading(false)
      }
    }
    //@ts-ignore
const rzrpy=new window.Razorpay(options);
rzrpy.open()
  }

  const saveSubscription=async(paymentId:string)=>{

    const result=await db.insert(UserSubscription).values({
      userName:user?.fullName,
      email:user?.primaryEmailAddress?.emailAddress,
      paymentId:paymentId,
      joinData:moment().format('DD/MM/yyyy'),
      active:true
    })
    console.log(result)
    if(result){
      window.location.reload()
    }
  
  }
  return (
    <div>
      <script src="https://checkout.razorpay.com/v1/checkout.js"></script>
      <h1 className='text-center mt-10 font-bold text-2xl'>Upgrade With Monthly Plan</h1>
      <div className=' flex gap-10 justify-center mt-10  '>
        <div className='shadow-lg rounded-lg bg-slate-300'>
          <h1 className='p-7 font-bold px-24 '>Free Tier</h1>

          <div className='flex gap-5 justify-center '>
            <p className='flex '><TicketCheck></TicketCheck>10,000 words<span>/month</span></p>
          </div>
          <div className='flex gap-5 justify-center mt-5'>
            <p className='flex '><TicketCheck></TicketCheck>Limited Template Usage</p>
          </div>
          <div className='flex gap-5 justify-center mt-5'>
            <p className='flex '><TicketCheck></TicketCheck>View History for 1 month</p>
          </div>
        </div>
        <div className="">
      <div className=" w-full relative max-w-xs">
        <div className="absolute inset-0 h-full w-full bg-gradient-to-r from-blue-500 to-teal-500 transform scale-[0.80] bg-red-500 rounded-full blur-3xl" />
        <div className="relative shadow-xl text-center items-center bg-gray-900 border border-gray-800  px-4 py-8 h-full overflow-hidden rounded-2xl flex flex-col justify-end ">
          
 
          <h1 className="font-bold text-xl text-white mb-4 relative z-50 text-center">
            Monthly
          </h1>
          <h1 className='text-3xl font-bold text-white'>₹2<span className='text-xs'>/month</span>
          </h1>
 
          <p className=" flex items-center gap-2 font-normal text-base text-slate-500 mb-4 relative z-50">
          <TicketCheck></TicketCheck>1,00,000 <span className='text-xs'>per month</span>
          </p>
          <p className=" flex items-center gap-2 font-normal text-base text-slate-500 mb-4 relative z-50">
          <TicketCheck></TicketCheck>Full Template Access
          </p>
          <p className=" flex items-center gap-2 font-normal text-base text-slate-500 mb-4 relative z-50">
          <TicketCheck></TicketCheck>1Yr of History can be seen
          </p>
 
         <Button disabled={loading} onClick={()=>CreateSubscription()} variant={'outline'} className='hover:bg-black hover:text-white'>{loading?<Loader2Icon className='animate-spin'></Loader2Icon>:<h1>Get Started</h1>}</Button>
 
          {/* Meaty part - Meteor effect */}
          <Meteors number={50} />
        </div>
      </div>
    </div>
      </div>
    </div>
  )
}

export default Billing