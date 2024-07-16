"use client"
import React, { useState } from 'react'
import { BrowseTemplates } from './_components/BrowseTemplates'
import Templatespace from './_components/Templatespace'


function Dashboard() {
  const [onSearchInput,setOnSearchInput]=useState<string>()
  
  return (
    <div className=''>

       {/* Browse Templates */}
<BrowseTemplates onSearch={(value:string)=>setOnSearchInput(value)}></BrowseTemplates>

       {/* Template card */}
<Templatespace onSearchInput={onSearchInput} ></Templatespace>

    </div>
  )
}

export default Dashboard