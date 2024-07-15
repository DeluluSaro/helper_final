import React from 'react'
import SideNav from './_components/SideNav';
import TopBar from './_components/TopBar';

function DashLayout({
    children,
  }: Readonly<{
    children: React.ReactNode;
  }>) {
  return (
    <div>

        <div className='md:w-64 md:block hidden fixed'><SideNav></SideNav></div>
        
        <div className='ml-64 p-2'><TopBar></TopBar>{children}</div>
    </div>
  )
}

export default DashLayout