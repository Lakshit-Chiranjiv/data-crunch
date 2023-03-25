"use client"

import React from 'react'
import { useState } from 'react'
import DataInput from './DataInput'
import Chart from './Chart'
const Home = () => {

    const [jsonFileData,setJsonFileData] = useState([])

  return (
    <div className='p-8'>
     
     <DataInput setJsonFileData={setJsonFileData} />
     <button onClick={() =>{
        console.log(jsonFileData);
     }}>Check</button>

     <Chart inputData={jsonFileData}/>

    </div>
  )
}

export default Home