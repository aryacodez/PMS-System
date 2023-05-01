import React, { useState, useEffect } from 'react'
import './form4.scss'
const Form4 = () => {
  const [id, setId] = useState("");
  const [name, setName] = useState("");
  const [sdate, setSdate] = useState("");
  const [edate, setEdate] = useState("");
  const [select, setSelect] = useState("");

  {/*Fill the Select Value with projects*/ }
  const [table, setTable] = useState([]);
  useEffect(() => {
    fetch('/api/v1/getproject', {
      method: 'GET'
    }).then(res => res.json())
      .then(res => setTable(res.item))
  }, [])
  const values = table;
  //console.log(values)

  {/*Insert Data to DB*/ }

  const handleSubmit = async () => {
    await fetch('/api/v1/addtask', {
      method: 'POST',
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        taskID:id,
        taskName:name,
        sDate:sdate,
        eDate:edate
        //project:select
      })
    }).then(res => res.json())
      .then(data => {
        console.log(data);
        alert('Task added successfully');
        setId("");
        setName("");
        setSdate("");
        setEdate("");
        //setSelect("");
      }).catch(err => console.log(err))
  }

  return (
    <>
      <div className='container-xxl px-xxl-5 pb-xxl-5'>

        <form onSubmit={handleSubmit}>

          <div className='row gx-5 pt-xxl-4 bg-white pe-5 ps-5 me-5 ms-5 pb-5 rounded shadow'>
            <p className='h2 fw-bolder pb-4'>Add Tasks</p>
            <div className='col mt-5'>
              <div className='mb-4'>
                <label className='fs-5 fw-bolder'>Task ID</label>
                <input
                  type='text'
                  className='form-control mt-4 pb-3 text-start'
                  placeholder='eg: C1745'
                  id='task_id'
                  value={id}
                  onChange={(e) => setId(e.target.value)}
                />
              </div>
              <div className='mb-5 mt-5'>
                <label className='fs-5 fw-bolder mt-2'>Select Project</label>
                <select className="form-select form-select-md mb-3 mt-3 pb-3" aria-label=".form-select-lg example" onChange={(e) => setSelect(e.target.value)}>
                  <option value=''>Select Projects</option>
                  {
                    values.map((projects) =>
                      <option key={projects.projectName} value={projects.projectName}>{projects.projectName}</option>
                    )
                  }
                </select>
              </div>
            </div>
            <div className='col mt-5'>
              <div className='mb-4'>
                <label className='fs-5 fw-bolder'>Task Name</label>
                <input
                  type='text'
                  className='form-control  pb-3 mt-4'
                  placeholder='eg: Weather App Development'
                  id='project_name'
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
              </div>
              <div className='row'>
                <div className='col mt-3'>
                  <div className=''>
                    <label className='fs-5 fw-bolder'>Start Date</label>
                    <input
                      type="date"
                      className="form-control mt-4 pb-3"
                      id="dateInput"
                      name="date"
                      value={sdate}
                      onChange={(e) => setSdate(e.target.value)}
                    />
                  </div>
                </div>
                <div className='col mt-3'>
                  <div className=''>
                    <label className='fs-5 fw-bolder'>End Date</label>
                    <input
                      type="date"
                      className="form-control mt-4 pb-3"
                      id="dateInput"
                      name="date"
                      value={edate}
                      onChange={(e) => setEdate(e.target.value)}
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className='row d-flex align-self-center justify-content-center'>
              <button type="submit" className="btn btn-primary mt-xxl-3 w-75 mx-xxl-5 ">Submit</button>
            </div>
          </div>
        </form>
      </div>


    </>
  )
}

export default Form4