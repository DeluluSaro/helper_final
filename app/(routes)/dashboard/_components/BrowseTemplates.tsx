"use client";
import { Input } from "@/components/ui/input";
import { SparklesCore } from "@/components/ui/sparkles";
import { Search } from "lucide-react";
import React from "react";


export function BrowseTemplates({onSearch}:any) {
  return (
    <div className="h-[250px] w-full bg-black flex flex-col items-center justify-center overflow-hidden rounded-md">
      <h1 className="text-3xl font-bold text-center text-white relative z-20">
        Browse Templates Here
      </h1>
      <div className="w-[40rem] h-40 relative">
        {/* Gradients */}
        <div className="absolute inset-x-20 top-0 bg-gradient-to-r from-transparent via-[#FFFFE0] to-transparent h-[2px] w-3/4 blur-sm" />
        <div className="absolute inset-x-20 top-0 bg-gradient-to-r from-transparent via-[#FFE0B2] to-transparent h-px w-3/4" />
        <div className="absolute inset-x-60 top-0 bg-gradient-to-r from-transparent via-[#FF6333] to-transparent h-[5px] w-1/4 blur-sm" />
        <div className="absolute inset-x-60 top-0 bg-gradient-to-r from-transparent via-[#FF6333] to-transparent h-px w-1/4" />
        <div className="flex  items-center gap-3 absolute justify-center mt-10 ml-[170px] bg-transparent border p-1 rounded-full z-10">
          <Search className="text-orange-500"></Search>
          <Input onChange={(event)=>onSearch(event.target.value)} className="bg-transparent border-none rounded-full font-bold text-white"></Input>
        </div>
        {/* Core component */}
        <SparklesCore
          background="transparent"
          minSize={0.4}
          maxSize={1}
          particleDensity={1200}
          className="w-full h-full"
          particleColor="#ff1000"
        />

        {/* Radial Gradient to prevent sharp edges */}
        <div className="absolute inset-0 w-full h-full bg-black [mask-image:radial-gradient(350px_200px_at_top,transparent_20%,white)]"></div>
      </div>
    </div>
  );
}
