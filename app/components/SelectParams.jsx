'use client'
import { useState, useEffect } from 'react'

const SelectParams = ({inputData}) => {

    const [dataKeys,setDataKeys] = useState([])
    const [selectedParamsCount, setSelectedParamsCount] = useState(0)
    const [selectedParams, setSelectedParams] = useState({})

    useEffect(() => {
        if(inputData.length === 0) return

        const keys = Object.keys(inputData[0])
        setDataKeys(keys)
        // set false for all keys initially in selectedParams
        const obj = {}
        keys.forEach((key) => {
            obj[key] = false
        })
        setSelectedParams(obj)
    }
    , [inputData])

  return (
    <div>
        <h1 className="text-3xl">Select Parameters to plot(At max 2)</h1>
        <div className="flex flex-col gap-4">
            {
                dataKeys.map((key) => {
                    return (
                        <div key={key}>
                            <input type="checkbox" name={key} id={key} value={selectedParams[key]} onChange={
                                (e) => {
                                    if(selectedParamsCount >= 2) return
                                    const obj = {...selectedParams}
                                    obj[key] = e.target.checked
                                    setSelectedParams(obj)
                                    setSelectedParamsCount((prev) => prev + 1)
                                }
                            } />
                            <label htmlFor={key}>{key}</label>
                        </div>
                    )
                })
            }
        </div>
    </div>
  )
}

export default SelectParams