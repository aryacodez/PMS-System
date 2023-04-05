import './viewcleg.scss'
import React, { useState, useEffect } from 'react'
import { DataGrid,GridToolbar } from '@mui/x-data-grid'

const columns = [
    { field: 'id', headerName: 'Member ID' },
    { field: 'mname', headerName: 'Member Name', width: 200 },
    { field: 'desg', headerName: 'Designation', width: 150 },
    { field: 'num', headerName: 'Mobile Number', width: 130 },
    { field: 'email', headerName: 'Email', width: 350 },
    { field: 'projname', headerName: 'Project Name', width: 300 },
]



const ViewCleg = () => {

    const action = [
        {
            field: 'action',
            headerName: 'Action',
            width: 100,
            renderCell: (id) => {
                return (
                    <div className='actionCell'>
                        <div className='deleteButton'>
                            <button type='submit' onClick={()=>handleDelete(id)}>Delete</button>
                        </div>
                    </div>
                )
            }
        }
    ]


    const [table, setTable] = useState([]);
    
    useEffect(() => {
        fetch('http://localhost:4000/colleague', {
            method: 'GET'
        })
            .then((colleague) => colleague.json())
            .then((colleague) => setTable(colleague))
    }, [])
    
    console.log(table)


    const [colleague, setColleague] = useState(table);
    let handleDelete = (member) => {

        setColleague(colleague.filter((colleague) => colleague.id !== member.id))
        fetch('http://localhost:4000/colleague/'+member.id, {
            method: 'DELETE'
        }).then(() => {
            window.location.reload(true)
        })
    }


    return (

        <div style={{ height: 600, width: '98%' }} className='tableformat'>
            <h3 style={{color:'#494e56'}}>Member Details</h3>
            <DataGrid
                rows={table}
                columns={columns.concat(action)} 
                pageSize={15}
                components={{
                    Toolbar: GridToolbar,
                }}
            />
        </div>
    )
}

export default ViewCleg
