import './viewclt.scss'
import React, { useState, useEffect } from 'react'
import { DataGrid,GridToolbar } from '@mui/x-data-grid'


const columns = [
    { field: 'id', headerName: 'Client ID' },
    { field: 'cname', headerName: 'Client Name', width: 250 },
    { field: 'comp', headerName: 'Company Name', width: 300 },
    { field: 'num', headerName: 'Mobile Number', width: 250 },
    { field: 'email', headerName: 'Email', width: 400 },
]

const Viewclt = () => {

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
        fetch('http://localhost:4000/client', {
            method: 'GET'
        })
            .then((client) => client.json())
            .then((client) => setTable(client))
    }, [])
    
    console.log(table)


    const [client, setClient] = useState(table);
    let handleDelete = (parti) => {

        setClient(client.filter((client) => client.id !== parti.id))
        fetch('http://localhost:4000/client/'+parti.id, {
            method: 'DELETE'
        }).then(() => {
            window.location.reload(true)
        })
    }

    return (
        <div style={{ height: 600, width: '98%' }} className='tableformat'>
            <h3 style={{color:'#494e56'}}>Client Details</h3>
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

export default Viewclt
