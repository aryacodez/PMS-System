import React, { useState, useEffect } from 'react'
import './account.scss'
import 'bootstrap/dist/css/bootstrap.min.css';
import { useNavigate } from 'react-router-dom'

const Account = () => {
  const [profile, setProfile] = useState("")
  useEffect(() => {
    fetch('/api/v1/profile', {
      method: "GET"
    }).then(res => res.json())
      .then(res => setProfile(res.user))
  }, [])
  // console.log(profile)

  const [name, setName] = useState("")
  const [password, setPassword] = useState("")
  const [mob, setMob] = useState("")
  const [org, setOrg] = useState("")
  const [address, setAddress] = useState("")
  const [gender, setGender] = useState("")
  const [error, setError] = useState("")
  const navigate = useNavigate();
  const handleSubmit = async (e) => {
    e.preventDefault();
    await fetch('/api/v1/updateprofile', {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name: name,
        password: password,
        mobilenumber: mob,
        organization: org,
        address: address,
        gender: gender
      })
    }).then(res => res.json())
      .then(data => {
        //alert("Updated Successfully")
        console.log(data)
        if (data.success) {
          alert("Updated Successfully")          
          setName(data.name);
          setPassword(data.password);
          setMob(data.mobilenumber);
          setOrg(data.organization);
          setAddress(data.address);
          setGender(data.gender);
          setTimeout(() => {
            window.location.reload();
          }, 1);
        } else {
          setError("Error")
        }
        // setName(data.name)
        // setPassword(data.password)
        // setMob(data.mob)
        // setOrg(data.org)
        // setAddress(data.address)
        // setGender(data.gender)
      })
      .catch((err) => console.log(err))
  }

  return (
    <>
      <div className='container bg-white rounded shadow ms-4 me-4 ps-4 pe-4 pt-4 pb-4'>
        <p className='fs-4 ps-2'>My Account</p>
        <form onSubmit={handleSubmit}>
          <div className='row align-items-center mt-5 ms-1 me-1 d-flex justify-content-center'>

            <div className='col-6'>

              <div class="text-center">
                <img src='https://assets.telegraphindia.com/telegraph/2023/Apr/1682818971_file7oc013c2h8z1h4ofk1gc.gif' className="rounded-circle" alt="..." style={{ height: '200px', width: '200px' }} />
              </div>

              <div className='mb-4'>
                <label className='mb-2 fs-5'>Email</label>
                <input
                  type='email'
                  placeholder='John@gmail.com'
                  className="form-control"
                  id='email'
                  value={profile.email}
                  // onChange={(e) => setName(e.target.value)}
                  readOnly
                />
              </div>

              <div className='mb-4'>
                <label className='mb-2 fs-5'>Mobile Number</label>
                <input
                  type='tel'
                  placeholder='9999988888'
                  className="form-control"
                  id='tel'
                  value={mob || profile.mobilenumber}
                  onChange={(e) => setMob(e.target.value)}
                />
              </div>

              <div className='mb-4'>
                <label className='mb-2 fs-5'>Address</label>
                <input
                  type='text'
                  placeholder='14/5 Denver Lane, North Road, Zip code - 11470'
                  className="form-control"
                  id='address'
                  value={address || profile.address}
                  onChange={(e) => setAddress(e.target.value)}
                />
              </div>

              <div className='mb-4 d-flex flex-row-reverse bd-highlight'>
                <button type="button" class="btn btn-outline-info">Request for Admin Access</button>
              </div>

            </div>

            <div className='col-6'>

              <div className='mb-4 mt-4'>
                <label className='mb-2 fs-5'>User Id</label><br />
                <label className='mb-2 fs-5'>NAME#152%&</label><br />
              </div>

              <div className='mb-4'>
                <label className='mb-2 fs-5'>Name</label>
                <input
                  type='text'
                  placeholder='John Doe'
                  className="form-control"
                  id='name'
                  value={name || profile.name}
                  onChange={(e) => setName(e.target.value)}
                />
              </div>

              <div className='mb-4'>
                <label className='mb-2 fs-5'>Password</label>
                <input
                  type='password'
                  placeholder='Password must be at least of 5 Characters'
                  className="form-control"
                  id='password'
                  value={password || profile.password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>

              <div className='mb-4'>
                <label className='mb-2 fs-5'>Organization</label>
                <input
                  type='text'
                  placeholder='ABC Private Limited'
                  className="form-control"
                  id='text'
                  value={org || profile.organization}
                  onChange={(e) => setOrg(e.target.value)}
                />
              </div>

              <div className='mb-4'>
                <label className='mb-2 fs-5'>Gender </label>
                <select className="form-select form-select-md" aria-label=".form-select-lg example" value={gender || profile.gender} onChange={(e) => setGender(e.target.value)}>
                  <option value=''>Select Gender</option>
                  <option value='Male'>Male</option>
                  <option value='Female'>Female</option>
                  <option value='Others'>Others</option>
                </select>
              </div>

              <div className='mb-4 d-flex flex-row-reverse'>
                <button type="submit" className="btn btn-info">Save All</button>
              </div>
            </div>

          </div>
        </form>
      </div>
    </>
  )
}

export default Account