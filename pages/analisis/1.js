import React from 'react';
import MainLayout from '../../components/MainLayout';
import { Pie } from 'react-chartjs-2';

const page1 = () => {

  const data = {
    labels: [
      'Red',
      'Blue',
      'Yellow'
    ],
    datasets: [{
      data: [300, 50, 100],
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

  const pieChart = () => (
    <div>
      <h2>Pie Example</h2>
      <Pie data={data}
        width={300}
        height={100}
        options={{ maintainAspectRatio: false }}
      />
    </div>
  )

  return (
    <>
      <MainLayout Child1={pieChart} />
    </>
  )
}

export default page1
