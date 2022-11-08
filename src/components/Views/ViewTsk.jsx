import React , {useState,useEffect} from 'react'
import './viewtsk.scss'
import { DataGrid, GridToolbar } from '@mui/x-data-grid'

const columns = [
    { field: 'id', headerName: 'Task ID' },
    { field: 'name', headerName: 'Task', width: 200 },
    { field: 'proname', headerName: 'Project Name', width: 150 },
    { field: 'start', headerName: 'Start Date', width: 130 },
    { field: 'end', headerName: 'End Date', width: 350 },
    //{ field: 'files', headerName: 'File', width: 300 },
]


const ViewTsk = () => {

    // const [table, setTable] = useState([]);
    // const [projname, setProjname] = useState("");

    // useEffect(() => {
    //     fetch('http://localhost:4000/tasks', {
    //         method: 'GET'
    //     })
    //         .then((task) => task.json())
    //         .then((task) => setTable(task))
    // }, [])
    
    // const tab = table;
    // console.log(tab);

    // let handleSelect = (e) => {
    //     setProjname(e.target.value)
    //     console.log(e.target.value)
    // }

    // return (
    //     <div>
    //         <select onChange={handleSelect} className='sel'>
    //             <option value=''></option><br></br>
    //             {tab.map((project) => <option value={project.proname}>{project.proname}</option>)}
                
    //         </select>
    //     </div>
    // )


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


    const getFile = [
        {
            field: 'Download',
            headerName: 'Download File',
            width: 200,
            renderCell: () => {
                return (
                    <div className='actionCell'>
                        <div className='deleteButton'>
                            <button type='submit' disabled>Download</button>
                        </div>
                    </div>
                )
            }
        }
    ]

    const [table, setTable] = useState([]);
    
    useEffect(() => {
        fetch('http://localhost:4000/tasks', {
            method: 'GET'
        })
            .then((task) => task.json())
            .then((task) => setTable(task))
    }, [])
    
    console.log(table)


    const [job, setJob] = useState(table);
    let handleDelete = (work) => {

        setJob(job.filter((job) => job.id !== work.id))
        fetch('http://localhost:4000/tasks/'+work.id, {
            method: 'DELETE'
        }).then(() => {
            window.location.reload(true)
        })
    }

    return (
        <div style={{ height: 600, width: '98%' }} className='tableformat'>
            <h3 style={{color:'#494e56'}}>Tasks Details</h3>
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

export default ViewTsk
