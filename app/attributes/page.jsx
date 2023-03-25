'use client'
import { useState, useEffect } from 'react'

const SelectParams = ({inputData, setSelectedAttributes}) => {

    const [dataKeys,setDataKeys] = useState([])
    const [selectedParamsCount, setSelectedParamsCount] = useState(0)
    const [selectedParams, setSelectedParams] = useState({})
    const [error, setError] = useState('')
    const [showError, setShowError] = useState(false)

    useEffect(() => {
        if(!inputData) return
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
                                    if(e.target.checked) {
                                        setSelectedParamsCount(selectedParamsCount + 1)
                                    } else {
                                        setSelectedParamsCount(selectedParamsCount - 1)
                                    }
                                    setSelectedParams({...selectedParams, [key]: e.target.checked})
                                }
                            } />
                            <label htmlFor={key}>{key}</label>
                        </div>
                    )
                })
            }
        </div>

        {
            showError && <p className='text-white bg-red-500 p-2 rounded my-2'>{error}</p>
        }

        <button className='px-4 py-2 rounded bg-green-400' onClick={() => {
            if(selectedParamsCount < 2 || selectedParamsCount > 2) {
                setError('Select exactly 2 parameters')
                setShowError(true)
                return
            }
            setShowError(false)
            const attributesSelected = []
            for(let key in selectedParams) {
                if(selectedParams[key]) {
                    attributesSelected.push(key)
                }
            }
            setSelectedAttributes(attributesSelected)

        }}>Crunch out a plot🚀</button>
    </div>
  )
}

export default SelectParams