"use client"
import type { Metadata } from "next";
import { Button } from '@/components/ui/button';
import { FlipWords } from '@/components/ui/flip-words';
import { WavyBackground } from '@/components/ui/wavy-background'
import { useRouter } from 'next/navigation';
export default function Home() {
  const metadata: Metadata = {
    title: "Helper.ai",
    description: "Generated quality content easily",
  };
  const router=useRouter()
  const words = ["better", "perfect", "modern"];
  return (

    
   <WavyBackground className='flex flex-col gap-10'> 
    <h1 className='text-5xl font-bold text-gray-300'>Generate <FlipWords className='text-[#7fff00]' words={words}></FlipWords>content using AI</h1>
    
    <div className='flex justify-center '>
    <Button onClick={()=>router.push('/dashboard')} className='text-black font-bold bg-[#7fff00] p-5 hover:bg-black hover:text-[#7fff00]'>Let's Start</Button>
    </div>
   </WavyBackground>
  );
}
