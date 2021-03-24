import React from 'react';
import { Bar } from 'react-chartjs-2';

const BarChart = ({ charData }) => {
  const data = {
    labels: charData.labels,
    datasets: [
      {
        label: charData.label,
        backgroundColor: '#408CFF',
        borderColor: '#408CFF',
        borderWidth: 1,
        hoverBackgroundColor: '#408CFF',
        hoverBorderColor: '#408CFF',
        data: charData.data
      }
    ]
  };

  return (
    <div>
      <Bar
        data={data}
        width={280}
        height={200}
        options={{
          maintainAspectRatio: false
        }}
      />
    </div>
  )
}

export default BarChart
