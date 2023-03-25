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
    <div className='p-8'>
     
     <DataInput setJsonFileData={setJsonFileData} />
     <button onClick={() =>{
        console.log(jsonFileData);
     }}>Check</button>

     <Chart inputData={jsonFileData} selectedAttributes={selectedAttributes}/>

     <SelectParams inputData={jsonFileData} setSelectedAttributes={setSelectedAttributes}/>

    </div>
  )
}

export default Home