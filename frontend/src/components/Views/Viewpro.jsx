import './viewpro.scss'
import React, { useState, useEffect } from 'react'
import { DataGrid,GridToolbar  } from '@mui/x-data-grid'

const columns =[
    {field:'id',headerName:'Project ID'},
    {field:'name',headerName:'Project Name',width:300},
    {field:'desc',headerName:'Description',width:350},
    {field:'start',headerName:'Start Date',width:130},
    {field:'end',headerName:'End Date',width:130},
    // {field:'status',headerName:'Final Status',width:130},
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




const [value,setValue]=useState("");






const status=[
    {
        field:'status',
        headerName:'Status',
        width:130,
        renderCell:(id)=>{
            return(
                <div className='statusCell'>
                    <select name='Status' className='selectBox' onChange={(e)=>{
                        if(e.target.value==null){
                            console.log('empty')
                        }else{
                            const ids=id.id
                            console.log(ids)
                            setValue(e.target.value)
                            console.log(e.target.value)
                            if(e.target.value==='completed'){
                                fetch('http://localhost:4000/users/'+ids,{
                                    method:'PATCH',
                                    headers: {'Content-Type': 'application/json'},
                                    body:JSON.stringify({
                                        status:"completed"
                                    })
                                }).then(()=>{
                                    console.log("Status Updated")                                    
                                });                                
                            }
                            else if(e.target.value==='inprogress'){
                                fetch('http://localhost:4000/users/'+ids,{
                                    method:'PATCH',
                                    headers: {'Content-Type': 'application/json'},
                                    body:JSON.stringify({
                                        status:"inprogress"
                                    })
                                }).then(()=>{
                                    console.log("Status Updated")                                    
                                });                                
                            }
                            else if(e.target.value==='incomplete'){
                                fetch('http://localhost:4000/users/'+ids,{
                                    method:'PATCH',
                                    headers: {'Content-Type': 'application/json'},
                                    body:JSON.stringify({
                                        status:"incomplete"
                                    })
                                }).then(()=>{
                                    console.log("Status Updated")                                    
                                });                                
                            }                                                       
                        }
                    }}
                    >
                        <option value=''></option>
                        <option value='completed'>Completed</option>
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
// console.log(table[0].status)


//controller for delete button to delete record from table
const [user,setUser]=useState(table);
let handleDelete=(project)=>{

    setUser(user.filter((user) => user.id !== project.id));
    // console.log(user.id);    

    fetch('http://localhost:4000/users/'+project.id,{
        method:'DELETE'
    }).then(()=>{
        window.location.reload(true);
    })
};






return (
    <div style={{ height: 600, width: '98%' }} className='tableformat'>
        <h3 style={{color:'#494e56'}}>Project Details</h3>
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