"use client"

import { Outfit } from "next/font/google";
import "./globals.css";
import { ClerkProvider } from "@clerk/nextjs";
import { TotalUsageContext } from "./(context)/TotalUsageContext";
import { useState } from "react";

const inter = Outfit({ subsets: ["latin"] });



export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  const [totWords,setTotalWords]=useState<any>(0)
  return (
    
 <ClerkProvider>
  <TotalUsageContext.Provider value={{totWords,setTotalWords}}>
     <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
    </TotalUsageContext.Provider>
 </ClerkProvider>
 
  );
}
