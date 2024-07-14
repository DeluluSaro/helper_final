"use client"
import { Button } from '@/components/ui/button';
import { WavyBackground } from '@/components/ui/wavy-background'
import { useRouter } from 'next/navigation';
export default function Home() {

  const router=useRouter()
  return (

    
   <div>
     <div><WavyBackground></WavyBackground></div>
     <div className='flex flex-col justify-center gap-10 absolute  top-10 text-white justify-center m-[250px] ml-[450px] text-6xl font-bold mt-[-20]'><h1>Get Started</h1>
     <Button onClick={()=>router.push('/dashboard')}>Let's go</Button>
     </div>
   </div>
  );
}
