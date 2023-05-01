import React from 'react'
import './view1.scss'
import 'bootstrap/dist/css/bootstrap.min.css';
import "bootstrap-icons/font/bootstrap-icons.css";

const View1 = () => {
  return (
    <>
        <div className="container bg-white rounded shadow mx-xl-5 me-xl-5">
            <p className="h2 pt-4 px-4 pb-xxl-5">View Projects</p>
            <table className='table table-lg table-striped table-hover h-100'>
                <thead>
                    <tr>
                        <th scope='col'>Project ID</th>
                        <th scope='col'>Project Name</th>
                        <th scope='col'>Description</th>
                        <th scope='col'>Start Date</th>
                        <th scope='col'>End Date</th>
                        <th scope='col'>Status</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>C-147</td>
                        <td>PMS SYSTEM</td>
                        <td>Manage projects and Tasks</td>
                        <td>12-08-2023</td>
                        <td>12-10-2023</td>
                        <td>
                            <select className="form-select form-select-sm">
                                <option>In-Process</option>
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
                    </tr>
                </tbody>
            </table>
        </div>
    </>
  )
}

export default View1