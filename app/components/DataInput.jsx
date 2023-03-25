"use client" 
import { useState } from "react"
import { parse } from "papaparse"


const DataInput = () => {

  const [inputFile,setInputFile] = useState(null)
  
  return (
    <div className="flex flex-col gap-4">
        <h1 className="text-3xl">Input Data File (CSV)</h1>
        <input type="file" id="file" accept=".csv" className="bg-blue-400 p-4 rounded" onChange={(e) =>{
          setInputFile(e.target.files[0]);//input file stored in state

        }}/>

        <br />
        <button className="bg-green-400 rounded px-4 py-2" onClick={() =>{
          console.log(inputFile)
          parse(inputFile, {
              complete: function(results) {
                console.log("Finished:", results.data);
              }}
            )
        }}>Crunch🚀</button>
    </div>
  )
}

export default DataInput