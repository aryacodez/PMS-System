import './chart.scss'
import React, { useState, useEffect } from 'react'
import { DataGrid } from '@mui/x-data-grid'


import { LinearProgress } from '@mui/material';

const columns = [
  { field: 'name', headerName: 'Project Title', width: 450 },
  { field: 'diffdates', headerName: 'Days Left', width: 100 },   
];



const Chart = () => {
  const [table,setTable] = useState([])
  useEffect(()=>{
      fetch('http://localhost:4000/users/',{
          method:'GET'
      })
      .then((users)=>users.json())
      .then((users)=>setTable(users))
  },[])
  console.log(table);

  const [pageSize, setPageSize] = React.useState(25);


  return (
    <div style={{ height: 400, width: '60%' }} className='chart'>
        <h3>Projects Overview</h3>
        <DataGrid 
            pageSize={pageSize}
            rowHeight={45}
            rows={table}
            columns={columns}
            onPageSizeChange={(newPage) => setPageSize(newPage)}
            pagination
        />
    </div>
    
  )
}

export default Chart;