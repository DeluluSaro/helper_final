"use client"

import { Outfit } from "next/font/google";
import "./globals.css";
import { ClerkProvider } from "@clerk/nextjs";
import { TotalUsageContext } from "./(context)/TotalUsageContext";
import { useState } from "react";
import { UserSubscriptContext } from "./(context)/UserSubscriptionContext";

const inter = Outfit({ subsets: ["latin"] });



export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  const [totWords,setTotalWords]=useState<any>(0)
  const [subscription,setSubscription]=useState<boolean>(false)
  return (
    
 <ClerkProvider>
  <TotalUsageContext.Provider value={{totWords,setTotalWords}}>
    <UserSubscriptContext.Provider value={{subscription,setSubscription}}>
     <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
    </UserSubscriptContext.Provider>
    </TotalUsageContext.Provider>
 </ClerkProvider>
 
  );
}
