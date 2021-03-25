import React from 'react';
import tableStyle from '@/styles/TableStyle.module.css';

const TableOne = () => {
  const tableData = data();

  return (
    <div style={{ margin: 'auto' }}>
      <table className={tableStyle.mainTable}>
        <thead>
          <tr>
            <th className={tableStyle.tableHead}>
              No
              </th>
            <th className={tableStyle.tableHead}>
              Umur Benih (Hari)
              </th>
            <th className={tableStyle.tableHead}>
              Panjang (cm)
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
                {item.age}
              </td>
              <td>
                {item.size}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

function data() {
  return [
    {
      no: 1,
      age: 30,
      size: '1-3'
    },
    {
      no: 2,
      age: 60,
      size: '3-5'
    },
    {
      no: 3,
      age: 90,
      size: '5-8'
    },
    {
      no: 4,
      age: 120,
      size: '8-12'
    },
  ]
}

export default TableOne;
