import React from 'react';
import tableStyle from '@/styles/TableStyle.module.css';

const TableTwo = () => {

  const tableData = data();

  return (
    <div>
      <table className={tableStyle.mainTable}>
        <thead>
          <tr>
            <th className={tableStyle.tableHead}>
              No
              </th>
            <th className={tableStyle.tableHead}>
              Ukuran (mm)
              </th>
            <th className={tableStyle.tableHead}>
              Persentase (%)
              </th>
          </tr>
        </thead>

        <tbody>
          {tableData.map(item => (
            <tr key={item.no}>
              <td>
                {item.no}
              </td>
              <td>
                {item.size}
              </td>
              <td>
                {item.percentage}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export function data() {
  return [
    {
      no: 1,
      size: '249-301',
      percentage: 8
    },
    {
      no: 2,
      size: '302-354',
      percentage: 42
    },
    {
      no: 3,
      size: '355-407',
      percentage: 25
    },
    {
      no: 4,
      size: '408-460',
      percentage: 17
    },
    {
      no: 5,
      size: '461-513',
      percentage: 17
    },
  ]
}

export default TableTwo
