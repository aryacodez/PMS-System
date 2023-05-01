import React, { useState } from 'react'
import './form6.scss'
const Form6 = () => {
  const [id, setId] = useState("")
  const [name, setName] = useState("")
  const [mob, setMob] = useState("")
  const [cname, setCname] = useState("")
  const [email, setEmail] = useState("")

  const handleSubmit = async () => {
    await fetch('/api/v1/addclient', {
      method: 'POST',
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        clientID: id,
        clientName: name,
        companyName: cname,
        mobileNumber: mob,
        emailID: email
        
      })
    }).then(() =>
    fetch('/api/v1/countclients', {
      method: "PATCH"
    }))
    .then(res => res.json())
      .then(data => {
        console.log(data)
        alert("Client added successfully")
        setId("");
        setName("");
        setMob("");
        setCname("");
        setEmail("");
      }).catch(err => console.log(err))
  }
  return (
    <>
      <div className='container-xxl px-xxl-5 pb-xxl-5'>

        <form onSubmit={handleSubmit}>

          <div className='row gx-5 pt-xxl-4 bg-white pe-5 ps-5 me-5 ms-5 pb-5 rounded shadow'>
            <p className='h2 fw-bolder pb-4'>Add Clients</p>
            <div className='col mt-5'>
              <div className='mb-5'>
                <label className='fs-5 fw-bolder'>Client ID</label>
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
                <label className='fs-5 fw-bolder'>Client Name</label>
                <input
                  type='text'
                  className='form-control  pb-3 mt-4'
                  placeholder='eg: John Doe'
                  id='project_name'
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
              </div>
              <div className='mb-5 mt-5'>
                <label className='fs-5 fw-bolder'>Mobile Number</label>
                <input
                  type='tel'
                  className='form-control  pb-3 mt-4'
                  placeholder='eg: 9999988888'
                  id='project_name'
                  value={mob}
                  onChange={(e) => setMob(e.target.value)}
                />
              </div>

            </div>
            <div className='col mt-5'>
              <div className='mb-5'>
                <label className='fs-5 fw-bolder'>Company Name</label>
                <input
                  type='text'
                  className='form-control  pb-3 mt-4'
                  placeholder='eg: Weather App Development'
                  id='project_name'
                  value={cname}
                  onChange={(e) => setCname(e.target.value)}
                />
              </div>
              <div className='mb-5 mt-5'>
                <label className='fs-5 fw-bolder'>Email ID</label>
                <input
                  type='email'
                  className='form-control  pb-3 mt-4'
                  placeholder='eg: doe@gmail.com'
                  id='project_name'
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              <div className='mb-5 mt-xxl-5'>
                <button type="submit" class="btn btn-primary mt-xxl-4 w-100">Submit</button>
              </div>

            </div>

            {/* <div className='row d-flex align-self-center justify-content-center'>
              
            </div> */}
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

export default Form6