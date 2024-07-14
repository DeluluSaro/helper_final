import React from 'react'
import SideNav from './_components/SideNav';

function DashLayout({
    children,
  }: Readonly<{
    children: React.ReactNode;
  }>) {
  return (
    <div>

        <div className='md:w-64 md:block hidden fixed'><SideNav></SideNav></div>
        <div className='md:ml-64'>{children}</div>
    </div>
  )
}

export default DashLayout