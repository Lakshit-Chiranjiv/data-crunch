'use client'
import { useState, useEffect } from 'react'

const SelectParams = ({inputData}) => {

    const [dataKeys,setDataKeys] = useState([])

    useEffect(() => {
        if(inputData.length === 0) return

        const keys = Object.keys(inputData[0])
        setDataKeys(keys)
    }
    , [inputData])

  return (
    <div>
        <h1 className="text-3xl">Select Parameters to plot</h1>
        <div className="flex flex-col gap-4">

        </div>
    </div>
  )
}

export default SelectParams