"use client"

import React from 'react'
import { useState } from 'react'
import DataInput from './DataInput'
import Chart from './Chart'
import SelectParams from './SelectParams'
const Home = () => {

    const [jsonFileData,setJsonFileData] = useState([])
    const [selectedAttributes,setSelectedAttributes] = useState([])

  return (
    <div className='p-8 flex flex-col gap-4'>
     
      <DataInput setJsonFileData={setJsonFileData} />
      <button onClick={() =>{
          console.log(jsonFileData);
      }}>Check</button>

      <SelectParams inputData={jsonFileData} setSelectedAttributes={setSelectedAttributes}/>


      <Chart inputData={jsonFileData} selectedAttributes={selectedAttributes}/>

    </div>
  )
}

export default Home