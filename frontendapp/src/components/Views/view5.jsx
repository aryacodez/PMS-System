import React, { useState, useEffect } from 'react'
import './view4.scss'
import 'bootstrap/dist/css/bootstrap.min.css';
import "bootstrap-icons/font/bootstrap-icons.css";

const View5 = () => {
    const [table, setTable] = useState([]);
    useEffect(() => {
        fetch('/api/v1/getproject', {
            method: 'GET'
        }).then(res => res.json())
            .then(res => setTable(res.item))
    }, [])

    console.log(table);

    const handleDelete = (id)=>{
        const updateTable = table.filter((project)=>project._id!==id)
        setTable(updateTable)

        fetch('/api/v1/remove-project/'+id,{
            method:"DELETE"
        }).then(res => res.json())        
        .catch(e => console.error(e));
    }

    
    return (
        <>
            <div className="container bg-white rounded shadow mx-xl-5 me-xl-5">
                <p className="h2 pt-4 px-3 pb-2">View Projects</p>
                <table className='table table-lg table-striped table-hover h-100 w-100'>
                    <thead>
                        <tr>
                            <th scope='col'>Project ID</th>
                            <th scope='col'>Project Name</th>
                            <th scope='col'>Description</th>
                            <th scope='col'>Start Date</th>
                            <th scope='col'>End Date</th>
                            <th scope='col'>Status</th>
                            <th scope='col'>Action</th>
                        </tr>
                    </thead>
                    <tbody>                        
                        {table.length > 0 ? (
                            table.map((row, i) => (
                                <tr key={i}>
                                    <td>{row.projectID}</td>
                                    <td>{row.projectName}</td>
                                    <td>{row.Description}</td>
                                    <td>{row.sDate}</td>
                                    <td>{row.eDate}</td>
                                    <td>
                                        <select className="form-select form-select-sm">
                                            <option value='In Process'>In Process</option>
                                            <option value='Completed'>Completed</option>
                                            <option value='Not Started'>Not Started</option>
                                        </select>
                                    </td>
                                    <td>
                                        <button type="submit" className="btn btn-danger" onClick={() => handleDelete(row._id)}>Delete</button>
                                    </td>
                                </tr>
                            ))
                        ) : (
                            <tr>
                                <td colSpan={9}>Loading...</td>
                            </tr>
                        )}
                    </tbody>
                </table>
            </div>
        </>
    )
}

export default View5