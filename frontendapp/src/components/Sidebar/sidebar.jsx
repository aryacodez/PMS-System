import React, { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import "bootstrap-icons/font/bootstrap-icons.css";
import './sidebar.scss'
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom'

const Sidebar = () => {
  const [isDropdownActive, setDropdownActive] = useState("false");
  const [isDropdownActive1, setDropdownActive1] = useState("false");
  const [isDropdownActive2, setDropdownActive2] = useState("false");
  const [isDropdownActive3, setDropdownActive3] = useState("false");

  const navigate = useNavigate();
  const handleLogout = async () => {
    await fetch('/api/v1/logout', {
      method: 'POST',
      headers: {
        "Content-Type": "application/json",
      },
      credentials: 'include'
    })
      .then(() => {
        alert('Logout Successful');
        navigate('/signin')
      }
      )
      .catch(err => console.log(err))
  }

  return (
    <>
      <div className='sidebar overflow-hidden' id='side_nav'>
        <div className='header-box px-3 pt-3 pb-4 d-flex'>
          <h1 className='fs-4'><span className='bg-white text-dark rounded shadow px-2 me-2'>S</span><span className='text-white'>ProDesk</span></h1>
          <button className='btn d-md-none d-block close-btn mx-5 py-0 text-white align-items-end'>
            <i className="bi bi-list"></i>
          </button>
        </div>
        <ul className='list-unstyled px-2 mt-3'>
          <li className='hov'>
            <Link to='/dashboard'>
              <a className='text-decoration-none px-5 py-2 d-block'>
                <i className="bi bi-house-door-fill"></i>
                <span className='px-2'>Dashboard</span>
              </a>
            </Link>
          </li>
          <li onClick={() => setDropdownActive(!isDropdownActive)} className='hov'>
            <a className='text-decoration-none px-5 py-2 d-block'>
              <i className="bi bi-clipboard-data-fill"></i>
              <span className='px-2'>Projects</span>
              <i className="bi bi-caret-down-fill"></i>
            </a>
            <ul className={isDropdownActive ? "list-unstyled collapse" : "list-unstyled px-5"}>
              <li>
                <Link to='/addprojects'>
                  <a className='text-decoration-none px-5 py-2 d-block'>
                    Add Projects
                  </a>
                </Link>
              </li>
              <li>
                <Link to='/viewprojects'>
                  <a className='text-decoration-none px-5 py-2 d-block'>
                    View Projects
                  </a>
                </Link>
              </li>
            </ul>
          </li>
          <li onClick={() => setDropdownActive1(!isDropdownActive1)} className='hov'>
            <a className='text-decoration-none px-5 py-2 d-block'>
              <i className="bi bi-list-task"></i>
              <span className='px-2'>Tasks</span>
              <i className="bi bi-caret-down-fill"></i>
            </a>
            <ul className={isDropdownActive1 ? "list-unstyled collapse" : "list-unstyled px-5"}>
              <li>
                <Link to='/addtasks'>
                  <a className='text-decoration-none px-5 py-2 d-block'>
                    Add Tasks
                  </a>
                </Link>
              </li>
              <li>
                <Link to='/viewtasks'>
                  <a className='text-decoration-none px-5 py-2 d-block'>
                    View Tasks
                  </a>
                </Link>
              </li>
            </ul>
          </li>
          <li onClick={() => setDropdownActive3(!isDropdownActive3)} className='hov'>
            <a className='text-decoration-none px-5 py-2 d-block'>
              <i className="bi bi-file-person-fill"></i>
              <span className='px-2'>Issues</span>
              <i className="bi bi-caret-down-fill"></i>
            </a>
            <ul className={isDropdownActive3 ? "list-unstyled collapse" : "list-unstyled px-5"}>
              <li>
                <Link to='/addissues'>
                  <a className='text-decoration-none px-5 py-2 d-block'>
                    Add Issues
                  </a>
                </Link>
              </li>
              <li>
                <Link to='/viewissues'>
                  <a className='text-decoration-none px-5 py-2 d-block'>
                    View Issues
                  </a>
                </Link>
              </li>
            </ul>
          </li>
          <li onClick={() => setDropdownActive2(!isDropdownActive2)} className='hov'>
            <a className='text-decoration-none px-5 py-2 d-block'>
              <i className="bi bi-person-lines-fill"></i>
              <span className='px-2'>Colleague</span>
              <i className="bi bi-caret-down-fill"></i>
            </a>
            <ul className={isDropdownActive2 ? "list-unstyled collapse" : "list-unstyled px-5"}>
              <li>
                <Link to='/addmembers'>
                  <a className='text-decoration-none px-5 py-2 d-block'>
                    Add Colleague
                  </a>
                </Link>
              </li>
              <li>
                <a className='text-decoration-none px-5 py-2 d-block'>
                  View Colleague
                </a>
              </li>
            </ul>
          </li>
          <li onClick={() => setDropdownActive3(!isDropdownActive3)} className='hov'>
            <a className='text-decoration-none px-5 py-2 d-block'>
              <i className="bi bi-file-person-fill"></i>
              <span className='px-2'>Clients</span>
              <i className="bi bi-caret-down-fill"></i>
            </a>
            <ul className={isDropdownActive3 ? "list-unstyled collapse" : "list-unstyled px-5"}>
              <li>
                <Link to='/addclients'>
                  <a className='text-decoration-none px-5 py-2 d-block'>
                    Add Clients
                  </a>
                </Link>
              </li>
              <li>
                <Link to='/viewclients'>
                  <a className='text-decoration-none px-5 py-2 d-block'>
                    View Clients
                  </a>
                </Link>
              </li>
            </ul>
          </li>
        </ul>
        <hr className='hcolor mx-2' />
        <ul className='list-unstyled px-2'>
          <li className='hov'>
            <Link to='/profile'>
              <a className='text-decoration-none px-5 py-2 d-block'>
                <i className="bi bi-person-vcard-fill"></i>
                <span className='px-2'>Account</span>
              </a>
            </Link>
          </li>
          <li className='hov'>
            <a className='text-decoration-none px-5 py-2 mt-xxl-5 justify-content-end d-block' onClick={handleLogout}>
              <i className="bi bi-box-arrow-left"></i>
              <span className='px-2'>Logout</span>
            </a>
          </li>
        </ul>
      </div>

    </>
  )
}

export default Sidebar