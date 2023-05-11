import React, { useState, useMemo  } from 'react'
import './form3.scss'
import projectId from '../../Generator/projectId'

const Form3 = () => {
  
  const [id, setId] = useState("");
  const [desc, setDesc] = useState("");
  const [name, setName] = useState("");
  const [sdate, setSdate] = useState("");
  const [edate, setEdate] = useState("");
  const project_id = useMemo(() => '#' + projectId.generateId(), []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    await fetch('/api/v1/addproject', {
      method: 'POST',
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        projectID: project_id,
        projectName: name,
        Description: desc,
        sDate: sdate,
        eDate: edate
      })
    }).then(() =>
      fetch('/api/v1/countprojects', {
        method: "PATCH"
      }))
      .then(res => res.json())
      .then(data => {
        console.log(data);
        alert('Project added successfully');
        setId("");
        setDesc("");
        setName("");
        setSdate("");
        setEdate("");
      }).catch(err => console.log(err));
      const newProjectId = '#' + projectId.generateId();
      setId(newProjectId);
  }

  return (
    <>
      <div className='container-xxl px-xxl-5 pb-xxl-5'>

        <form onSubmit={handleSubmit}>

          <div className='row gx-5 pt-xxl-4 bg-white pe-5 ps-5 me-5 ms-5 pb-5 rounded shadow'>
            <p className='h2 fw-bolder pb-4'>Add Projects</p>
            <div className='col mt-5'>
              <div className='mb-4'>
                <label className='fs-5 fw-bolder'>Project ID</label>
                <input
                  type='text'
                  className='form-control mt-4 pb-3 text-start'
                  placeholder='eg: C1745'
                  id='project_idss'
                  value={id || project_id}
                  onChange={(e) => setId(e.target.value)}
                  readOnly
                />
              </div>
              <div className='mb-5 mt-5'>
                <label className='fs-5 fw-bolder'>Project Description</label>
                <textarea
                  className="form-control mt-4"
                  aria-label="With textarea"
                  rows="4"
                  cols="50"
                  value={desc}
                  onChange={(e) => setDesc(e.target.value)}
                >
                </textarea>
              </div>
            </div>
            <div className='col mt-5'>
              <div className='mb-4'>
                <label className='fs-5 fw-bolder'>Project Name</label>
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
              <button type="submit" class="btn btn-primary mt-xxl-4 w-100">Submit</button>
            </div>
          </div>
        </form>
      </div>      
    </>
  )
}

export default Form3