"use client"
import React from 'react'
import HistoryTable from './_components/HistoryTable'
export interface HISTORY{
  id:number,
  formData:string,
  result:string,
  gibberish:string,
  createdBy:string,
  createdAt:string
}
function HistoryPage() {

  return (
    <div>

      {/* Header */}
      <div className='p-5 '>
        <h1 className='text-2xl font-bold'>History</h1>
        <p className='text-xs text-gray-300'>Previously generated contents</p>


      </div>

      {/* Table */}
      <HistoryTable>

      </HistoryTable>

    </div>
  )
}

export default HistoryPage