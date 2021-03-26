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
    <div>
      <h2>Pie Example</h2>
      <Pie data={data} />
    </div>
  )
}

export default PieChart;
