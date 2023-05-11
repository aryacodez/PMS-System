import React, { useState, useEffect } from 'react'
import './form5.scss'
const Form5 = () => {
  
  const [table, setTable] = useState([]);
  useEffect(() => {
    fetch('/api/v1/getproject', {
      method: 'GET'
    }).then(res => res.json())
      .then(res => setTable(res.item))
  }, [])
  const values = table;
  const [id,setId] = useState("")
  const [mob,setMob] = useState("")
  const [desg,setDesg] = useState("")
  const [name,setName] = useState("")
  const [email,setEmail] = useState("")
  const [select,setSelect] = useState("")

  const handleSubmit=(e)=>{
    e.preventDefault();
    fetch('/api/v1//addmember',{
      method:"POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        memberID: id,
        memberName:name,
        Designation:desg,
        mobileNumber:mob,
        emailID:email,
        project:select
      })
    }).then(res=>res.json())
    .then(data=>{
      console.log(data);
      alert('Member added successfully');
      setId("");
      setMob("");
      setDesg("");
      setName("");
      setEmail("");
      setSelect("")
    }).catch(err => console.log(err));
  }


  return (
    <>
      <div className='container-xxl px-xxl-5 pb-xxl-5'>

        <form onSubmit={handleSubmit}>

          <div className='row gx-5 pt-xxl-4 bg-white pe-5 ps-5 me-5 ms-5 pb-5 rounded shadow'>
            <p className='h2 fw-bolder pb-4'>Add Members</p>
            
            <div className='col mt-5'>
              <div className='mb-5'>
                <label  className='fs-5 fw-bolder'>Member ID</label>
                <input 
                type='text' 
                className='form-control mt-4 pb-3 text-start' 
                placeholder='eg: C1745' 
                id='task_id' 
                value = {id}
                onChange={(e) => setId(e.target.value)}
                />
              </div>
              <div className='mb-5 mt-5'>
                <label  className='fs-5 fw-bolder'>Mobile Number</label>
                <input 
                type='tel' 
                className='form-control  pb-3 mt-4' 
                placeholder='eg: 9999988888' 
                id='project_name' 
                value = {mob}
                onChange={(e) => setMob(e.target.value)}
                />
              </div>
              <div className='mb-5 mt-5'>
                <label  className='fs-5 fw-bolder'>Designation</label>
                <input 
                type='text' 
                className='form-control  pb-3 mt-4' 
                placeholder='eg: SDE' 
                id='project_name' 
                value = {desg}
                onChange={(e) => setDesg(e.target.value)}
                />
              </div>
            </div>
            <div className='col mt-5'>
              <div className='mb-5'>
                <label  className='fs-5 fw-bolder'>Member Name</label>
                <input 
                type='text' 
                className='form-control  pb-3 mt-4'
                placeholder='eg: Weather App Development' 
                id='project_name' 
                value = {name}
                onChange={(e) => setName(e.target.value)}
                />
              </div>
              <div className='mb-5 mt-5'>
                <label  className='fs-5 fw-bolder'>Email ID</label>
                <input 
                type='email' 
                className='form-control  pb-3 mt-4' 
                placeholder='eg: doe@gmail.com' 
                id='project_name' 
                value = {email}
                onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              <div className='mb-5 mt-5'>
                <label  className='fs-5 fw-bolder mt-2'>Assign to Project</label>
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
            <div className='row d-flex align-self-center justify-content-center'>
              <button type="submit" class="btn btn-primary mt-xxl-3 w-75 mx-xxl-5 ">Submit</button>
            </div>
          </div>
        </form>
      </div>

      {/* Second Style */}

      {/* <div className='container-sm px-xxl-5 pb-xxl-5'>
        <p className='h2 fw-bolder pb-5'>Add Projects</p>
        <form>
          <div className= 'pt-xxl-4 bg-white pe-5 ps-5 me-5 ms-5 pb-5 rounded shadow flex-fill'>
            <div className='mb-4'>
              <label for='project_id' className='fs-5 fw-bolder'>Project ID</label>
              <input type='text' className='form-control mt-4' placeholder='eg: C1745' id='project_id' />
            </div>

            <div className='mb-4'>
              <label for='project_name' className='fs-5 fw-bolder'>Project Name</label>
              <input type='text' className='form-control mt-4' placeholder='eg: Weather App Development' id='project_name' />
            </div>

            <div className='mb-4'>
              <label for='project_id' className='fs-5 fw-bolder'>Project Name</label>
              <textarea class="form-control mt-4" aria-label="With textarea" rows="4" cols="50"></textarea>
            </div>

            <div className='row'>
              <div className='col'>
                <div className='mb-4'>
                  <label for="dateInput" className='fs-5 fw-bolder'>Start Date</label>
                  <input type="date" class="form-control mt-4" id="dateInput" name="date" />
                </div>
              </div>
              <div className='col'>
                <div className='mb-4'>
                  <label for="dateInput" className='fs-5 fw-bolder'>End Date</label>
                  <input type="date" class="form-control mt-4" id="dateInput" name="date" />
                </div>
              </div>
            </div>

          </div>
        </form>
      </div> */}
    </>
  )
}

export default Form5