import React, { useState, useEffect } from 'react'
import './view4.scss'
import 'bootstrap/dist/css/bootstrap.min.css';
import "bootstrap-icons/font/bootstrap-icons.css";

const View4 = () => {
    const [table, setTable] = useState([]);
    useEffect(() => {
        fetch('/api/v1/getclient', {
            method: 'GET'
        }).then(res => res.json())
            .then(res => setTable(res.info))
    }, [])

    //console.log(table);

    return (
        <>
            <div className="container bg-white rounded shadow mx-xl-5 me-xl-5">
                <p className="h2 pt-4 px-3 pb-2">View Clients</p>
                <table className='table table-lg table-striped table-hover h-100 w-100'>
                    <thead>
                        <tr>
                            <th scope='col'>Client ID</th>
                            <th scope='col'>Client Name</th>
                            <th scope='col'>Company name</th>
                            <th scope='col'>Mobile Number</th>
                            <th scope='col'>Email ID</th>
                            <th scope='col'>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {/* <tr>
                        <td>C-147</td>
                        <td>PMS SYSTEM</td>
                        <td>Manage projects and Tasks</td>
                        <td>12-08-2023</td>
                        <td>12-10-2023</td>
                        <td>
                            <select className="form-select form-select-sm">
                                <option>In-Process</option>
                                <option>Pending Approval</option>
                                <option>Completed</option>
                                <option>Failed</option>
                                <option>Not Started</option>
                            </select>
                        </td>
                    </tr>
                    <tr>
                        <td>C-147</td>
                        <td>PMS SYSTEM</td>
                        <td>Manage projects and Tasks</td>
                        <td>12-08-2023</td>
                        <td>12-10-2023</td>
                        <td>
                            <select className="form-select form-select-sm">
                                <option>In-Process</option>
                                <option>Pending Approval</option>
                                <option>Completed</option>
                                <option>Failed</option>
                                <option>Not Started</option>
                            </select>
                        </td>
                    </tr> */}
                        {table.length > 0 ? (
                            table.map((row, i) => (
                                <tr key={i}>
                                    <td>{row.clientID}</td>
                                    <td>{row.clientName}</td>
                                    <td>{row.companyName}</td>
                                    <td>{row.mobileNumber}</td>
                                    <td>{row.emailID}</td>
                                    <td>
                                        <button type="submit" className="btn btn-danger">Delete</button>
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

export default View4