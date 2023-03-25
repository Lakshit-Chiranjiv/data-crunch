"use client"

import React from 'react'
import { useState } from 'react'
import { useRouter } from 'next/navigation';
import DataInput from './DataInput'
import Chart from './Chart'
import SelectParams from './SelectParams'
const Home = () => {

  const router = useRouter()

    const [jsonFileData,setJsonFileData] = useState([])
    const [selectedAttributes,setSelectedAttributes] = useState([])

  return (
    <div className='p-8 flex flex-col gap-4 items-center'>

      <h1 className='text-3xl font-bold'>Visualize your data</h1>

      <button className='py-4 px-6 bg-green-600 text-white rounded' onClick={() => {
        router.push('/datainput')
      }}>Enter yout Data</button>
     
      <DataInput setJsonFileData={setJsonFileData} />

      <SelectParams inputData={jsonFileData} setSelectedAttributes={setSelectedAttributes}/>

      <div className='my-4'>
        <Chart inputData={jsonFileData} selectedAttributes={selectedAttributes}/>
      </div>

    </div>
  )
}

export default Home