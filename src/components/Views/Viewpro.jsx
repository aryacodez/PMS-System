import './viewpro.scss'
import React, { useState, useEffect } from 'react'
import { DataGrid,GridToolbar  } from '@mui/x-data-grid'

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

//action to perfrom: DELETE SINGLE ROW FROM TABLE WHEN CLICKED
const action=[
    {
        field:'action',
        headerName:'Action',
        width:130,
        renderCell:(id)=>{
            return(
                <div className='actionCell'>
                    <div className='deleteButton'>
                        <button type='submit' onClick={()=>handleDelete(id)}>Delete</button>
                    </div>
                </div>
            )
        }
    },
]


// const [complete,setComplete]=useState(0);
// const [inprogress,setInProgress] = useState(0);
// const [incomplete,setIncomplete] = useState(0);
// const [isPending,setisPending]=useState(false);













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
                        <option value='complete'>Completed</option>
                        <option value='inprogress'>In Progress</option>
                        <option value='incomplete'>In Complete</option>
                    </select>
                </div>
            )
        }
    }
]

//set data into table from REST API
const [table,setTable] = useState([])
useEffect(()=>{
    fetch('http://localhost:4000/users/',{
        method:'GET'
    })
    .then((users)=>users.json())
    .then((users)=>setTable(users))
},[])
console.log(table);



//controller for delete button to delete record from table
const [user,setUser]=useState(table);
let handleDelete=(project)=>{

    setUser(user.filter((user) => user.id !== project.id));
    // console.log(clickedUser.id);    

    fetch('http://localhost:4000/users/'+project.id,{
        method:'DELETE'
    }).then(()=>{
        window.location.reload(true);
    })
};

return (
    <div style={{ height: 600, width: '98%' }} className='tableformat'>
        <h3>Project Details</h3>
        <DataGrid
            rows={table}
            columns={columns.concat(action,status)}
            pageSize={15}
            components={{
                Toolbar: GridToolbar,
            }}
        />
    </div>
  )
}

export default Viewpro