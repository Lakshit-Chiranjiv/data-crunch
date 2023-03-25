import React from 'react'
import { Line } from "react-chartjs-2";
import { Chart as ChartJS } from "chart.js/auto";

const Chart = ({inputData}) => {

    inputData = inputData.slice(0,10)
    
    const modifiedInputData = inputData.map((item) =>{
        return {
            monthlySalary: item.monthly_salary,
            fico: item.fico,
        }
    })

  return (
    <div className='max-w-[500px]'>
        <h1 className='text-2xl'>Chart</h1>
        <Line data={{
            labels: modifiedInputData.map((item) => item.monthlySalary),
            datasets: [
                {
                    label: "FICO",
                    data: modifiedInputData.map((item) => item.fico),
                    fill: false,
                    backgroundColor: "rgb(255, 99, 132)",
                    borderColor: "rgba(255, 99, 132, 0.2)",
                },
            ],
        }}
        options={{
            scales: {
                y: {
                    beginAtZero: true,
                },
            },

        }} />


        {/* <Line data={{
            labels: ["Red", "Blue", "Yellow", "Green", "Purple", "Orange"],
            datasets: [
              {
                label: "# of Votes",
                data: [12, 19, 3, 5, 2, 3],
                fill: false,
                backgroundColor: "rgb(255, 99, 132)",
                borderColor: "rgba(255, 99, 132, 0.2)",
              },
              {
                label: "# of No Votes",
                data: [5, 2, 20, 5, 1, 4],
                fill: false,
                backgroundColor: "rgb(54, 162, 235)",
                borderColor: "rgba(54, 162, 235, 0.2)",
              },
            ],
          }}
          options={{
            scales: {
              y: {
                beginAtZero: true,
              },
            },
          }} /> */}
    </div>
  )
}

export default Chart