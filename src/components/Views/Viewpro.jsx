import './viewpro.scss'
import React, { useState, useEffect } from 'react'
import { DataGrid } from '@mui/x-data-grid'

const columns =[
    {field:'id',headerName:'Project ID'},
    {field:'name',headerName:'Project Name',width:300},
    {field:'desc',headerName:'Description',width:350},
    {field:'start',headerName:'Start Date',width:130},
    {field:'end',headerName:'End Date',width:130},
    // {field:'status',headerName:'Status',width:130},
    // {field:'action',headerName:'Action',width:130},
]


const Viewpro = () => {

const action=[
    {
        field:'action',
        headerName:'Action',
        width:130,
        renderCell:()=>{
            return(
                <div className='actionCell'>
                    <div className='deleteButton'>
                        <button type='submit'>Delete</button>
                    </div>
                </div>
            )
        }
    },
]

const status=[
    {
        field:'status',
        headerName:'Status',
        width:130,
        renderCell:()=>{
            return(
                <div className='statusCell'>
                    <select name='Status' className='selectBox'>
                        <option value=""></option>
                        <option value='Completed'>Completed</option>
                        <option value='In Progress'>In Progress</option>
                        <option value='InComplete'>InComplete</option>
                    </select>
                </div>
            )
        }
    }
]

const [table,setTable] = useState([])
useEffect(()=>{
    fetch('http://localhost:4000/users/',{
        method:'GET'
    })
    .then((users)=>users.json())
    .then((users)=>setTable(users))
},[])
console.log(table);
return (
    <div style={{ height: 700, width: '98%' }} className='tableformat'>
        <h3>Project Details</h3>
        <DataGrid
            rows={table}
            columns={columns.concat(action,status)}
            pageSize={12}
        />
    </div>
  )
}

export default Viewpro