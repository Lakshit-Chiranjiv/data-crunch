"use client"

import React from 'react'
import { useState } from 'react'
import DataInput from './DataInput'
const Home = () => {

    const [jsonFileData,setJsonFileData] = useState({})

  return (
    <div>
     
     <DataInput setJsonFileData={setJsonFileData}/>
     <button onClick={() =>{
        console.log(jsonFileData);
     }}>Check</button>

    </div>
  )
}

export default Home