import React from 'react';
import { Pie } from 'react-chartjs-2';

const PieChart = ({ chartData }) => {

  const data = {
    labels: chartData.labels,
    datasets: [{
      data: chartData.data,
      backgroundColor: [
        '#FF6384',
        '#36A2EB',
        '#FFCE56'
      ],
      hoverBackgroundColor: [
        '#FF6384',
        '#36A2EB',
        '#FFCE56'
      ]
    }]
  };

  return (
    <>
      <Pie data={data} />
    </>
  )
}

export default PieChart;
