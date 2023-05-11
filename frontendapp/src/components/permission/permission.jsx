import React, { useState, useEffect } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import "bootstrap-icons/font/bootstrap-icons.css";

const Permission = () => {
    const [table, setTable] = useState([]);
    useEffect(() => {
        fetch('/api/v1/getalluser', {
            method: 'GET'
        }).then(res => res.json())
            .then(res => setTable(res.user))
    }, [])

    console.log(table);
    const handleAdmin=(id)=>{
      const updateTable = table.filter((user)=>user._id!==id)
      setTable(updateTable)
      fetch('/api/v1/updateuserrole/'+id,{
        method:"PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          role:'admin'
        })
      }).then(res => res.json())
      .then(()=>window.location.reload())
      .catch(err =>console.error(err))
    }
    const handleUser=(id)=>{
      const updateTable = table.filter((user)=>user._id!==id)
      setTable(updateTable)
      fetch('/api/v1/updateuserrole/'+id,{
        method:"PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          role:'user'
        })
      }).then(res => res.json())
      .then(()=>window.location.reload())
      .catch(err =>console.error(err))
    }
    
    return (
        <>
            <div className="container bg-white rounded shadow mx-xl-5 me-xl-5">
                <p className="h2 pt-4 px-3 pb-2">Users</p>
                <table className='table table-lg table-striped table-hover h-100 w-100'>
                    <thead>
                        <tr>
                            <th scope='col'>User's ID</th>
                            <th scope='col'>Name</th>
                            <th scope='col'>Email</th>
                            <th scope='col'>Mobile Number</th>
                            <th scope='col'>Role</th>
                            <th scope='col'>Specify Role</th>
                        </tr>
                    </thead>
                    <tbody>
                        {table.length > 0 ? (
                            table.map((row, i) => (
                                <tr key={i}>
                                    <td>{row.uniqueid}</td>
                                    <td>{row.name}</td>
                                    <td>{row.email}</td>
                                    <td>{row.mobilenumber}</td>
                                    <td>{row.role}</td>                                    
                                    <td>
                                        {/* <button type="submit" className="btn btn-danger">Delete</button>                                        <button type="submit" className="btn btn-danger">Delete</button> */}
                                        <button type="submit" className="btn" onClick={() => handleAdmin(row._id)} style={{backgroundColor:"#5cd6d6"}}>Admin</button> 
                                        <button type="submit" className="btn ms-2" onClick={() => handleUser(row._id)} style={{backgroundColor:"#33ffcc"}}>User</button>            
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

export default Permission