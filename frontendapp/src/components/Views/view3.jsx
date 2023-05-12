import React, { useState, useEffect } from "react";
import "./view3.scss";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";

const View3 = () => {
  const [table, setTable] = useState([]);
  useEffect(() => {
    fetch("/api/v1/gettask", {
      method: "GET",
    })
      .then((res) => res.json())
      .then((res) => setTable(res.task));
  }, []);

  console.log(table);
  const handleStatus = (id, newstatus) => {
    fetch("/api/v1/updatestatus/" + id, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ status: newstatus }),
    })
      .then((res) => res.json())
      .then(() => window.location.reload())
      .catch((e) => console.error(e));
  };
  const handleDelete = (id) => {
    const updateTable = table.filter((project) => project._id !== id);
    setTable(updateTable);

    fetch("/api/v1/removetask/" + id, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .catch((e) => console.error(e));
  };
  return (
    <>
      <div className="container bg-white rounded shadow mx-xl-5 me-xl-5">
        <p className="h2 pt-4 px-3 pb-2">View Tasks</p>
        <table className="table table-lg table-striped table-hover h-100 w-100">
          <thead>
            <tr>
              <th scope="col">Task ID</th>
              <th scope="col">Task Name</th>
              <th scope="col">Part of Project</th>
              <th scope="col">Start Date</th>
              <th scope="col">End Date</th>
              <th scope="col">Status</th>
              <th scope="col">Action</th>
            </tr>
          </thead>
          <tbody>
            {table.length > 0 ? (
              table.map((row, i) => (
                <tr key={i}>
                  <td>{row.taskID}</td>
                  <td>{row.taskName}</td>
                  <td>{row.project}</td>
                  <td>{row.sDate}</td>
                  <td>{row.eDate}</td>
                  <td>
                    <select
                      className="form-select form-select-sm"
                      onChange={(e) => handleStatus(row._id, e.target.value)}
                    >
                      <option value="In Process">In Process</option>
                      <option value="Completed">Completed</option>
                      <option value="Not Started">Not Started</option>
                    </select>
                  </td>
                  <td>
                    <button
                      type="submit"
                      className="btn btn-danger"
                      onClick={() => handleDelete(row._id)}
                    >
                      Delete
                    </button>
                    {/* <button type="submit" className="btn btn-warning ms-2 text-white">Download</button> */}
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
  );
};

export default View3;
