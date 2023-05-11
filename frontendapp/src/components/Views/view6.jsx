import React, { useState, useEffect } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import "bootstrap-icons/font/bootstrap-icons.css";

const View6 = () => {
    const [table, setTable] = useState([]);
    useEffect(() => {
        fetch('/api/v1/getmember', {
            method: 'GET'
        }).then(res => res.json())
            .then(res => setTable(res.coll))
    }, [])

    console.log(table);

    const handleDelete = (id)=>{
        const updateTable = table.filter((member)=>member._id!==id)
        setTable(updateTable)

        fetch('/api/v1/removemember/'+id,{
            method:"DELETE"
        }).then(res => res.json())        
        .catch(e => console.error(e));
    }

    
    return (
        <>
            <div className="container bg-white rounded shadow mx-xl-5 me-xl-5">
                <p className="h2 pt-4 px-3 pb-2">View Members</p>
                <table className='table table-lg table-striped table-hover h-100 w-100'>
                    <thead>
                        <tr>
                            <th scope='col'>Member ID</th>
                            <th scope='col'>Member Name</th>
                            <th scope='col'>Designation</th>
                            <th scope='col'>Mobile Number</th>
                            <th scope='col'>Email Id</th>
                            <th scope='col'>Project</th>
                            <th scope='col'>Action</th>
                        </tr>
                    </thead>
                    <tbody>                        
                        {table.length > 0 ? (
                            table.map((row, i) => (
                                <tr key={i}>
                                    <td>{row.memberID}</td>
                                    <td>{row.memberName}</td>
                                    <td>{row.Designation}</td>
                                    <td>{row.mobileNumber}</td>
                                    <td>{row.emailID}</td>
                                    <td>{row.project}</td>                                    
                                    <td>
                                        <button type="submit" className="btn btn-danger" onClick={() => handleDelete(row._id)}>Delete</button>
                                    </td>
                                </tr>
                            ))
                        ) : (
                            <tr>
                                <td colSpan={8}>Loading...</td>
                            </tr>
                        )}
                    </tbody>
                </table>
            </div>
        </>
    )
}

export default View6