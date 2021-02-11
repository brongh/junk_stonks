import React from "react";
import { Line } from "@reactchartjs/react-chart.js";
import { useEffect, useState } from 'react'
import { axiosInstance } from "../../../api/axiosCalls";


const MultiAxisLine = (props) => {
  const [fundTrans, setFundTrans] = useState({})
  const [loaded, setLoaded] = useState(false)

  useEffect(() => {
    const getData = async () => {
      const res = await axiosInstance.get(
        `/funds_trans/${props.fund_id}/`
      );
      setFundTrans(res.data)

      setLoaded(true)
      }
      getData()
    },
    
   [props, loaded])
  const dateData = ['start']
  const targetData = []
  const fundedData = [0]


  if (loaded) {
    for (let i = 0; i < fundTrans.transactions_set.length; i++) {
      dateData.push(fundTrans.transactions_set[i].date_invested.toString())
    }
    for (let i = 0; i <= fundTrans.transactions_set.length; i++) {
      targetData.push(fundTrans.target_funds)
    }
    for (let i = 0; i < fundTrans.transactions_set.length; i++) {
      if (i === 0){
        fundedData.push(fundTrans.transactions_set[i].investment_sum)
      }
      else {
        fundedData.push(fundTrans.transactions_set[i].investment_sum + fundTrans.transactions_set[i - 1].investment_sum)
      }
    }
  }

  const data = {
    labels: dateData,
    datasets: [
      {
        label: "Target",
        data: targetData,
        fill: false,
        backgroundColor: "rgb(255, 99, 132)",
        borderColor: "rgba(255, 99, 132, 0.2)",
        yAxisID: "y-axis-1",
      },
      {
        label: "Raised",
        data: fundedData,
        fill: false,
        backgroundColor: "rgb(54, 162, 235)",
        borderColor: "rgba(54, 162, 235, 0.2)",
        yAxisID: "y-axis-1",
      },
    ],
  }

  const options = {
    scales: {
      yAxes: [
        {
          type: "linear",
          display: true,
          position: "left",
          id: "y-axis-1",
        },
      ],
    },
  };

  return (
  <>
    <Line data={data} options={options} />
  </>
  )
};

export default MultiAxisLine;
