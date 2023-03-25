'use client'
import React from 'react'
import { Line } from "react-chartjs-2";
import { Chart as ChartJS } from "chart.js/auto";
import { useState, useEffect } from 'react'

const Chart = ({inputData, selectedAttributes}) => {

    const [modifiedInputData,setModifiedInputData] = useState([])
    const [modifiedObjKeys,setModifiedObjKeys] = useState([])

    useEffect(() => {

        inputData = inputData.slice(0,10)

        if(inputData.length === 0) return
    
        const modifiedData = inputData.map((item) =>{
            let keys = Object.keys(item)
            keys = selectedAttributes
            const obj = {
                [keys[0]]: item[keys[0]],
                [keys[1]]: item[keys[1]],
            }
            
            return obj
        })

        setModifiedInputData(modifiedData)
    
        const keys = Object.keys(modifiedData[0])
        setModifiedObjKeys(keys)
    }, [selectedAttributes])


  return (
    <div className='max-w-[500px]'>
        <h1 className='text-2xl'>Chart</h1>
        <Line data={{
            labels: modifiedInputData.map((item) => item[modifiedObjKeys[0]]),
            datasets: [
                {
                    label: modifiedObjKeys[1],
                    data: modifiedInputData.map((item) => item[modifiedObjKeys[1]]),
                    backgroundColor: "rgba(255, 99, 132, 0.2)",
                    borderColor: "rgba(255, 99, 132, 1)",
                    borderWidth: 1,
                    pointRadius: 0,
                    fill: false,
                },
            ],
        }}
        options={{
            scales: {
                y: {
                    beginAtZero: true,
                },
            },
        }}
        />

    </div>
  )
}

export default Chart